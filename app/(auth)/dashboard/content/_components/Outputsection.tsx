'use client'
import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
interface PROPS{
  airesult:string
}
// adding rich text editor toast ui library
export default function Outputsection({airesult}:PROPS) {
  const editorRef:any=useRef();
  useEffect(()=>{
const editorinstance=editorRef.current.getInstance();
editorinstance.setMarkdown(airesult);
  },[airesult])
  return (
    <div className='bg-white shadow-lg border'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='text-purple-500 text-xl  '>Your Result</h2>
        <Button onClick={()=>navigator.clipboard.writeText(airesult)} className='flex gap-2'><Copy className='w-4 h-4 '/> Copy</Button>
      </div>
      
      <Editor
      ref={editorRef}
    initialValue="let see the magic here...😊😊"
    previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
  /></div>
  )
}
