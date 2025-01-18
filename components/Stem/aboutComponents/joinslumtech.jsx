import { useState, useEffect } from 'react';
import Image from 'next/image';
import { bottomToTopAnimation} from "../../../utilis/animations";
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const JoinUs = () => {
   useEffect(() => {
          bottomToTopAnimation(".join-slumtech")
      }, [])
 
    return(
      <section
      style={{backgroundImage: `url(/v_3_images/join.png)`, borderImage: "fill 1 linear-gradient(#00000000, #00000099)"}}
      className="w-full min-h-[63rem] text-[1.8rem] max-small:text-[1.6rem] leading-[3rem] max-small:leading-[2.5rem] text-[#000]"
     >
        <div className='container pt-[10rem]'> 
              <div className='join-slumtech'>
            <h2 className='font-[700] text-[5.4rem] max-small:text-[3rem] leading-[6.4rem] max-small:leading-[3.2rem] text-[#F5B021]'>Join Us</h2>
           <div className='max-w-[62rem] mt-[1.5rem] flex flex-col gap-y-[3rem] text-[#fff]'>
             <p>
                Whether you’re a student eager to demonstrate your skills or a mentor looking
                to make a difference, we invite you to join us in this transformative journey. 
                Together, we can empower the next generation of leaders and innovators to overcome
                 obstacles and build a brighter future.
                 </p>

                <p>For more information on how to get involved, visit our <span className='text-[#F5B021]'> Contact Us </span> page.</p>

                 <button className='px-[1rem] flex flex-row justify-center gap-x-[1.5rem] items-center w-[210px] h-[50px] rounded-[25px] bg-[#F5B021] text-[#000] font-[500] text-[18px] max-small:text-[1.6rem] leading-[3rem]'>
                <span>Contact Now</span>
                  <div className="relative h-[11px] w-[11px]">
                  <Image 
                  src="/v_3_icons/arrow.png"
                  fill
                  alt="slumtech value"
                  />
                  </div>
              </button>
            </div>
            </div>
        </div> 
      </section>
    )
}

export default JoinUs;