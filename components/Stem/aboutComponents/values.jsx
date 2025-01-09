import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"

const Values = () => {
 
    return(
        <section className='w-full bg-gradient-to-r from-[#FEB41E26] to-[#12CE8926] py-[12rem] max-small:py-[5rem] text-[1.8rem] leading-[3rem]'>
        <div className='container'>
        <h2 className='text-[#004658] font-[700] text-[5.4rem] leading-[6.4rem]'>Our Values</h2>
        <p className='max-w-[878px]'>
        The SlumTech STEM Competition is an annual event dedicated to inspiring
         and empowering young minds from underserved communities across the United States.
        </p>

        <div className='mt-[5rem] gridStyle gap-x-[3rem] text-[1.6rem] leading-[2.4rem]'>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center'>
                <div className="relative h-[8rem] w-[8rem] mx-auto">
                <Image 
                src="/v_3_icons/value1.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] leading-[4.2rem] text-[#004658] mt-[4rem]'>Inclusivity</h3>
                <p className='text-[#004658]  mt-[3rem]'>
                We celebrate diversity and encourage participation from all backgrounds.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center'>
                <div className="relative h-[8rem] w-[8rem] mx-auto">
                <Image 
                src="/v_3_icons/value2.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] leading-[4.2rem] text-[#004658]  mt-[4rem]'>Empowerment</h3>
                <p className='text-[#004658]  mt-[3rem]'>
                We empower youth by providing the tools and resources necessary for their success.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center'>
                <div className="relative h-[8rem] w-[8rem] mx-auto">
                <Image 
                src="/v_3_icons/value3.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] leading-[4.2rem] text-[#004658]  mt-[4rem]'>Innovation</h3>
                <p className='text-[#004658]  mt-[3rem]'>
                We foster a spirit of creativity and critical thinking, urging participants to think outside the box.
                </p>
            </div>
            <div className='bg-[#fff] rounded-[25px] py-[5rem] px-[2.5rem] text-center'>
                <div className="relative h-[8rem] w-[8rem] mx-auto">
                <Image 
                src="/v_3_icons/value4.png"
                fill
                alt="slumtech value"
                />
                </div>
                <h3 className='font-[700] text-[3.2rem] leading-[4.2rem] text-[#004658]  mt-[4rem]'>Collaboration</h3>
                <p className='text-[#004658] mt-[3rem]'>
                We believe in the power of teamwork and community, encouraging participants to work together and support one another.
                </p>
            </div>
        </div>
          
        </div>
      </section>
    )
}

export default Values;