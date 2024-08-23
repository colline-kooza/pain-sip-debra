"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Upload,
} from "lucide-react"
import { PiSpinner } from "react-icons/pi"

import { Badge } from "@/components/ui/badge"

// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"


import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveIngredient, updateIngredient } from "@/actions/ingredient"

type IngredientInputs = {
  title: string;
  description: string;
  qty: number;
  price: number;
};
export default function IntreForm({initialData}:any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm<IngredientInputs>({
      defaultValues: initialData,
  });

  async function onSubmit(data: any) {
    try {
        setLoading(true);
        
        const { id, createdAt, updatedAt, ...updateData } = data;

        if (initialData) {
            await updateIngredient(initialData.id, updateData);
            toast({
                title: "Ingredient Updated",
                description: "Ingredient was successfully updated",
            });
        } else {
            await saveIngredient(updateData);
            toast({
                title: "Ingredient Created",
                description: "Ingredient was successfully created",
            });
        }

        router.push("/dashboard/ingredients");
        setLoading(false);
        reset();
    } catch (error) {
        console.log(error);
        setLoading(false);
        toast({
            variant: "destructive",
            title: "Error",
            description: "There was a problem with your request.",
        });
    }
}



  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <form onSubmit={handleSubmit(onSubmit)} className="grid flex-1 items-start gap-4 p-4 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
             <Link href="/dashboard/manage-dishes">
             <Button type="button" variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
             </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Ingredient
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
              Ingredient
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button type="button" variant="outline" size="sm">
                  Discard
                </Button>
                <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
               
                               {loading ? "Processing..." : initialData ? "Update Ingredient" : "Save Ingredient"}

              </Button>
    
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Ingredient Details</CardTitle>
                    <CardDescription>
                      Insert Ingredient Details which you be used in the due course of the Ingredient
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <div>
                <Label htmlFor="title">Title</Label>
                <Input
                    id="title"
                    type="text"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    {...register("description", { required: "Description is required" })}
                />
                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
            </div>
                  </CardContent>
                </Card>
             
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
               
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>ingredient Details</CardTitle>
                    <CardDescription>
                   Insert ingredient Details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <div>
                <Label htmlFor="qty">Quantity</Label>
                <Input
                    id="qty"
                    type="number"
                    {...register("qty", { required: "Quantity is required", valueAsNumber: true })}
                    />
                {errors.qty && <span className="text-red-500">{errors.qty.message}</span>}
            </div>

            <div>
                <Label htmlFor="price">Price</Label>
                <Input
                    id="price"
                    type="number"
                    {...register("price", { required: "Price is required", valueAsNumber: true })}
                    />
                {errors.price && <span className="text-red-500">{errors.price.message}</span>}
            </div>

                  </CardContent>
                </Card>
               
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button type="button" variant="outline" size="sm">
                Discard
              </Button>
              {
          loading ? (
        <Button variant='outline' disabled={loading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/>{loading ? "Processing..." : initialData ? "Update Ingredient" : "Save Ingredient"}

       </Button>
           )  : (
      <Button type="submit" className="w-full">
       
       {loading ? "Processing..." : initialData ? "Update Ingredient" : "Save Ingredient"}

      </Button>
           )
}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
