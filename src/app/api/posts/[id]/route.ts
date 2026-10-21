import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";

import { canDeleteResource, canEditResource } from "@/lib/auth/permissions";

interface Post {
  id: number;
  title: string;
  userId: string;
}

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

const posts: Post[] = [
  {
    id: 1,
    title: "My First Post",
    userId: "user-1",
  },
  {
    id: 2,
    title: "Another Post",
    userId: "user-2",
  },
];

export const PATCH = async (request: NextRequest, { params }: RouteContext) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  const { id } = await params;

  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  }

  if (!canEditResource(session.user, post)) {
    return NextResponse.json(
      {
        success: false,
        message: "Forbidden",
      },
      {
        status: 403,
      },
    );
  }

  const body = await request.json();

  post.title = String(body.title ?? post.title);

  return NextResponse.json({
    success: true,
    message: "Post updated successfully",
    data: post,
  });
};

export const DELETE = async (
  request: NextRequest,
  { params }: RouteContext,
) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  const { id } = await params;

  const index = posts.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return NextResponse.json(
      {
        success: false,
        message: "Post not found",
      },
      {
        status: 404,
      },
    );
  }

  const post = posts[index];

  if (!canDeleteResource(session.user, post)) {
    return NextResponse.json(
      {
        success: false,
        message: "Forbidden",
      },
      {
        status: 403,
      },
    );
  }

  const deletedPost = posts.splice(index, 1)[0];

  return NextResponse.json({
    success: true,
    message: "Post deleted successfully",
    data: deletedPost,
  });
};
