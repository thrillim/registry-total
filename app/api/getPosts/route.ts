// import { Post, PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import {prisma} from '../../client'

export async function GET() {
  // const prisma = new PrismaClient();
  // let data: Post[] = [];
  let data: any = [];

  try {
    data = await prisma.post.findMany()
  } catch (err) {
    console.error(err)
  } finally {
    // prisma.$disconnect()
    return NextResponse.json(data);
  }
}