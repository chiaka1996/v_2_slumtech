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
      className="w-full h-[34.4rem] bg-gradient-to-b from-[#FEEECD00] to-[#FEEECDD9]"
     >
        <div className='container '>
            <div>
            <h2 className='text-[#004658] font-[700] text-[5.4rem] leading-[6.4rem]'>SlumTech Foundation: Innovating for Change</h2>
            </div>
        </div>
      </section>
    )
}

export default Change;