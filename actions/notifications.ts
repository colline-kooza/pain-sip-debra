import db from "@/prisma/db";

export async function getNotifications() {
  try {
    const notifications = await db.notification.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return(notifications);
  } catch (error) {
    console.error(error);
 
  }
}
