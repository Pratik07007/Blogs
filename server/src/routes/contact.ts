import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { Hono } from "hono";

const contactRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

contactRouter.post("/", async (c) => {
  const prism = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const { email, subject, message } = await c.req.json();
  try {
    const form = await prism.contact.create({
      data: {
        email,
        subject,
        message,
      },
    });
    return c.json({ succes: true, msg: "We will contact you soon" });
  } catch (error) {
    return c.json({ succes: false, msg: "Error whiel submitting form" });
  }
});

export default contactRouter;
