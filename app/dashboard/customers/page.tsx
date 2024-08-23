import authOptions from '@/lib/authOptions';
import getData from '@/lib/getData';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOptions);
 
  const user = session?.user;
  const role = user?.role;
  if (role === "USER") {
    redirect("/");
  }
  
  const orders =await getData("/order")
  return (
    <div>page</div>
  )
}
