"use client"
import {useEffect} from 'react'
import {gsap} from "gsap";
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {TextPlugin} from 'gsap/dist/TextPlugin';
import css from "./banner.module.css";
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "../index"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Banner = ({img, header1, header2, subheader, header1Color, header2Color }) => {
    useEffect(() => {
        gsap.fromTo(".bigHeader",
            {y: -100},
            {
              y: 0,
              duration: 1,
              onComplete: () => {
                gsap.fromTo(".heading",
                    {y: 100,
                    opacity: 0
                    
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      onComplete: () => {
                        gsap.to('.subheading', {
                            duration: 3, 
                            text: subheader,
                            })
                      }
                    })        
              }
            })
    }, [])
    

    return(
       <section 
        style={{backgroundImage: `url(${img})`}}
        className={`pt-[10rem] max-small:pt-0 flex items-center justify-center h-[100vh] w-full bg-cover bg-center`}
       >

        <div className="text-center container" >
        <h1 className={`bigHeader font-[700] tracking-[0.10em] text-[15rem] small:max-medium:text-[12rem] max-small:text-[5rem] leading-[9rem] ${css.banner_main_header}`}>SLUMTECH</h1>
           <h2 className="opacity-0 heading font-[700] text-[5rem] max-small:text-[2.5rem] leading-[9rem] max-small:leading-[4rem]">
            <span style={{color: `${header1Color}`}}>{header1} </span><span style={{color: `${header2Color}`}}> {header2}</span>
            </h2>
            <h3 className="subheading font-[600] text-[2.5rem] max-small:text-[1.8rem] leading-[2.6rem] text-[#fff]"></h3>
            {/* <div className="w-[16rem] h-[5.8rem] mx-auto mt-[5rem] max-small:mt-[3rem]">
                <Link href="/story" className='no-underline'>
                <Button text="Learn More" />
                </Link>
            </div> */}
            <div className="flex flex-col gap-y-[2rem] max-small:mt-[3rem] max-small:pl-[2rem]">
        <a href="https://www.facebook.com/share/1EBLeawcny/?mibextid=LQQJ4d" target="_blank">
        <div className="hover:scale-110 w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/facebook-icon.png"
           fill
            alt="slumtech foundation facebook link"
        />
        </div>
        </a>
        <a href="https://www.linkedin.com/company/slumtech-foundation/" target="_blank">
        <div className="hover:scale-110 w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/linkedin.png"
           fill
            alt="slumtech foundation linkedin link"
        />
        </div>
        </a>
        <a href="https://www.instagram.com/slumtechfoundation/profilecard/?igsh=MThrcGRqZXQ0bm15bA==" target="_blank">
        <div className="hover:scale-110 w-[3.6rem] max-small:w-[3rem] h-[3.6rem] max-small:h-[3rem] relative">
        <Image 
            src="/v_3_icons/instagram-icon.png"
           fill
            alt="slumtech foundation instagram link"
        />
        </div>
        </a>
        </div>
        </div>  
       </section>
    )
}

export default Banner;