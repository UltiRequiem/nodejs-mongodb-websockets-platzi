import moongose from "mongoose";

moongose.Promise = global.Promise;

export default async function connect(url) {
  await moongose.connect(url, {
    useNewUrlParser: true,
  });

  console.log("[db] Conectada con éxito");
}
