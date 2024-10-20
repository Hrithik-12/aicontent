'use client'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm';

import { Aioutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { Totalusagecontent } from '@/app/(context)/Totalusagecontent';
import { UpdatecreditusageContext } from '@/app/(context)/Updatecredit';
export interface HISTORY{
  id:Number,
  formvalue:string,
  airesult:string,
  templateSlug:string,
  createdBy:string,
  createdAt:string
}

 function Usage() {
  const {user}=useUser();
  const[totalwordsused,setTotalwordsused]=useState<number>(0);
  const {totalusage,setTotalusage}=useContext(Totalusagecontent);
  const {updatecreditusage,setUpdatecreditUsage}=useContext(UpdatecreditusageContext)

  // const res=await db.select().from(Aioutput).where(eq(Aioutput.createdBy,user?.primaryEmailAddress?.emailAddress));
  const getdata=async ()=>{
    // @ts-ignore
    const res:HISTORY[]=await db.select().from(Aioutput).where(eq(Aioutput.createdBy,user?.primaryEmailAddress?.emailAddress));
    gettotalusage(res)

  }
 useEffect(()=>{
  user && getdata();
 },[user]) 

 useEffect(()=>{
  getdata()


 },[updatecreditusage])

  const gettotalusage=(res:HISTORY[])=>{
    let total:number=0;
    res.forEach(ele=>{
      total=total+Number(ele.airesult?.length)

    });
    setTotalwordsused(total)
  }

  
  return (
    <div className='m-5'>
      <div className='bg-purple-500 text-white rounded-lg p-3 '>
        <h2 className='font-medium uppercase '>credits</h2>
        <div className='h-2 bg-[#9981f9] rounded-full w-full  mt-3 '>
          <div className='h-2 bg-white  rounded-full ' style={{
            width:(totalwordsused/100000)*100+'%'
          }} >
            
          </div>

        </div>
        <h2 className='text-sm '>credit used {totalwordsused}/100000 </h2>

      </div>
      <Button className='w-full my-3  '>Upgrade</Button>
    </div>
  )
}

export default Usage