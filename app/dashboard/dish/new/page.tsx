import { getCategories } from '@/actions/category'
import { getIngredients } from '@/actions/ingredient'
import DishForm from '@/components/DishForm'
import React from 'react'

export default async function page() {
  const categories=await getCategories()
  const ingredients=await getIngredients()
  
  return (
    <div>
      <DishForm newInitialData={''} isUpdate="false" categories={categories} ingredients={ingredients}/>
    </div>
  )
}
