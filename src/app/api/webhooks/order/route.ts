import { NextRequest, NextResponse } from "next/server";

import * as z from "zod";

const orderWebhookSchema = z.object({
  event: z.enum(["order.created", "order.paid"]),

  data: z.object({
    id: z.string(),
    amount: z.number().nonnegative(),
  }),
});

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const result = orderWebhookSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid webhook payload",
        },
        {
          status: 400,
        },
      );
    }

    const { event, data } = result.data;

    console.log(`Webhook received: ${event}`, data);

    return NextResponse.json({
      success: true,
      received: true,
    });
  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Webhook processing failed",
      },
      {
        status: 500,
      },
    );
  }
};
