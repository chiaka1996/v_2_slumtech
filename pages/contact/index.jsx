import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Contact() {
 
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem] relative">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/contactbanner.png"
      header1="Get in"
      header2="Touch With Us?"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="Connect with Our Team"
    />
    <section className='py-[10rem]'>
        <div className='container'>
        <div className='text-center'>
        <MainHeader text="Contact Us" />
        <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[2.5rem]'>
        <span className='text-[#FDB21A]'>How Can </span>
        <span>We Help?</span>
        </h2>
        </div>

        <form className='w-[94.2rem] py-[5rem] px-[7.5rem]'>
            <div className='grid grid-cols-2 gap-x-[4rem] justify-between'>
                <div>
                    
                </div>
            </div>

        </form>
        </div>
    </section>
     <JoinUs />
     <Footer />
    </main>
  )
}