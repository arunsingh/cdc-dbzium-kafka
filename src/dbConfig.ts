import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",      
  port: 5432,
  user: "postgres",           
  password: "postgres",
  database: "inventory",        
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL successfully!");

    const result = await client.query(`
      CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(50) UNIQUE NOT NULL,
          price INT NOT NUll,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `)
    console.log(result)


  } catch (err: any) {
    console.error("Connection error:", err);
  } finally {
    await client.end();
  }
}


connectDB()