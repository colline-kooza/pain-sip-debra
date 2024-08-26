import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { getingredients } from "@/actions/dish"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { getIngredients } from "@/actions/ingredient"

import DeleteIntre from '@/components/DeleteIntre';
import UpdateIntreg from '@/components/UpdateIntreg';

export default async function page() {
    const session = await getServerSession(authOptions);
    const ingredients= await getIngredients()
    

    const user = session?.user;
    const role = user?.role;
    if (role === "USER") {
      redirect("/");
    }
  return (
    <div className="flex flex-col lg:w-[100%] md:w-[100%] w-full mt-5">
      
    <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
           
          </TabsList>
          <div className="lg:mr-0 md:mr-5 mr-12 flex items-center gap-2">
           
            <Link href="/dashboard/add-ingredient/new">
                 <Button size="sm" className="h-8 gap-1 ">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:">
                Add New ingredient
              </span>
            </Button>
            </Link>
         
          </div>
        </div>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Manage ingredients</CardTitle>
              <CardDescription>
                Manage your ingredients and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Table>
                <TableHeader>
                  <TableRow>
              
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden lg:table-cell  md:hidden ">Price</TableHead>
                 
                    <TableHead className="hidden lg:table-cell  md:hidden ">
                      Qty
                    </TableHead>
                  
                    <TableHead className="hidden lg:table-cell  md:hidden ">
                      Created At
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
{ingredients?.map((ingredient) => (
<TableRow key={ingredient.id}>

  <TableCell className="font-medium whitespace-nowrap">
    {ingredient.title}
  </TableCell>

  <TableCell className="md:table-cell">
    ${ingredient.price.toFixed(2)} 
  </TableCell>
  <TableCell className="hidden lg:table-cell  md:hidden ">
   {ingredient.qty}
  </TableCell>
  <TableCell className="hidden lg:table-cell  md:hidden ">
  {ingredient.createdAt.toDateString()} 
  </TableCell>
  <TableCell>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-haspopup="true"
          size="icon"
          variant="ghost"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <UpdateIntreg id={ingredient.id}/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DeleteIntre id={ingredient.id}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </TableCell>
</TableRow>
))}
</TableBody>

              </Table>
              </div>
              
            </CardContent>
        
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  </div>
  )
}
