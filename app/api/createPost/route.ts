// import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import {prisma} from '../../client'

// const prisma = new PrismaClient();

type postProps = {
  title: string;
}

export async function POST(req: Request) {
  let data;
  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
    const post: postProps = await req.json();
    data = await prisma.post.create({
      data: {
        title: post.title
      }
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(error);
  } finally {
    prisma.$disconnect()
    return NextResponse.json(data);
  }
}