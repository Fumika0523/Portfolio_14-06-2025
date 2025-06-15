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
    <div className="flex justify-center items-center relative gap-3 top-3">
      <nav className="flex gap-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">About</a>
        <a href="#" className="nav-item bg-white text-gray-800 hover:bg-white/50 hover:text-gray-900">Contact</a>
      </nav>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        // className="p-1 rounded"
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