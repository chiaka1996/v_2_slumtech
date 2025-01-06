import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import { topToBottomAnimation, bottomToTopAnimation } from "../../utilis/animations";
import {StemNavigation, StemHomeBanner, StemAbout, Whyparticipate, StemFooter} from "../../components"
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
    <StemFooter />
    </main>
  )
};