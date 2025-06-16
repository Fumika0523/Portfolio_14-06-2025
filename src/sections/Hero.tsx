import Image from "next/image"
import Memoji from '@/assets/images/unnamed.png'
import { FaArrowDown } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import grainImage from "@/assets/images/grain.jpg"
import { BsStars } from "react-icons/bs"
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"



export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div 
      className="absolute inset-0 -z-30 opacity-5 "
      style={{backgroundImage:`url(${grainImage.src})`
      }}>
      </div>
        <div className="size-[620px] hero-ring "></ div>
        <div className="size-[820px] hero-ring "></ div>
        <div className="size-[1020px] hero-ring "></ div>
        <div className="size-[1220px] hero-ring "></ div>
        <HeroOrbit size={800} rotation={-72} >
          <StarIcon className="size-28 text-amber-300"/>
        </ HeroOrbit>
         <HeroOrbit size={550} rotation={20} >
          <StarIcon className="size-12 text-amber-300"/>
        </ HeroOrbit>
        <HeroOrbit size={590} rotation={98} >
          <StarIcon className="size-8 text-amber-300"/>
        </ HeroOrbit>
        <HeroOrbit size={430} rotation={-14} >
          <SparkleIcon className="size-8 text-amber-300/20"/>
        </ HeroOrbit>
        <HeroOrbit size={440} rotation={80} >
          <SparkleIcon className="size-5 text-amber-300/20"/>
        </ HeroOrbit>
        <HeroOrbit size={530} rotation={180} >
          <SparkleIcon className="size-10 text-amber-300/20"/>
        </ HeroOrbit>
         <HeroOrbit size={710} rotation={145} >
          <SparkleIcon className="size-14 text-amber-300/20"/>
        </ HeroOrbit>
          <HeroOrbit size={720} rotation={85} >
          <div className="size-3  rounded-full bg-amber-400/20"/>
        </ HeroOrbit>
        <HeroOrbit size={520} rotation={-41} >
          <div className="size-2 rounded-full bg-amber-400/20"/>
        </ HeroOrbit>
            <HeroOrbit size={650} rotation={-5} >
          <div className="size-2 rounded-full bg-amber-400/20"/>
        </ HeroOrbit>
        <div className="container">
        {/* first part */}
        <div className="flex flex-col items-center">
          <Image src={Memoji}
            alt="Person peeking from behind laptop" className="rounded-full aspect-square object-cover size-[100px]" />
        {/* second part */}
          <div className="dark:bg-gray-800
          bg-amber-300 border dark:border-gray-700 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-3 rounded-full"></div>
            <div className="text-sm font-medium dark:bg-gray-800">Available for new projects</div>
          </div>
        </div>
        <div className="mx-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experience</h1>
            <p className="mt-4 text-center dark:text-white/60 text-gray-600 md:text-lg ">
              I specialize in transforming designs into functional, high-performing web application. Let's dicuss your next project.
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center  mt-8 gap-4">
        <button className="border dark:border-white/15 border-gray-300   justify-center inline-flex items-center gap-2 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <FaArrowDown className="size-4"/>
        </button>
        <button className="border dark:border-white/15 border-gray-300  dark:bg-slate-50 dark:text-gray-800 justify-center inline-flex items-center gap-2 px-6 h-12 rounded-xl">
          <span ><CiMail className="dark:bg-slate-50  size-5" /></span>
          <span className="font-semibold dark:bg-slate-50 ">Let's Connect</span>
      </button>
        </div>
      </div>
    </div>
  )
}

