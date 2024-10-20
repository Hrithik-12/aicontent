'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {Home, History, Receipt, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Usage from '../content/_components/Usage'

function Sidenav() {
  const Menulist=[
    {
      name:'Home',
      icon:Home,
      path:'/dashboard'
    }
    ,{
      name:'History',
      icon:History,
      path:'/dashboard/history'
    },{
      name:'Billing',
      icon:Receipt,
      path:'/dashboard/billing'
    },{
      name:'Setting',
      icon:Settings,
      path:'/dashboard/setting'
    }
  ]

  const path=usePathname();
  useEffect(()=>{
    console.log(path)

  },[])
  return (
    <div className='h-screen relative p-5 shadow-sm border'>
      <div className='flex justify-center '>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100}  />
      </div>
      <hr className='my-5' />
      <div className='mt-6'  >
        {
          Menulist.map((menu,ind)=>(
            <Link key={ind} href={`${menu.path}`} ><div  className={`flex gap-2 mb-2 p-3 hover:bg-purple-400 hover:text-white rounded-lg cursor-pointer ${
              path==menu.path && 'bg-purple-500 text-white'} `  }>
              <menu.icon/>
                <h2>{menu.name}</h2>
              </div></Link>
          ))
        }
      </div>
      <div className='absolute bottom-12 left-0 w-full'>
      <Usage/>
      </div>
    </div>
  )
}

export default Sidenav