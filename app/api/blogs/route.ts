import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  const blogs = await prisma.blog.findMany();
  console.log("🚀 ~ file: route.ts:6 ~ GET ~ blogs:", blogs);
  return NextResponse.json(blogs);
}
export async function POST(request: Request) {
  const data = await request.json();
  const blog = await prisma.blog.create({ data });
  return NextResponse.json(blog);
}
export async function PUT(request: Request) {
  return NextResponse.json(request.json());
}
