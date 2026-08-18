import { Client } from "pg";

async function query(query) {
  const client = new Client({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    database: "postgres",
    password: "local_password",
  });

  await client.connect();
  const result = await client.query(query);
  await client.end();
  return result;
}

export default {
  query: query,
};
