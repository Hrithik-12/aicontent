'use client'
import React, { useEffect,useState } from 'react'
import Template from '@/app/(data)/Template'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  category:string,
  icon:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]

}
export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}
// when screen size smaller grid cols 2 md:grid col 3 lg grid col 4
function TemplateListsection({searchInput}:any) {
  const[Templatelist,setTemplatelist]=useState(Template);
  const[error,seterror]=useState(false)
 

  useEffect(()=>{
    console.log(searchInput)
    if(searchInput){
      const filterData=Template.filter(item=>item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
      setTemplatelist(filterData);
     
    }
    else{
      setTemplatelist(Template)
    }
    
  },[searchInput])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-4'>
      {
       // intially it had Template.map
       Templatelist.map((item:TEMPLATE,ind:number)=>(
        // we want to send all the data to our template card section 
        <TemplateCard key={ind} {...item} />
       ))
      }

    </div>
  )
}

export default TemplateListsection