import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, Banner, Footer} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function OurStory() {
 
  return (
   <main className="text-[1.6rem] font-[400] text-[#000]">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/storybanner.png"
      header1="Our Mission,"
      header2="Your Impact"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="Building Bridges to the Future"
    />

    <Footer/>
    </main>
  )
};