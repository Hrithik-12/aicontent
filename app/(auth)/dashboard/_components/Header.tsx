"use client";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 shadow-sm flex items-center justify-evenly bg-purple-100 ">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg  ">
        <Search />
        <input
          type="text"
          placeholder="search..."
          className="outline-none bg-slate-100 rounded-full p-2 "
        />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-purple-400 rounded-md text-xl text-white px-3 py-2 ">
          {" "}
          Try This Ai Content Generator For Maximum Productivity 😊😊
        </h2>{" "}
        <UserButton/>
      </div>
    </div>
  );
}

export default Header;
