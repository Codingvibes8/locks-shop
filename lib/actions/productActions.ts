"use server";

import { db } from "@/db/drizzle";
import { desc } from "drizzle-orm";
import { products } from "@/db/schema";

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4,
  });
  return data;
}

// "use server";
// app/actions.ts

// import { neon } from "@neondatabase/serverless";

// export async function getData() {
//     const sql = neon(process.env.DATABASE_URL!);
//     const data = await sql`...`;
//     return data;
// }
