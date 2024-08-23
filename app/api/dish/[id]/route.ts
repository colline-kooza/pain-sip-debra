import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params: { id } }: { params: { id: string } }) {
  try {
    const data = await request.json();

    const updateData: any = {};
    if (data.title) updateData.title = data.title;
    if (data.amount) updateData.amount = data.amount;
    if (data.qty) updateData.qty = data.qty;
    if (data.description) updateData.description = data.description;
    if (data.images) updateData.images = data.images;
    if (data.categoryId) updateData.categoryId = data.categoryId;
    if (data.orderId) updateData.orderId = data.orderId;
    if (data.ingredients) updateData.ingredients = data.ingredients;

    const updatedDish = await db.dish.update({
      where: {
        id,
      },
      data: updateData,
    });

    return NextResponse.json(updatedDish);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: 'Failed to update dish',
      },
      {
        status: 500,
      }
    );
  }
}
