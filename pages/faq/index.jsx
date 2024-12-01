import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Faq() {
 
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem] relative">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/faqbanner.png"
      header1="Got Questions?"
      header2=" We’ve Got Answers"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="FAQs Unlocked"
    />
    <section className='py-[10rem]'>
        <div className='container'>
        <div className='text-center'>
        <MainHeader text="FAQS" />
        <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[2.5rem]'>
                <span className='text-[#FDB21A]'>Frequently asked </span>
                <span>questions</span>
                </h2>
        </div>
        </div>
    </section>
     <JoinUs />
     <Footer />
    </main>
  )
}