import { getCategory } from '@/actions/category';
import React from 'react'
import CategoryForm from '../../new/page';
import IntreForm from '../../new/page';
import { getIngredient } from '@/actions/ingredient';
interface PageProps {
    params: {
      id: string;
    };
  }
export default async function Page({ params: { id } }: PageProps) {
    const singleCat=await getIngredient(id)
    return (
    <div>
      <IntreForm initialData={singleCat}/>
    </div>
  )
}
