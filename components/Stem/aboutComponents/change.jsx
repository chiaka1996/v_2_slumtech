import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"

const Change = () => {
 
    return(
      <section
      className="w-full h-[30rem] bg-gradient-to-b from-[#FEEECD00] to-[#FEEECDD9]"
     >
        <div className='container h-[30rem] flex items-center'>
            <div className='w-full text-center'>
            <h2 className='text-[#004658] font-[700] text-[5.4rem] leading-[6.4rem] mb-[3rem]'>SlumTech Foundation: Innovating for Change</h2>
             <button className='mx-auto px-[1rem] flex flex-row justify-center gap-x-[1.5rem] items-center w-[210px] h-[50px] rounded-[25px] bg-[#F5B021] text-[700] text-[#000] font-[500] text-[18px] leading-[3rem]'>
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
      </section>
    )
}

export default Change;