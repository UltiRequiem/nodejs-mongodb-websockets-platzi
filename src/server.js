import { Server } from "node:http";
import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";

import { databaseUrl, port, host } from "./config";
import { connect } from "./socket";
import database from "./database";
import router from "./network/routes";

const app = express();
app.use(cors());

app.use(json());
app.use(urlencoded({ extended: false }));

router(app);

const server = Server(app);

database(databaseUrl);

connect(server);

server.listen(port, () => {
  console.log(`La aplicación está escuchando en ${host}:${port}`);
});
