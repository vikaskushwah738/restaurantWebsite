"use client";
import { FloatingNav } from "./ui/floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",   
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog", 
    }
  ];
  return (
    <div className="relative  w-full ">
      <FloatingNav navItems={navItems} />
       
    </div>
  );
}

export default Navbar

