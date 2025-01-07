import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import { topToBottomAnimation, bottomToTopAnimation } from "../../utilis/animations";
import {StemNavigation, StemHomeBanner, StemAbout, Whyparticipate, StemFooter, WhoCanEnter, Resources, Support} from "../../components"
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem] relative overflow-x-hidden">
    <StemNavigation />
    {/* <Sidebar />  */}
    <StemHomeBanner />
    <StemAbout />
    <Whyparticipate />
    <div 
     style={{backgroundImage: `url(/v_3_images/slumtech.png)`, borderImage: "fill 1 linear-gradient(#00000047, #00000033)"}}
     className="bg-center w-full h-[600px] flex items-center justify-center"
    >
      {/* the slumtech gradient design is in the global css with classname of .slumtech */}
      <h1 
      className="font-[800] text-[13.8rem] leading-[207px] tracking-wider slumtech">SLUM  TECH</h1>
    </div>
    <WhoCanEnter />
    <Resources />
    <Support />
    <div 
     style={{backgroundImage: `url(/v_3_images/have-questions.png)`, borderImage: "fill 1 linear-gradient(#00000047, #00000033)"}}
     className="bg-center w-full h-[387px] flex items-center justify-center"
    >
      <div className="font-[700] text-[4.2rem] leading-[54px] max-w-[141.4rem] text-center text-[#fff]">
      <span className="text-[#F5B021]">Have questions or need further assistance? </span>
      Don’t hesitate to reach out! Our support team is dedicated to 
      helping you navigate the competition and achieve your goals.
      </div>
    </div>
    <StemFooter />
    </main>
  )
};