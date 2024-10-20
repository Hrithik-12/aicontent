import React from 'react'
import { TEMPLATE } from './TemplateListsection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug} >
       <div className='p-5 shadow-md rounded-lg border bg-white flex flex-col gap-3 cursor-pointer hover:scale-110 transition-all '>
      <Image src={item.icon} alt='icon' width={50} height={50} />
      <h2 className='text-md font-semibold text-black '>{item.name}</h2>
      <p className='text-purple-600 text-sm line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
   
  )
}

export default TemplateCard