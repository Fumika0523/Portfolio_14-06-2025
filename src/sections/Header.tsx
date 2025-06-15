"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";


export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <div className="flex justify-center items-center fixed gap-3 top-3 w-full">
      <nav className="flex gap-1 border border-white/15 rounded-full dark:bg-slate-800 bg-amber-200 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item ">Contact</a>
      </nav>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? 
        (
          <>
             <SunIcon className="h-5 w-5 text-amber-300" />
          </>
        ) : (
          <>
            <MoonIcon className="h-5 w-5 text-gray-900" />
          </>
        )
        }
      </button>
    </div>
  );
};