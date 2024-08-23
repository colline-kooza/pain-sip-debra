"use server";

import db from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function saveIngredient(data: any) {
  // console.log(data)
    try {
        const newIngredient = await db.ingredient.create({
            data,
        });
        revalidatePath("/dashboard/ingredients");
        // console.log(newIngredient);
    } catch (error) {
        console.log(error);
    }
}

export async function getIngredients() {
  try {
      const ingredients = await db.ingredient.findMany();
      return ingredients;
  } catch (error) {
      console.log(error);
  }
}

export async function deleteIngredient(id: string) {
  try {
      const deletedIngredient = await db.ingredient.delete({
          where: {
              id,
          },
      });
      revalidatePath("/dashboard/manage-dishes");
      console.log(deletedIngredient);
      return deletedIngredient;
  } catch (error) {
      console.log(error);
  }
}

export async function getIngredient(id: string) {
  try {
      const ingredient = await db.ingredient.findUnique({
          where: {
              id,
          },
      });
      return ingredient;
  } catch (error) {
      console.log(error);
  }
}



export async function updateIngredient(id: string, data: any) {
  try {
      const updatedIngredient = await db.ingredient.update({
          where: {
              id,
          },
          data,
      });
      revalidatePath("/dashboard/ingredients");
      return updatedIngredient;
  } catch (error) {
      console.log(error);
  }
}