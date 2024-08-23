"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Minus,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";
import { PiSpinner } from "react-icons/pi";
import TextInputs from "./Input";
import TextAreas from "./TextArea";
import SelectInputs from "./SelectInputs";
import { UploadButton } from "@/lib/uploadthing";
import { saveDish } from "@/actions/dish";
import FormSelectInput from "./SelectInput";

export default function DishForm({ categories, isUpdate, newInitialData, ingredients }: any) {
  const initialData = newInitialData;
  const [ingredientOption, setIngredientOption] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState(initialData?.ingredients || []);
  const [stateLoading, setStateLoading] = useState(false);
  const [imageUrls, setImageUrl] = useState(initialData?.images || []);
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: initialData,
  });

  const handleAddIngredient = (ingredient: any) => {
    if (ingredient.qty > 0) {
      setSelectedIngredients((prev: any) => [...prev, { ...ingredient, qty: 1 }]);
    } else {
      toast({
        variant: "destructive",
        title: "Ingredient Out of Stock",
        description: `${ingredient.title} is out of stock and cannot be added.`,
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  };

  const handleQtyIncrement = (ingredientId: any) => {
    setSelectedIngredients((prev: any) =>
      prev.map((item: any) =>
        item.id === ingredientId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleQtyDecrement = (ingredientId: any) => {
    setSelectedIngredients((prev: any) =>
      prev.map((item: any) =>
        item.id === ingredientId ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
    );
  };

  const handleRemoveIngredient = (ingredientId: any) => {
    setSelectedIngredients((prev: any) => prev.filter((item: any) => item.id !== ingredientId));
  };

  const handleImageRemove = (index: any) => {
    const updatedImages = imageUrls.filter((_: any, i: any) => i !== index);
    setImageUrl(updatedImages);
  };

  async function onSubmit(data: any) {
    try {
      setStateLoading(true);
      const amount = parseInt(data.amount);
      const qty = parseInt(data.qty);
      const dishData = {
        ...data,
        amount,
        qty,
        images: imageUrls,
        ingredients: selectedIngredients,
      };
      const updateData = {
        title: data.title,
        amount,
        qty,
        description: data.description,
        images: imageUrls,
        categoryId: data.categoryId,
      };

      if (initialData) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

        try {
          const response = await fetch(`${baseUrl}/api/dish/${initialData.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
          });

          if (response.ok) {
            toast({
              title: "Dish Updated Successfully",
              description: "Dish was updated successfully",
              action: <ToastAction altText="Close">Close</ToastAction>,
            });

            reset();
            setStateLoading(false);
            router.push("/dashboard/manage-dishes");
          } else {
            toast({
              variant: "destructive",
              title: "Something Went Wrong",
              description: "Request failed, something went wrong",
              action: <ToastAction altText="Close">Close</ToastAction>,
            });
          }

        } catch (error) {
          console.error('Error updating dish:', error);
          throw error;
        }

      } else {
        await saveDish(dishData);
        toast({
          title: "Dish Created Successfully",
          description: "Dish was created successfully",
          action: <ToastAction altText="Close">Close</ToastAction>,
        });
        reset();
        setStateLoading(false);
        router.push("/dashboard/manage-dishes");
      }
    } catch (error) {
      setStateLoading(false);
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something Went Wrong",
        description: "Request failed, something went wrong",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
    }
  }

          
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 py-8 px-2">
        <form onSubmit={handleSubmit(onSubmit)}  className="grid flex-1 items-start gap-4  sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-full flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <Link href="/dashboard/manage-dishes"  className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <div className="sr-only">Back</div>
              </Link>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
               Create Dish
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                In stock
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                {
          stateLoading ? (
        <Button variant='outline' disabled={stateLoading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> { initialData ? "Updating Dish":"Creating Dish"}
       </Button>
           )  : (
        <Button type="submit" className="w-full">
      {
         initialData ? "Update Dish":" Save Dish"
      }
        </Button>
            )
       }
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Dish  Details</CardTitle>
                    <CardDescription>
                    Manage dish availability and visibility in your Pos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                     <TextInputs label="Dish Title" name="title" IsRequired register={register} errors={errors} type="text" />
                     <TextAreas IsRequired  errors={errors} label="Dish Description" description="description" register={register} required="true" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                     Insert Dish price and  Dish quantity
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Quantity</TableHead>
            <TableHead className="w-[200px]">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
          
            <TableCell>
              <Label htmlFor="qty" className="sr-only">
                Stock
              </Label>
              <Input
                {...register('qty', { required: true })}
                id="qty"
                type="number"
                defaultValue=""
                placeholder="100"

              />
            </TableCell>
           
            <TableCell>
              <Label htmlFor="selling-price-1" className="sr-only px-4">
                Selling Price
              </Label>
              <Input
                {...register('amount', { required: true })}
                id="selling-price-1"
                type="number"
                defaultValue=""
                placeholder="99.99"
              />
              
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

                  </CardContent>
                </Card>
                <div>
      <Card>
        <CardContent>
          <div className="grid gap-6">
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Add Ingredients</CardTitle>
          <CardDescription>Search and add ingredients to the dish.</CardDescription>
        </CardHeader>
        <CardContent>
          <FormSelectInput
            options={ingredients.map((ingredient: any) => ({
              value: ingredient.id,
              label: `${ingredient.title} (${ingredient.qty} available)`,
            }))}
            label="Ingredient"
            option={ingredientOption}
            setOption={(selected:any) => {
              const selectedIngredient = ingredients.find(
                (ingredient:any) => ingredient.id === selected.value
              );
              if (selectedIngredient) {
                handleAddIngredient(selectedIngredient);
              }
              setIngredientOption(null); 
            }}
          />
        </CardContent>
      </Card>
            {/* Selected Ingredients */}
            {selectedIngredients.map((item: any) => (
              <div
                key={item.id}
                className="rounded-xl border border-gray-400 flex gap-3 items-center"
              >
                <button
                  type="button"
                  onClick={() => handleQtyDecrement(item.id)}
                  className="border-r border-gray-400 py-2 px-4"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <p className="flex-grow py-2 px-4">{item.qty}</p>
                <button
                  type="button"
                  onClick={() => handleQtyIncrement(item.id)}
                  className="border-l border-gray-400 py-2 px-4"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <p className="flex-grow py-2 px-4">{item.title}</p>
                <p className="flex-grow py-2 px-4">QTY : {item.qty}</p>
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(item.id)}
                  className="ml-4 text-red-500 mr-5"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

  
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Dish Category </CardTitle>
                  </CardHeader>
                  <CardContent>
                  <div className="grid gap-6">
                 <SelectInputs register={register} options={categories} errors={errors} name="categoryId" label="Select Category" warehouse={categories}/>
                </div>
                  </CardContent>
                </Card>
             
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              
                <Card className="overflow-hidden">
  <CardHeader>
    <CardTitle>Dish  Images</CardTitle>
    <CardDescription>
      Lipsum dolor sit amet, consectetur adipiscing elit
    </CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid gap-2">
      {imageUrls && imageUrls.length > 0 ? (
        <>
          <div className="relative">
            <Image
              alt="Dish  image"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src={imageUrls[0]}
              width="300"
            />
            <div

              className="absolute top-2 right-2 cursor-point"
              onClick={() => handleImageRemove(0)}
            >
           <X className="text-red-500"/>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {imageUrls.slice(1, 4).map((imgUrl:any, index:any) => (
              <div key={index} className="relative">
                <div
                  className="absolute top-2 right-2 cursor-pointshadow-md"
                  onClick={() => handleImageRemove(index + 1)}
                >
           <X className="text-red-500"/>
                </div>
                <Image
                  alt="Dish  image"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src={imgUrl}
                  width="84"
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Image
            alt="Placeholder"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="/placeholder.svg"
            width="300"
          />
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                <Image
                  alt="Placeholder"
                  className="aspect-square w-full rounded-md object-cover"
                  height="84"
                  src="/placeholder.svg"
                  width="84"
                />
              </div>
            ))}
          </div>
        </>
      )}
       <div className="mt-4">
          <UploadButton
          endpoint="DishImages"
          onClientUploadComplete={(res) => {
            const newImages = res.map((item) => item.url);
            setImageUrl([...newImages]);
          }}
        />
      
      </div>
  </div>
  </CardContent>
                </Card>

               </div>

              
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              {/* <Button type="submit" size="sm">Save Dish</Button> */}
          {
          stateLoading ? (
        <Button variant='outline' disabled={stateLoading}  className="w-full flex gap-2 items-center bg-slate-950 text-white">
           <PiSpinner className="animate-spin"/> {initialData  ? "Updating":" Creating Dish"}
       </Button>
           )  : (
      <Button type="submit" className="w-full">
       {initialData ? "Update Dish":"Save Dish"}
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