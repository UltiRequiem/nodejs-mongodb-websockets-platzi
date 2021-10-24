import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (_request, response) => {
  response.send({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(`The application is listening  on http://localhost:${PORT}`);
});
