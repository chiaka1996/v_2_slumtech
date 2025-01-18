import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import { topToBottomAnimation, bottomToTopAnimation} from "../../../utilis/animations";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Mission = () => {
      useEffect(() => {
        topToBottomAnimation(".missionHeader")
          bottomToTopAnimation(".missionSubHeader")
      }, [])
 
    return(
      <div className='w-full bg-gradient-to-b from-[#FEEECD00] to-[#FEEECDD9]'>
        <div className='container pt-[43.1rem] max-small:pt-[5rem] pb-[12rem] max-small:pb-[5rem] text-center'>
            <h2 className='text-[#004658] font-[700] text-[5.4rem] max-small:text-[2.5rem] leading-[6.4rem] max-small:leading-[3.2rem] missionHeader'>Our Mission</h2>
            <p className='leading-[2.2rem] text-[1.8rem] max-small:text-[1.4rem] text-[#000] max-w-[936px] mx-auto missionSubHeader'>
                At SlumTech, we believe that talent knows no boundaries. Our mission is to bridge the educational 
                gap by providing innovative platforms that inspire, educate, and nurture the next generation of innovators and problem-solvers. 
                We aim to cultivate a passion for STEM among youth in slum areas, enabling them to create solutions that address their specific challenges.
                </p>
        </div>
      </div>
    )
}

export default Mission;