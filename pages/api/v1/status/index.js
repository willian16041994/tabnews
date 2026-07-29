import database from "../../../../infra/database.js";

async function status(request, response) {
  const resultDb = await database.query("SELECT 1 + 1 ;");
  response.status(200).json({ chave: "ok" });
}

export default status;
