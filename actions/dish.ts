'use server'
import db from "@/prisma/db";
import { revalidatePath } from "next/cache";
// import { DishProps } from "@/types/types";
export async function saveDish(data: any) {
  try {
    const { ingredients, ...dishData } = data;

    const newDish = await db.dish.create({
      data: {
        ...dishData,
        ingredients: {
          create: ingredients.map((ingredient: any) => ({
            ingredientId: ingredient.id,
            qty: ingredient.qty,
          })),
        },
      },
    });

    for (const ingredient of ingredients) {
      const updatedIngredient = await db.ingredient.update({
        where: { id: ingredient.id },
        data: { qty: { decrement: ingredient.qty } },
      });

      // Check if the quantity is 0, and if so, delete the ingredient
      if (updatedIngredient.qty <= 0) {
        // Delete the related DishIngredient entries first
        await db.dishIngredient.deleteMany({
          where: { ingredientId: updatedIngredient.id },
        });

        // Delete the ingredient itself
        await db.ingredient.delete({
          where: { id: updatedIngredient.id },
        });

        // Create a notification
        await db.notification.create({
          data: {
            title: "Ingredient Out of Stock",
            description: `The ingredient '${updatedIngredient.title}' is out of stock and has been removed.`,
            // Add any other necessary fields here
          },
        });
      }
    }

    revalidatePath("/dashboard/ingredients");
    return newDish;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save dish");
  }
}

export async function getDishes() {
  try {
    const dishes = await db.dish.findMany();
    return dishes;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dishes");
  }
}

export async function getSingleDish(dishId: string) {
  try {
    const dish = await db.dish.findUnique({
      where: {
        id: dishId,
      },
    });
    return dish;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dish");
  }
}


export async function deletedDish(id: string) {
  try {
    const deletedDish = await db.dish.delete({
      where: {
        id,
      },
    });
    // console.log(deletedDish);
    return deletedDish;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete dish");
  }
}

// export async function updateDish(id: string, data: any) {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//   try {
//     const response = await fetch(`${baseUrl}/api/dish/${id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       // throw new Error(errorData.message || 'Failed to update dish');
//     }

//     const updatedDish = await response.json();
//     return updatedDish;
//   } catch (error) {
//     console.error('Error updating dish:', error);
//     // Handle the error appropriately
//     throw error;
//   }
// }
