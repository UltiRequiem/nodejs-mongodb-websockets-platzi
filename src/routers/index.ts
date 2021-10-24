import { Router } from "express";

export const helloWorldRouter = Router();

helloWorldRouter.get("/", (_request, response) => {
  response.send("Hello World!");
});

helloWorldRouter.post("/message", (request, response) => {
  console.log(request.body);
  response.send("Ok");
});

export const otherRouter = Router();
