"use client"
import {useEffect} from 'react'
import { topToBottomAnimation, bottomToTopAnimation, rightToLeftAnimation, leftToRightAnimation, scaleUpAnimation} from "../../utilis/animations";
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '..';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Programs = ({img }) => {

    return(
       <section 
       style={{backgroundImage: `url(/v_3_images/aboutjoinus.png)`, borderImage: "fill 1 linear-gradient(#00000000, #000000BF)"}}
        className={`font-[400] text-[#fff] text-[1.6rem] max-small:text-[1.4rem] max-small:leading-[2.4rem] mt-[12rem] min-h-[526px] w-full flex item-center`}
       >
        <div className='container'>
            <div className='max-w-[676px]'>
            <h2 className='font-[700] text-[4.8rem] leading-[62px]'>
                <span className='text-[#F5B021]'>Join Us </span> <span>in Creating Impact</span>
            </h2>
            <p className='font-[500] text-[2rem] leading-[32px] my-[2rem]'>
            At SlumTech Foundation, partnership is key to amplifying our impact. We welcome collaboration with local communities, 
            government agencies, NGOs, tech companies, and individuals who share our vision of empowering underserved communities.
            </p>

            <Button text="Join Us Now" />

            </div>

       
        </div>
       </section>
   ) 
}

export default Programs;