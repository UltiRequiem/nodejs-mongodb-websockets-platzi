import { Router } from "express";

const helloWorldRouter = Router();

helloWorldRouter.get("/", (_request, response) => {
  response.send("Hello World!");
});

export { helloWorldRouter };
