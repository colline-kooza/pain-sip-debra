import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function IngredientsStats({ingredients}:any) {
    const totalPrice = ingredients.reduce((acc:any, ingredient:any) => acc + ingredient.price, 0);

    // Determine the most trending ingredient (based on quantity)
    const trendingIngredient =ingredients.reduce((prev:any, current:any) => 
      (prev.qty > current.qty) ? prev : current
    );
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    {/* Individual Ingredients Stats */}
    {ingredients.map((ingredient:any) => (
      <Card key={ingredient.id}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{ingredient.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="text-lg font-bold">Name: {ingredient.title}</div> */}
          <div className="text-lg font-bold">Qty: {ingredient.qty}</div>
          <div className="text-lg font-bold">Price: ${ingredient.price.toFixed(2)}</div>
        </CardContent>
      </Card>
    ))}

    {/* Total Price Card */}
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalPrice.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground">Total value of all ingredients</p>
      </CardContent>
    </Card>

    {/* Trending Ingredient Card */}
    {trendingIngredient && (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Trending Ingredient</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{trendingIngredient.name}</div>
          <div className="text-lg font-bold">Qty: {trendingIngredient.qty}</div>
          <div className="text-lg font-bold">Price: ${trendingIngredient.price.toFixed(2)}</div>
        </CardContent>
      </Card>
    )}
  </div>
  )
}
