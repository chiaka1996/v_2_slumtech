import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"

const Vision = () => {
 
    return(
      <div className='w-full'>
        <div className='container max-small:pt-[5rem] text-[1.8rem] max-small:text-[1.4rem] leading-[3rem] max-small:leading-[2.2rem]'>
            {/* vision */}
            <div className='gridStyle gap-x-[10rem] max-small:gap-y-[2rem] mb-[10rem] max-small:mb-[5rem]'>
                <div className='text-left max-w-[69.1rem] flex items-center '>
                    <div>
                    <h2 className='text-[#004658] font-[700] text-[5.4rem] max-small:text-[2.5rem] max-small:leading-[3.5rem] leading-[6.4rem]'>Our Vision</h2>
                    <p className=''>We envision a world where every child, regardless of their socioeconomic background, 
                        has access to quality education and resources in STEM fields. Our competition not only
                         showcases potential talent but also promotes critical thinking, 
                        creativity, and collaboration among participants, pushing them to innovate for their communities.
                    </p>
                    {/* <button className='w-[210px] h-[50px] rounded-[25px] bg-[#F5B021] text-[700]'>
                        Contact Now
                    </button> */}
                </div>
                </div>

                 <div className="relative h-[63.6rem] max-small:h-[30rem] max-w-[73.5rem] rounded-b-[25px]">
                <Image 
                src="/v_3_images/vision.png"
                fill
                className='rounded-b-[25px]'
                alt="slumtech vision"
                />
                 </div>
            </div>

            {/* what we do */}
            <div className='gridStyle gap-x-[10rem]'>
                 <div className="relative h-[63.6rem] max-small:h-[30rem] max-w-[73.5rem] rounded-t-[25px] max-small:order-last">
                <Image 
                src="/v_3_images/what-we-do.png"
                fill
                className='rounded-t-[25px]'
                alt="slumtech vision"
                />
            </div>

            <div className='text-left max-w-[69.1rem] flex items-center '>
                    <div>
                    <h2 className='text-[#004658] font-[700] text-[5.4rem] max-small:text-[2.5rem] leading-[6.4rem] max-small:leading-[3.5rem]'>What We Do</h2>
                    <p className='mb-[2rem]'>We envision a world where every child, regardless of their socioeconomic background, 
                        has access to quality education and resources in STEM fields. Our competition not only
                         showcases potential talent but also promotes critical thinking, 
                        creativity, and collaboration among participants, pushing them to innovate for their communities.
                    </p>
                    {/* <button className='w-[210px] h-[50px] rounded-[25px] bg-[#F5B021] text-[700]'>
                        Contact Now
                    </button> */}
                </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Vision;