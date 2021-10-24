import express from "express";

import { helloWorldRouter } from "./routers";

const app = express();

const PORT = 3000;

app.use(helloWorldRouter);

app.listen(PORT, () => {
  console.log(`The application is listening  on http://localhost:${PORT}`);
});
