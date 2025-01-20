"use client"
import {useEffect} from 'react'
import { topToBottomAnimation, bottomToTopAnimation, rightToLeftAnimation, leftToRightAnimation, scaleUpAnimation} from "../../utilis/animations";
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import Image from 'next/image';
import Link from 'next/link';
import { MainHeader } from '..';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Resources = ({img }) => {
    useEffect(() => {
        topToBottomAnimation(".resourceHeader")
        bottomToTopAnimation(".resource-grid")
      

    }, [])
    

    return(
       <section 
        className={`font-[400] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem] py-[12rem] max-small:py-[5rem] w-full`}
       >
        <div className='container'>
        <h1 className='font-[600] text-[4.8rem] max-small:text-[3rem] leading-[62px] max-small:leading-[3.2rem] text-center resourceHeader'>
            <span className='text-[#004658]'>Our</span><span className='text-[#0C9D69]'> Resources</span>
        </h1>

        <div className='mt-[5rem] max-small:mt-[3rem] gridStyle gap-[3rem] resource-grid'>
        <div className='bg-[#02ADD51A] py-[4rem] px-[2.5rem] text-center rounded-[20px] relative'>
            <div className='w-[100px] max-small:w-[80px] h-[100px] max-small:h-[80px] bg-[#fff] rounded-full mx-auto bg-[#fff] flex items-center'>  
            <div className='relative w-[61px] max-small:w-[41px] h-[61px] max-small:h-[41px] mx-auto'>
                <Image 
                src="/v_3_icons/ourresource1.png"
                fill
                alt="different resources offered at slumtech"
                
            />
            </div>         
            </div>
            <div className='mt-[3rem] flex flex-col gap-y-[1.5rem]'>
                <h2 className='text-[#004658] font-[700] text-[2rem] max-small:text-[1.6rem] leading-[3.2rem] max-small:leading-[2.4rem]'>Sponsor STEM Competitions</h2>
                <p>Contribute to fostering innovation and creativity.</p>
            </div>
            <div className='absolute bottom-[2rem] left-0 w-full text-center'>
                <span className='underline font-[700] text-[20px] max-small:text-[1.6rem] leading-[26px] text-[#0C9D69]'>Contact us</span>
            </div>
           </div>     
           
           <div className='bg-[#02ADD51A] py-[4rem] px-[2.5rem] text-center rounded-[20px] relative'>
            <div className='w-[100px] max-small:w-[80px] h-[100px] max-small:h-[80px] bg-[#fff] rounded-full mx-auto bg-[#fff] flex items-center'>  
            <div className='relative w-[61px] max-small:w-[41px] h-[61px] max-small:h-[41px] mx-auto'>
                <Image 
                src="/v_3_icons/ourresource2.png"
                fill
                alt="different resources offered at slumtech"
                
            />
            </div>         
            </div>
            <div className='mt-[3rem] flex flex-col gap-y-[1.5rem]'>
                <h2 className='text-[#004658] font-[700] text-[2rem] max-small:text-[1.6rem] leading-[3.2rem] max-small:leading-[2.4rem]'>Provide Educational Resources</h2>
                <p>Support our training platform with materials or tools.</p>
            </div>
            <div className='absolute bottom-[2rem] left-0 w-full text-center'>
                <span className='underline font-[700] text-[20px] max-small:text-[1.6rem] leading-[26px] text-[#0C9D69]'>Contact us</span>
            </div>
           </div>

           <div className='bg-[#02ADD51A] pt-[4rem] pb-[9rem]  px-[2.5rem] text-center rounded-[20px] relative'>
            <div className='w-[100px] max-small:w-[80px] h-[100px] max-small:h-[80px] bg-[#fff] rounded-full mx-auto bg-[#fff] flex items-center'>  
            <div className='relative w-[61px] max-small:w-[41px] h-[61px] max-small:h-[41px] mx-auto'>
                <Image 
                src="/v_3_icons/ourresource3.png"
                fill
                alt="different resources offered at slumtech"
                
            />
            </div>         
            </div>
            <div className='mt-[3rem] flex flex-col gap-y-[1.5rem]'>
                <h2 className='text-[#004658] font-[700] text-[2rem] max-small:text-[1.6rem] leading-[3.2rem] max-small:leading-[2.4rem]'>Volunteer as a Mentor</h2>
                <p>Share your expertise and inspire the next generation.</p>
            </div>
            <div className='absolute bottom-[2rem] left-0 w-full text-center'>
                <span className='underline font-[700] text-[20px] max-small:text-[1.6rem] leading-[26px] text-[#0C9D69]'>Contact us</span>
            </div>
           </div>

           <div className='bg-[#02ADD51A] py-[4rem] px-[2.5rem] text-center rounded-[20px] relative'>
            <div className='w-[100px] max-small:w-[80px] h-[100px] max-small:h-[80px] bg-[#fff] rounded-full mx-auto bg-[#fff] flex items-center'>  
            <div className='relative w-[61px] max-small:w-[41px] h-[61px] max-small:h-[41px] mx-auto'>
                <Image 
                src="/v_3_icons/ourresource4.png"
                fill
                alt="different resources offered at slumtech"
                
            />
            </div>         
            </div>
            <div className='mt-[3rem] flex flex-col gap-y-[1.5rem]'>
                <h2 className='text-[#004658] font-[700] text-[2rem] max-small:text-[1.6rem] leading-[3.2rem] max-small:leading-[2.4rem]'>Collaborate on Community Initiatives</h2>
                <p>Work with us to create lasting projects in targeted areas.</p>
            </div>
            <div className='absolute bottom-[2rem] left-0 w-full text-center'>
                <span className='underline font-[700] text-[20px] max-small:text-[1.6rem] leading-[26px] text-[#0C9D69]'>Contact us</span>
            </div>
           </div>    
        
        </div>
        </div>
       </section>
   ) 
}

export default Resources;