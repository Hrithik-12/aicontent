'use client'
import React, { useContext, useState } from 'react'
import Fromsection from '../_components/Fromsection'
import Outputsection from '../_components/Outputsection'
import { TEMPLATE } from '../../_components/TemplateListsection'
import Template from '@/app/(data)/Template'
import { Button } from '@/components/ui/button'
import { ArrowBigLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/Aimodel'
import { db } from '@/utils/db'
import { Aioutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { Totalusagecontent } from '@/app/(context)/Totalusagecontent'
import { AlertDialog } from '@/components/ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { UpdatecreditusageContext } from '@/app/(context)/Updatecredit'
// server isde content
interface PROPS{
  params:{
    'template-slug':string
  }
  
}

function CreateNewContent(props:PROPS) {
  const[loading,setLoading]=useState(false);
  const[airesult,setairesult]=useState<string>('')
  const {user}=useUser();
  const router=useRouter();
  // i want the detail of the selectes template so how ??
  const selectedTemplate:TEMPLATE|undefined=Template?.find((item)=>item.slug==props.params['template-slug']);
  const {totalusage}=useContext(Totalusagecontent)
  const {updatecreditusage,setUpdatecreditUsage}=useContext(UpdatecreditusageContext)
  // ai 
  const generateAicontent=async (formvalue:any)=>{
    if(totalusage>=100000){
      router.push('/dashboard/billing')
      return <AlertDialog/>
    }
  
    setLoading(true)
    const selectedPrompt=selectedTemplate?.aiPrompt;
    const FinalaiPrompt=JSON.stringify(formvalue) + ','+selectedPrompt;
    const res=await chatSession.sendMessage(FinalaiPrompt);
    setairesult(res?.response.text());
    await saveinDB(JSON.stringify(formvalue),selectedTemplate?.slug,res?.response.text(),user);
    setLoading(false);
    setUpdatecreditUsage(Date.now());




  }

  const saveinDB=async (formvalue:any,slug:any,aires:string,user:any)=>{
    const reault=await db.insert(Aioutput).values({
      formvalue:formvalue,
      templateSlug:slug,
      airesult:aires,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YY'),

    });
    console.log(reault);


  }
 
  return (
    // for smaller screen gris cols 1 and for medium and above it will be gris cols 2
   <div className='py-1 px-2 '>
<Link href={'/dashboard'} >    <Button><ArrowBigLeftIcon/> Back</Button>
</Link>     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      {/* form section */}
      <Fromsection selectedTemplate={selectedTemplate} userforminput={(v:any)=>generateAicontent(v)} loading={loading} />
      {/* outputsection out of 3 column 2 assign to outputsection using col span */}
      <div className='col-span-2'><Outputsection airesult={airesult} /></div>
    </div>
   </div>
  )
}

export default CreateNewContent