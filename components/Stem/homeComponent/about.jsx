import { useState, useEffect } from 'react';
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation } from "../../../utilis/animations";
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  useEffect(() => {
    topToBottomAnimation(".aboutHeader")
    bottomToTopAnimation(".aboutSubHeader")
    bottomToTopAnimation(".join")


  },[])
 
    return(
      <section
      className="w-full font-[400] leading-[3rem] text-[#000] relative"
     >
        <div className='shadow-2xl shadow-[#FFEA7B66] blur-2xl w-[616px] h-[616px] rounded-full bg-[#FFEA7B66] z-10 absolute top-[-5rem] right-[-10rem] opacity-60'></div>
        <div className='max-w-[878px] pt-[12rem] max-small:pt-[5rem] mx-auto text-center max-small:px-[1rem]'>    
            <h2 className='aboutHeader opacity-0 font-[700] text-[54px] max-small:text-[3rem] leading-[64px] max-small:leading-[3.2rem] text-[#004658]'>About the Competition</h2>
            <div className='aboutSubHeader opacity-0 text-[18px] max-small:mt-[0.5rem] max-small:text-[1.4rem] max-small:leading-[2.2rem] mb-[3rem] max-small:mb-[1.5rem]'>
            The SlumTech STEM Competition is an annual event dedicated to inspiring and empowering young minds 
            from underserved communities across the United States. Our mission is to promote creativity and innovation
             in science, technology, engineering, and mathematics (STEM), providing participants with the tools and resources
            to transform their ideas into tangible solutions.
            </div>

             <button className='join opacity-0 mx-auto gap-x-[1.5rem] flex flex-row justify-center items-center w-[198px]  max-small:w-[137px] h-[50px] max-small:h-[40px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] max-small:text-[1.4rem] leading-[3rem]'>
              <span>Join now</span>
              <div className="relative h-[11px] w-[11px]">
              <Image 
              src="/v_3_icons/arrow.png"
              fill
              alt="slumtech value"
              />
              </div>
          </button>
        </div>
        <div 
          style={{backgroundImage: `url(/v_3_images/stem-home-about.png)`, borderImage: "fill 1 linear-gradient(#FFFFFF, #FFFFFF00)"}}
        className='w-full h-[679px] bg-center'>
        </div>

        <div 
        className='shadow-2xl shadow-[#6FFFCB80] blur-2xl w-[616px] h-[616px] bg-[#6FFFCB80] z-10 absolute bottom-[-25rem] left-0 opacity-60'></div>
      
      </section>
    )
}

export default About;