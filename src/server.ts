import express from "express";
import bodyParser from "body-parser";

import { helloWorldRouter } from "./routers";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(helloWorldRouter);

app.listen(PORT, () => {
  console.log(`The application is listening  on http://localhost:${PORT}`);
});
