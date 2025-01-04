import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BarState } from '../../../context/context';
import style from './index.module.css';
import { useRouter } from "next/router";
import {Button} from "../../index"

const JoinUs = () => {
 
    return(
      <section
      style={{backgroundImage: `url(/v_3_images/join.png)`, borderImage: "fill 1 linear-gradient(#00000000, #00000099)"}}
      className="w-full h-[63rem]"
     >
        <div className='container text-[1.8rem] leading-[3rem] text-[#fff]'>
            <div >
            <h2 className='font-[700] text-[5.4rem] leading-[6.4rem] text-[#F5B021]'>Join Us</h2>
            <div className='max-w-[62rem] mt-[1.5rem] flex flex-col gap-y-[3rem] text-[#fff]'>
             <p>
                Whether you’re a student eager to demonstrate your skills or a mentor looking
                to make a difference, we invite you to join us in this transformative journey. 
                Together, we can empower the next generation of leaders and innovators to overcome
                 obstacles and build a brighter future.
                 </p>

                <p>For more information on how to get involved, visit our <span className='text-[#F5B021]'> Contact Us </span> page.</p>

                <button className='w-[210px] h-[50px] rounded-[25px] bg-[#F5B021] text-[700]'>
                        Contact Now
                    </button>
            </div>
            </div>
        </div>
      </section>
    )
}

export default JoinUs;