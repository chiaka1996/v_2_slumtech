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

const Programs = ({img }) => {
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
            <span className='text-[#004658]'>Our</span><span className='text-[#0C9D69]'> Programs</span>
        </h1>

        <div className='mt-[5rem] max-small:mt-[3rem] gridStyle gap-[3rem] rounded-[20px]'>
            <div className='bg-[#F5F5F5] rounded-[20px]'>
                <div className='relative w-full h-[30.8rem] rounded-[20px]'>
                 <Image 
                src="/v_3_images/ourprogram1.png"
                fill
                alt="different programs offered at slumtech"
                className='rounded-[20px]'
            />
                </div>
                <div className='py-[3rem] px-[2.5rem] rounded-[20px]'>
                    <h2 className='text-[#004658] font-[700] text-[2.4rem] leading-[31px]'>STEM Competitions</h2>
                    <p className='leading-[3rem] text-[1.8rem]'>
                    Our STEM competitions are designed to ignite creativity and problem-solving skills among participants. 
                    These events not only promote teamwork and collaboration but also provide valuable experience and recognition 
                    for budding innovators.
                    </p>
                </div>
            </div>

            {/* grid2 */}
            <div className='bg-[#F5F5F5] rounded-[20px]'>
                <div className='relative w-full h-[30.8rem] rounded-[20px]'>
                 <Image 
                src="/v_3_images/ourprogram2.png"
                fill
                alt="different programs offered at slumtech"
                className='rounded-[20px]'
            />
                </div>
                <div className='py-[3rem] px-[2.5rem] rounded-b-[20px]'>
                    <h2 className='text-[#004658] font-[700] text-[2.4rem] leading-[31px]'>Free Technology Courses and Training Platform</h2>
                    <p className='leading-[3rem] text-[1.8rem]'>
                    We offer a comprehensive online platform featuring free technology courses. Covering a wide array of subjects—coding,
                     digital marketing, data science, and more—our training resources empower learners to gain essential skills and advance their careers.
                    </p>
                </div>
            </div>
            {/* grid3 */}
            <div className='bg-[#F5F5F5] rounded-[20px]'>
                <div className='relative w-full h-[30.8rem] rounded-[20px]'>
                 <Image 
                src="/v_3_images/ourprogram3.png"
                fill
                alt="different programs offered at slumtech"
                className='rounded-[20px]'
            />
                </div>
                <div className='py-[3rem] px-[2.5rem] rounded-[20px]'>
                    <h2 className='text-[#004658] font-[700] text-[2.4rem] leading-[31px]'>Mentorship from Tech Professionals Worldwide</h2>
                    <p className='leading-[3rem] text-[1.8rem]'>
                    Our mentorship program connects aspiring tech enthusiasts with seasoned professionals 
                    from around the globe. Through one-on-one mentoring, 
                    workshops, and networking opportunities, participants 
                    receive guidance and support to navigate their tech journeys successfully.
                    </p>
                </div>
            </div>
        
        </div>
        </div>
       </section>
   ) 
}

export default Programs;