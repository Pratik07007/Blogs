import { Hono } from "hono";
import authRouter from "./routes/auth";
import blogRouter from "./routes/blogs";
import { cors } from 'hono/cors'
import contactRouter from "./routes/contact";

const app = new Hono();
app.use('/*', cors())

app.route("/api/v1/auth", authRouter);
app.route("/api/v1/blog", blogRouter);
app.route("/api/v1/contact",contactRouter)


export default app;
