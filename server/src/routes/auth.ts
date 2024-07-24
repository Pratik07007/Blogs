import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signUpInput,signInInputs } from "@pratik07007/commons";

const authRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

authRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const { email, password, name } = await c.req.json();
    const response = signUpInput.safeParse({ email, password, name });
    if (!response.success) {
      return c.json({ msg: response.error.issues[0].message });
    }
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
    const token: string = (await sign({ id: user.id }, c.env.JWT_SECRET)) || "";
    return c.json({ msg: "user created succesfully", token });
  } catch (error) {
    return c.json({ msg: "user creation failed, please try again later" });
  }
});

authRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { email, password } = await c.req.json();
  const response = signInInputs.safeParse({ email, password});
    if (!response.success) {
      return c.json({ msg: response.error.issues[0].message });
    }
  try {
    const userFound = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (userFound === null) {
      return c.json({ msg: "Invalid Credentials" });
    }
    const token: string =
      (await sign({ id: userFound.id }, c.env.JWT_SECRET)) || "";
    return c.json({ msg: "user signed in succesfully", token });
  } catch (error) {
    return c.json({ msg: "user sign in failed" });
  }
});

export default authRouter;
