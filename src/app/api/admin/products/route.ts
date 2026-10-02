import { NextRequest, NextResponse } from "next/server";

import { authenticateRequest } from "../../_lib/auth";

import { getProducts } from "../../products/_services/product.service";

export const GET = async (request: NextRequest) => {
  const user = authenticateRequest(request);

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "Authentication required",
      },
      {
        status: 401,
      },
    );
  }

  if (user.role !== "admin") {
    return NextResponse.json(
      {
        success: false,
        message: "Access denied",
      },
      {
        status: 403,
      },
    );
  }

  const products = getProducts();

  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
    data: products,
  });
};
