import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import { topToBottomAnimation, bottomToTopAnimation } from "../../utilis/animations";
import {StemNavigation, StemHomeBanner, StemAbout, Whyparticipate, StemFooter, WhoCanEnter, Resources, Support, StemSidebar} from "../../components"
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem] relative overflow-x-hidden">
    <StemNavigation />
    <StemSidebar /> 
    <StemHomeBanner />
    <StemAbout />
    <Whyparticipate />
    <div 
     style={{borderImage: "fill 1 linear-gradient(#00000047, #00000033)"}}
     className="relative w-full h-[600px] max-small:h-[400px] flex items-center justify-center"
    >
       <video muted loop autoPlay playsInline disablePictureInPicture
        className='absolute top-0 left-0 w-full h-full z-[-1] object-cover'
        >
            <source src="/v_3_videos/slumtech-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
      {/* the slumtech gradient design is in the global css with classname of .slumtech */}
      <h1 
      className="font-[800] text-[13.8rem] max-small:text-[6rem] leading-[207px] tracking-wider slumtech">SLUM  TECH</h1>
    </div>
    <WhoCanEnter />
    <Resources />
    <Support />
    <div 
     style={{backgroundImage: `url(/v_3_images/have-questions.png)`, borderImage: "fill 1 linear-gradient(#00000047, #00000033)"}}
     className="bg-center w-full h-[387px] flex items-center justify-center"
    >
      <div className="font-[700] text-[4.2rem]  max-small:text-[3rem] leading-[54px] max-small:leading-[4rem] max-w-[141.4rem] text-center text-[#fff]">
      <span className="text-[#F5B021]">Have questions or need further assistance? </span>
      Don’t hesitate to reach out! Our support team is dedicated to 
      helping you navigate the competition and achieve your goals.
      </div>
    </div>
    <StemFooter />
    </main>
  )
};