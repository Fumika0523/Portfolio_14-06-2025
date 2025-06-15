import type { Metadata } from "next"; // This imports the Metadata type from Next.js, ensuring type safety for defining metadata.
import "./globals.css"; //- This imports the global CSS file for styling across the application
import {Providers} from "./provider"
import {Inter, Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})
//- Inter()
// - This function loads the Inter font from Google Fonts.
// - It ensures optimized font loading with automatic self-hosting.
// - subsets: ["latin"]
// - Specifies that only the Latin subset of the font should be loaded.
// - This helps reduce unnecessary font data for better performance.
// - variable: "--font-sans"
// - Defines a CSS variable (--font-sans) for the font.
// - Allows you to use the font in CSS like this:

const calistoga = Calistoga({subsets:['latin'],variable:'--font-serif',weight:["400"]})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created a Portfolio using NextJs, TypeScript and Tailwind",
};

//- This defines metadata for the web page, such as the title and description.
// Next.js uses this to set page metadata dynamically for SEO and browser display.


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

//     - These are font classes generated using next/font/google.
// - inter.className applies the Inter font.
// - calistoga.className applies the Calistoga font.
// - twMerge() ensures both fonts are correctly merged.

        <html lang="en">
      <body className={twMerge(
        inter.variable,
        calistoga.variable,
        "antialiased font-sans")}>
        <Providers>{children}</Providers>
      </body>
    </html>

  );
}
