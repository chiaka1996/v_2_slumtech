import {useEffect} from 'react'
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import {bottomToTopAnimation} from "../../utilis/animations";
import Image from 'next/image';
import Link from 'next/link';
import { MainHeader } from '..';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Newsletter = () => {
    useEffect(() => {
      gsap.to(".coloredText",
        {
          duration: 2,
          text: "Stay informed!",
          scrollTrigger: {
            trigger: ".coloredText", 
            start: "top 90%",       
          },
          onComplete: () => {
            gsap.to(".whiteText",
              {
                duration: 6,
                text: "Join our newsletter for the latest updates. Subscribe Here",
                scrollTrigger: {
                  trigger: ".whiteText", 
                  start: "top 90%",       
                },
                onComplete: () => {
                  bottomToTopAnimation(".newsletterEmail")
              }
          }
        )
        }
      }
      );
    
    }, [])
    

    return(
       <section 
        className={`flex items-center justify-center font-[400] text-[1.6rem] leading-[2.4rem] max-small:pt-0 w-full h-[327px] bg-[url("/v_3_images/newsletter.png")] bg-center`}
       >
        <div className='text-[#fff] container text-center'>
            <p className='font-[700] text-[3.6rem] max-small:text-[2.4rem] leading-[4.6rem] max-small:leading-[3rem]'>
              {/* the text are handle with GSAP */}
                <span className='text-[#FFC700] coloredText'></span> <span className='whiteText'> </span>
            </p>
            <div className='mt-[3.3rem] flex max-small:flex-col gap-[2rem] justify-center opacity-0 newsletterEmail'>
                <input type="email" placeholder='Enter email address' 
                className='placeholder-[#fff] outline-none w-[47.5rem] max-small:w-full h-[5.6rem] bg-[#FFFFFF45] rounded-[10px] text-[1.8rem] px-[2rem]' />
                <button className='w-[181px] h-[56px] rounded-[10px] font-[700] text-[1.8rem] bg-[#0C9D69] max-small:mx-auto'>Subscribe</button>
            </div>
        </div>
        
       </section>
   ) 
}

export default Newsletter;