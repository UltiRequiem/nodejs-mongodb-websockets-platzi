import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`The application is listening  on http://localhost:${PORT}`);
});
