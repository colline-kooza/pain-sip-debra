import Link from 'next/link'
import React from 'react'

export default function UpdateIntreg({id}:{id:string}) {
  return (
    <div>
  <Link href={`/dashboard/add-ingredient/update/${id}`}>Edit</Link>
    </div>
  )
}
