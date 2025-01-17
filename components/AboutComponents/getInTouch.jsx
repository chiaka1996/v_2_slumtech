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

const GetInTouch = ({img }) => {

    return(
       <section 
       style={{backgroundImage: `url(/v_3_images/get-in-touch.png)`, borderImage: "fill 1 linear-gradient(#000000BF, #00000000)"}}
        className={`py-[12rem] font-[400] text-[#fff] text-[1.6rem] max-small:text-[1.4rem] max-small:leading-[2.4rem] bg-center [1700px]:bg-cover bg-no-repeat h-[699px] w-full flex item-center`}
       >
        <div className='container'>
            <div className='ml-auto max-w-[628px] flex flex-col gap-y-[2rem]'>
            <h2 className='font-[700] text-[4.8rem] leading-[62px]'>
                <span className='text-[#F5B021]'>Get In Touch </span> 
            </h2>
            <p className='font-[500] text-[2rem] leading-[32px]'>
            We invite you to connect with SlumTech Foundation! Discover more about our initiatives, share your story, or 
            learn how you can get involved. Join us on social media to stay updated and be part of a community committed to empowering lives through technology.
            </p>
            <p className='font-[600] text-[30px] leading-[42px]'>Together, let’s build a tech-savvy future for everyone</p>

            <Button text="Contact us Now" />
            </div>
        </div>
       </section>
   ) 
}

export default GetInTouch;