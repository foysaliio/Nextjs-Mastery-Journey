import { NextResponse } from "next/server";

import { getExternalUser } from "../../_lib/external-api";

export const GET = async () => {
  try {
    const user = await getExternalUser(1);

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("External API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch external user",
      },
      {
        status: 500,
      },
    );
  }
};
