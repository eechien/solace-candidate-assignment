import { ilike, or, eq, sql } from 'drizzle-orm'

import db from "../../../db";
import { advocates } from "../../../db/schema";
import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
) {
  let searchTerm
  if (request.nextUrl.searchParams.get('searchTerm')) {
    searchTerm = request.nextUrl.searchParams.get('searchTerm')
    searchTerm = `%${searchTerm}%`
    console.log(searchTerm)
  }
  const data = await db.select().from(advocates).where(
    searchTerm ? (
      or(
        ilike(advocates.firstName, searchTerm),
        ilike(advocates.lastName, searchTerm),
        ilike(advocates.city, searchTerm),
        ilike(advocates.degree, searchTerm),
      )
    ) : undefined
  );
  return Response.json({ data });
}
