import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { postBlogInput, updateBlogInput } from "@pratik07007/commons";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const token: string = c.req.header("authorization") || "";
  try {
    const resp = await verify(token, c.env.JWT_SECRET);
    if (resp.id) {
      c.set("userId", resp.id);
      await next();
    } else {
      return c.json("unauthorized, please login to continue");
    }
  } catch (error) {
    return c.json({ msg: "unauthorized, please login to continue" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { title, content, imageUrl } = await c.req.json();
  const response = postBlogInput.safeParse({ title, content });
  if (!response.success) {
    return c.json({ error: response.error.issues[0].message }, 400);
  }
  const authorId = c.get("userId");
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId,
        imageUrl,
      },
    });
    return c.json({
      succes: true,
      msg: "Blog created succesfully",
      id: post.id,
    });
  } catch (error) {
    return c.json({ succes: false, msg: "Blog creation failed" });
  }
});

blogRouter.get("single/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const singleBlog = await prisma.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return c.json(singleBlog);
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { id, title, content } = await c.req.json();
  const response = updateBlogInput.safeParse({ title, content, id });
  if (!response.success) {
    return c.json({ succes: false, error: response.error.issues[0].message });
  }
  try {
    await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
    return c.json({ succes: true, msg: "updated succesfully" });
  } catch (error) {
    return c.json({ succes: false, msg: "error while updating blog" });
  }
});

blogRouter.get("/all", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  // const pageNo = c.req.query("pageNo") || "";
  // const parsedPageNo: number = Number(pageNo);
  // const skip: number = (parsedPageNo-1) * 6;

  const blogs = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      createdAt: true,
      imageUrl: true,
      author: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return c.json(blogs);
});

export default blogRouter;
