import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";

export const GET = async (request: NextRequest) => {
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

  return NextResponse.json({
    success: true,
    user: session.user,
  });
};
