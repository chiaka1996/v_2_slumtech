import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function OurStory() {
 
  return (
   <main className="text-[1.6rem] font-[400] text-[#000] leading-[2.6rem] relative">
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
      <span className='text-[#FDB21A]'> Our Lens</span>
      </h2>

      <div className='max-w-[97.1rem] h-[52.8rem] mt-[5rem] mx-auto'>
      <video controls className='rounded-[20px] w-full'>
          <source src="https://res.cloudinary.com/dcr1pvlh3/video/upload/v1728152331/samples/elephants.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      </div>
    </section>

    <section className='bg-[#0A4527] text-[#fff] relative'>
      <div className='min-[1440px]:container'>
        {/* our story section */}
        <div className='flex flex-row'>
        <div className='w-[50%] pt-[15.6rem]' >
          <div className='max-w-[49.2rem] mx-auto'>
            <h1 className='text-[2.5rem] leading-[2.5rem]'>Our Story</h1>
            <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[3.5rem]'>
                <span>Story of</span>
                <span className='text-[#FDB21A]'> SlumTech Foundation</span>
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
         <div className='flex flex-row'>
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

    {/* timeline/milestone */}
    <section className='relative py-[10rem]'>
      <div className="container text-[#000] relative">
        <div className='text-center'>
        <MainHeader text="Timeline" />
        <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[2.5rem]'>
                <span className='text-[#FDB21A]'>Milestones </span>
                <span>That Matter</span>
                </h2>
        </div>
        {/* milestone */}
        <div className='relative'>
          <div className='absolute top-[27rem] left-0'>
          <div className='flex flex-col gap-y-[5rem] font-[500] text-[2.5rem] leading-[2.5rem]'>
            <span className='text-[#FDB21A]'>2024</span>
            <span>2023</span>
            <span>2022</span>
          </div>
          </div>
          
          
          <div className='w-[104.1rem] ml-auto mr-0'>
            {/* 2024 */}
            <div className='flex flex-row justify-between border border-t-0 border-r-0 border-l-0 border-[#000] py-[5rem]'>
              <div className='leading-[2.5rem] text-[10rem] font-[500] mt-[9rem]'>2024</div>
              <div className='w-[69.9rem] flex flex-row justify-between'>
                <div className='w-[26rem]'>
                  <h1 className='font-[500] text-[2rem] leading-[2.5rem]'>SlumTech Ed-Tech Project in Houston, TX</h1>
                  <div className='mt-[2rem]'>
                  Since early 2024, the SlumTech Ed-Tech project has expanded its 
                  horizons by launching training programs in Houston, Texas. Our founder 
                  took the lead in this initiative, personally conducting software development 
                  training for interested Houstonians. 
                  This move not only brought technology education to a new audience but 
                  also created a vibrant community of aspiring developers.
                  </div>
                </div>
                <div className='w-[40rem] h-[27.5rem] relative' >
                  <Image 
                      src="/v_3_images/milestone2024.png"
                    fill
                    alt="2024 milestone"
                  />
              </div>
              </div>
            </div>

            {/* 2023 */}
            <div className='flex flex-row justify-between border border-t-0 border-r-0 border-l-0 border-[#000] py-[5rem]'>
              <div className='leading-[4.5rem] text-[5rem] font-[500] opacity-50'>2023</div>
              <div className='w-[69.9rem]'>
              <div className='flex flex-row justify-between border border-t-0 border-r-0 border-l-0 border-[#000] pb-[5rem]'>
                <div className='w-[26rem]'>
                  <h1 className='font-[500] text-[2rem] leading-[2.5rem]'>Personalized Training Experience</h1>
                  <div className='mt-[2rem]'>
                  The training programs offered in Houston were designed to be highly interactive and engaging. Participants 
                  experienced a curriculum tailored to meet their needs, encompassing foundational
                  concepts to advanced software development techniques.
                  </div>
                </div>
                <div className='w-[40rem] h-[27.5rem] relative' >
                  <Image 
                      src="/v_3_images/2023-1.png"
                    fill
                    alt="2024 milestone"
                  />
              </div>
              </div>

              <div className='flex flex-row justify-between pt-[5rem]'>
                <div className='w-[26rem]'>
                  <h1 className='font-[500] text-[2rem] leading-[2.5rem]'>Hands-On Workshops:</h1>
                  <div className='mt-[2rem]'>
                  Participants engaged in practical coding sessions,
                   working on real-life projects that allowed them to 
                   apply what they learned immediately.
                  </div>
                </div>
                <div className='w-[40rem] h-[27.5rem] relative' >
                  <Image 
                      src="/v_3_images/2023-2.png"
                    fill
                    alt="2024 milestone"
                  />
              </div>
              </div>
              </div>
            </div>

            {/* 2022 */}
            <div className='flex flex-row justify-between border border-t-0 border-r-0 border-l-0 border-[#000] py-[5rem]'>
              <div className='leading-[4.5rem] text-[5rem] font-[500] opacity-50'>2022</div>
              <div className='w-[69.9rem]'>
              <div className='flex flex-row justify-between'>
                <div className='w-[26rem]'>
                  <h1 className='font-[500] text-[2rem] leading-[2.5rem]'>Industry Insights</h1>
                  <div className='mt-[2rem]'>
                  With our founder’s extensive experience in the tech industry,
                  participants gained valuable insights into current technologies 
                  and trends, preparing them for future careers.
                  </div>
                </div>
                <div className='w-[40rem] h-[27.5rem] relative' >
                  <Image 
                      src="/v_3_images/2022.png"
                    fill
                    alt="2022 slumtech milestone"
                  />
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-[#FAFAFA] py-[10rem]'>
    <div className='container'>
    <div className='text-center'>
        <MainHeader text="Testimonials" />
        <h2 className='font-[500] text-[4.5rem] leading-[4.5rem]'>
          <span className='text-[#FDB21A]'>Testimonials </span>
          <span>from Thriving Participants</span>
          </h2>
          <div className='max-w-[58.6rem] mx-auto mt-[2rem]'>The impact of the training has been evident in the heartfelt testimonials from our participants:</div>
        </div>
        {/* carousel */}
        <Carousel>
                <div>
                    {/* <img src="assets/1.jpeg" /> */}
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
    </section>
    {/* community */}
    <section className='py-[10rem]'>
    <div className="container text-[#000] relative">
        <div className=''>
        <MainHeader text="community" />
        <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] mt-[2rem] mb-[2.5rem]'>
          <span className='text-[#FDB21A]'>Building a</span>
          <span> Community of Innovators</span>
          </h2>
          <div className='max-w-[81.7rem] mt-[2rem]'>
          The SlumTech training program in Houston not only focuses on skill development but
           also emphasizes the importance of collaboration and community.
           Participants often work together, share ideas, and build lasting 
           connections that extend beyond the classroom. 
          </div>
         </div>

         <div className='mt-[5rem] flex flex-row justify-between items-center'>
          <div className='w-[56.1rem] h-[57.5rem] relative'>
          <Image 
            src="/v_3_images/community.png"
            fill
            alt="slumtech foundation community"
          />
          </div>
          <div className='w-[57rem] flex flex-col gap-y-[1.5rem]'>
            <div>
              <h1 className='flex flex-row items-center gap-x-[1rem] mb-[1rem'>
                <div className='relative w-[3rem] h-[2.7rem]'>
                <Image 
                src="/v_3_icons/check.png"
                fill
                alt="networking events"
               />
                </div>
                <span className='font-[500] text-[2rem] leading-[2.8rem]'>Networking Events</span>
              </h1>
              <p>Regular meetups and networking events are organized, 
                allowing participants to connect with local 
                tech professionals and explore career opportunities.
              </p>
            </div>

            <div>
              <h1 className='flex flex-row items-center gap-x-[1rem] mb-[1rem'>
                <div className='relative w-[3rem] h-[2.7rem]'>
                <Image 
                src="/v_3_icons/check.png"
                fill
                alt="networking events"
               />
                </div>
                <span className='font-[500] text-[2rem] leading-[2.8rem]'>Project Collaborations</span>
              </h1>
              <p>
              Teams formed during training often collaborate on projects, 
              fostering teamwork and innovative thinking.
              </p>
            </div>

            <div>
              <h1 className='flex flex-row items-center gap-x-[1rem] mb-[1rem'>
                <div className='relative w-[3rem] h-[2.7rem]'>
                <Image 
                src="/v_3_icons/check.png"
                fill
                alt="networking events"
               />
                </div>
                <span className='font-[500] text-[2rem] leading-[2.8rem]'>The Future of SlumTech in Houston</span>
              </h1>
              <p>
              As we celebrate our early successes in Houston, the SlumTech Ed-Tech project is 
              committed to expanding its offerings. 
              We plan to introduce specialized workshops, online courses, 
              and mentorship programs to help participants continue their 
              educational journey in software development.
              Together, we aim to nurture a robust community of skilled developers 
              ready to make an impact in Houston and beyond. Join us as we empower 
              the next generation through technology and education.
              </p>
            </div>
          </div>
         </div>
        </div>
    </section>
      <JoinUs />
    <Footer/>
    </main>
  )
};