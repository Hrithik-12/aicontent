'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListsection'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

interface PROPS{
  selectedTemplate?:TEMPLATE;
  userforminput:any;
  loading:boolean
  
}

function Fromsection({selectedTemplate,userforminput,loading}:PROPS) {


  const [formvalue,setFormValue]=useState<any>();
  const onsubmit=(e:any)=>{
    e.preventDefault()
    userforminput(formvalue);


  }
  const handleinputchange=(e:any)=>{
    const {name,value}=e.target
    setFormValue({...formvalue,[name]:value})


  }
  return (
    <div className='p-5 h-fit shadow-md border rounded-xl bg-white'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt='logo' width={70} height={70} />
      <h2 className='font-bold text-3xl mb-2 text-purple-400 '>{selectedTemplate?.name}</h2>
      <p className='text-black text-sm '>{selectedTemplate?.desc}</p>
      <form className='mt-6 ' onSubmit={onsubmit} >
     {
      selectedTemplate?.form?.map((item,ind)=>(
        // adding input componnet from shad cn ui
        <div key={ind} className='my-3 flex flex-col gap-2 mb-6'>
          <label className='font-bold '>{item.label}</label>
         {
          item.field=='input' ? <Input name={item.name} required={item?.required} onChange={handleinputchange} />:item.field=='textarea' ? <Textarea  onChange={handleinputchange}/>:null
         }
        </div>
      ))
     }
     <Button disabled={loading} className='w-full py-6'>{
      loading ? <Loader className='animate-spin'/>:<p>Let The Magic Happen</p>
}</Button>
      </form>
    </div>
  )
}

export default Fromsection