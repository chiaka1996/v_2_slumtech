import { useState } from 'react';
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import css from './faq.module.css'
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Faq() {
  const [toggle, setToggle] = useState(null)

  const toggleState = (num) => {
    toggle == num ? setToggle(null) : setToggle(num)   
  }
 
  return (
   <main className="text-[1.6rem] max-small:text-[1.3rem] font-[400] text-[#000] leading-[2.6rem] relative">
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
    <section className='py-[10rem] max-small:py-[5rem]'>
        <div className='container'>
        <div className='text-center'>
        <MainHeader text="FAQS" />
        <h2 className='text-center font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
          <span className='text-[#FDB21A]'>Frequently asked </span>
          <span>questions</span>
          </h2>
        </div>

        <div className='mt-[5rem] max-small:mt-[3rem]'>
          <div className='mt-[2.5rem]'>
            <div onClick={() => toggleState(1)} className={toggle == 1 ? css.active : css.inactive}>
              <span className='font-[500] text-[2rem] max-small:text-[1.6rem] leading-[4rem] max-small:leading-[2rem]'>Lorem ipsum dolor sit amet</span>
              <span className={`${toggle == 1 ? css.faqIconActive : css.faqIconInactive} material-icons`}>keyboard_arrow_down</span>
            </div>
            <div className='px-[5rem] py-[2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore
            </div>
          </div>

          <div className='mt-[2.5rem]'>
            <div onClick={() => toggleState(2)} className={toggle == 2 ? css.active : css.inactive}>
              <span className='font-[500] text-[2rem] max-small:text-[1.6rem] leading-[4rem] max-small:leading-[2rem]'>Lorem ipsum dolor sit amet</span>
              <span className={`${toggle == 2 ? css.faqIconActive : css.faqIconInactive} material-icons`}>keyboard_arrow_down</span>
            </div>
            <div className='px-[5rem] py-[2rem] note'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore
            </div>
          </div>
          <div className='mt-[2.5rem]'>
            <div onClick={() => toggleState(3)} className={toggle == 3 ? css.active : css.inactive}>
              <span className='font-[500] text-[2rem] max-small:text-[1.6rem] leading-[4rem] max-small:leading-[2rem]'>Lorem ipsum dolor sit amet</span>
              <span className={`${toggle == 3 ? css.faqIconActive : css.faqIconInactive} material-icons`}>keyboard_arrow_down</span>
            </div>
            <div className='px-[5rem] py-[2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore
            </div>
          </div>

        </div>
        </div>
    </section>
     <JoinUs />
     <Footer />
    </main>
  )
}