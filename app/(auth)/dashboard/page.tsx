'use client'
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListsection from './_components/TemplateListsection'

export default function page() {
  const [usersearchinput,setusersearchinput]=useState<String>()
  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setusersearchinput(value)} />
      {/* template list section */}
      <TemplateListsection searchInput={usersearchinput} />
    </div>
  )
}
