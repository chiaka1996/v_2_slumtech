import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, Banner, Footer, Button} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function OurStory() {
 
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem]">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/storybanner.png"
      header1="Our Mission,"
      header2="Your Impact"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="Building Bridges to the Future"
    />

    {/* video section */}
    <section>
      <div className="container py-[10rem]">
      <h2 className='font-[500] text-center text-[4.5rem] leading-[4.5rem]'>
      <span>Journey Through</span>
      <span className='text-[#FDB21A]'>Our Lens</span>
      </h2>

      <div className='max-w-[97.1rem] h-[52.8rem] mt-[5rem] mx-auto'>
      <video controls className='rounded-[20px] w-full'>
          <source src="https://res.cloudinary.com/dcr1pvlh3/video/upload/v1728152331/samples/elephants.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>
    </section>

    <section className='bg-[#0A4527] text-[#fff]'>
      <div className='min-[1440px]:container'>
        {/* our story section */}
        <div className='flex flex-row flex-wrap'>
        <div className='w-[50%] pt-[15.6rem]' >
          <div className='max-w-[49.2rem] mx-auto'>
            <h1 className='text-[2.5rem] leading-[2.5rem]'>Our Story</h1>
            <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[3.5rem]'>
                <span>Story of</span>
                <span className='text-[#FDB21A]'>SlumTech Foundation</span>
                </h2>
            <p>
            SlumTech Foundation was established in response to the urgent need for 
            support in communities often overlooked by traditional development efforts.
             Our team comprises passionate individuals from diverse backgrounds, 
            all united by a common goal: to foster equity and empower individuals 
            through access to digital tools and resources.
            </p>

            <div className='max-w-[16rem] h-[5.8rem] mt-[3.5rem]'>
            <Button text="Learn More" />
            </div>
          </div>
        </div>
        <div className='w-[50%] h-[74rem] relative' >
            <Image 
                src="/v_3_images/ourstory.png"
              fill
              alt="slumtech foundation story"
            />
        </div>
        </div>

         {/* what we do section */}
         <div className='flex flex-row flex-wrap'>
         <div className='w-[50%] h-[74rem] relative' >
            <Image 
                src="/v_3_images/whatwedo.png"
              fill
              alt="slumtech foundation story"
            />
        </div>
        <div className='w-[50%] pt-[15.6rem]' >
          <div className='max-w-[49.2rem] mx-auto'>
            <h1 className='text-[2.5rem] leading-[2.5rem]'>What We Do</h1>
            <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[3.5rem]'>
                <span>How we </span>
                <span className='text-[#FDB21A]'>Make a Differece</span>
                </h2>
            <p>
            At SlumTech Foundation, we understand that technology can be a powerful catalyst for change. 
            We focus on delivering comprehensive programs that enhance digital literacy, promote entrepreneurship, 
            and improve access to vital resources. Whether it’s through 
            establishing community tech hubs, conducting training workshops, 
            or providing mentorship, we are committed to making a tangible impact.
            </p>

            <div className='max-w-[16rem] h-[5.8rem] mt-[3.5rem]'>
            <Button text="Learn More" />
            </div>
          </div>
        </div>
        </div>

      </div>
    </section>

    <Footer/>
    </main>
  )
};