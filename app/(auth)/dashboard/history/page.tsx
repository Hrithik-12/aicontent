'use client'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { db } from '@/utils/db'
import { Aioutput } from '@/utils/Schema'
interface PROPS {
  formvalue: any;
  airesult: string | null,
  templateSlug: string;
  createdBy: string;
  createdAt: string | null
}


function History() {
  const [Datafromdb,setdatafromdb]=useState<PROPS[]>([]);
  const getdatafromdb=async ()=>{

    
    const result=await db.select().from(Aioutput);
    setdatafromdb(result)
    console.log(result);
  }
  useEffect( ()=>{
    getdatafromdb();

  },[])
  return (
    <div className='p-5'>
      <Table>
  <TableCaption>All your history here...</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>TEMPLATE</TableHead>
      <TableHead>Ai Resp</TableHead>
      <TableHead>Date</TableHead>
      <TableHead >Words</TableHead>
      <TableHead >Copy</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow> */}
    {
      Datafromdb.map((item,ind)=>(
        <TableRow className='p-2' key={ind}>
          <TableCell>{item.formvalue}</TableCell>
          <TableCell className='line-clamp-2 '>{item.airesult}</TableCell>
          <TableCell>{item.createdAt}</TableCell>
          <TableCell>{item.airesult?.length}</TableCell>



        </TableRow>

      ))
    }
    
  </TableBody>
</Table>

    </div>
  )
}

export default History