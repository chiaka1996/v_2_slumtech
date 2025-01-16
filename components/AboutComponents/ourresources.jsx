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
    // useEffect(() => {
    //     topToBottomAnimation(".programHeader")
    //     bottomToTopAnimation(".programSububHeader")
    //    rightToLeftAnimation(".techLiteracy")
    //    leftToRightAnimation(".healthTech")
    //    rightToLeftAnimation(".techEducation")
    //    leftToRightAnimation(".entrepreneurship")
    //    scaleUpAnimation(".programImage")
    //    scaleUpAnimation(".globalImage")
    //    topToBottomAnimation(".globalHeader")
    //    bottomToTopAnimation(".countries")

    // }, [])
    

    return(
       <section 
        className={`font-[400] text-[1.6rem] max-small:text-[1.4rem] leading-[2.4rem] pt-[12rem] max-small:pt-[5rem] w-full`}
       >
        <div className='container'>
        <h1 className='font-[600] text-[4.8rem] leading-[62px] text-center'>
            <span className='text-[#004658]'>Our</span><span className='text-[#0C9D69]'> Resources</span>
        </h1>

        <div className='mt-[5rem] max-small:mt-[3rem] gridStyle gap-[3rem] rounded-[20px]'>
           <div className='bg-[#02ADD51A] py-[4rem] px-[2.5rem] text-center'>
            <div className='w-[100px] h-[100px] bg-[#fff] rounded-full mx-auto bg-[#fff] flex items-center'>  
            <div className='relative w-[61px] h-[61px] rounded-[20px] mx-auto'>
                <Image 
                src="/v_3_icons/ourresource1.png"
                fill
                alt="different resources offered at slumtech"
                
            />
            </div>         
            </div>

            <div className='mt-[3rem] flex flex-col gap-y-[1.5rem]'>
                <h2 className='text-[#004658] font-[700] text-[2rem] leading-[3.2rem]'>Sponsor STEM Competitions</h2>
            </div>

           </div>
        
        </div>
        </div>
       </section>
   ) 
}

export default Resources;