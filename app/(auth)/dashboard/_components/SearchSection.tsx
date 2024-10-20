'use client'
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  
  return (
    <div className='p-10 bg-gradient-to-br from-purple-400 via-purple-500 to-cyan-300 flex flex-col justify-center items-center space-y-4   '>
      <h2 className='font-semibold  text-white '>Browse All Templates</h2>
      <p className='text-white font-serif text-sm  '>What Would You Like To Cretae Today ??</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-lg bg-white my-2 w-[40%] '>
          <Search className='text-primary'/>
          <input type="text" placeholder='Search Template' className='bg-transparent outline-none w-full ' onChange={(e)=>onSearchInput(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection