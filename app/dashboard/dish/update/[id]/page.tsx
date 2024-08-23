import { getCategories, getCategory } from '@/actions/category'
import { getSingleDish } from '@/actions/dish'
import { getIngredients } from '@/actions/ingredient'
import DishForm from '@/components/DishForm'
import React from 'react'

export default async function page({params:{id}}:any) {
    const categories=await getCategories()
    const singleDish=await getSingleDish(id)
    const ingredients=await getIngredients()
  //  console.log(singleDish)
  return (
    <DishForm ingredients={ingredients} newInitialData={singleDish} isUpdate="true" categories={categories}/>
)
}
