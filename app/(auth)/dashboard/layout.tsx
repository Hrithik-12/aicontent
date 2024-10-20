'use client'
import React, { useState } from "react";
import Sidenav from "./_components/Sidenav";
import Header from "./_components/Header";
import { Totalusagecontent } from "@/app/(context)/Totalusagecontent";
import { UpdatecreditusageContext } from "@/app/(context)/Updatecredit";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalusage,setTotalusage]=useState<number>(0);
  const [updatecreditusage,setUpdatecreditUsage]=useState<any>()
  return (
    <Totalusagecontent.Provider value={{totalusage,setTotalusage}} >
      <UpdatecreditusageContext.Provider value={{updatecreditusage,setUpdatecreditUsage}} >
      <div className="bg-purple-100 min-h-screen ">
      <div className="md:w-64 hidden md:block fixed">
        <Sidenav />
      </div>
    
      <div className="md:ml-64 ">
        <Header/>
        {children}</div>
    </div>
      </UpdatecreditusageContext.Provider>
      
    </Totalusagecontent.Provider>
    
  );
}

export default layout;
