import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const DropdownNav = () => {
    const cr = useLocation().pathname;
  return <>
    <DropdownMenu>
  <DropdownMenuTrigger>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</DropdownMenuTrigger>


  <DropdownMenuContent>
   
    
    <DropdownMenuItem>
        <NavLink className={` text-lg ${cr == "/" && "text-[#f2c119]" }`} to={'/'}>Home</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <NavLink className={`text-lg ${cr == "/about" && "text-[#f2c119]" }`} to={'/about'}>About</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <NavLink className={`text-lg ${cr == "/product" && "text-[#f2c119]" }`} to={'/product'}>Product</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <NavLink className={`text-lg ${cr == "/fashion" && "text-[#f2c119]" }`} to={'/fashion'}>Fashion</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <NavLink className={`text-lg ${cr == "/new" && "text-[#f2c119]" }`} to={'/new'}>News</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
        <NavLink className={`text-lg ${cr == "/contact" && "text-[#f2c119]" }`} to={'/contact'}>Contact Us</NavLink>
    </DropdownMenuItem>
   


  </DropdownMenuContent>
</DropdownMenu>

  </>
}

export default DropdownNav