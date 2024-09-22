import { useState, useRef } from "react";
import Image from "next/image";
import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link';
import {Navigation, Sidebar, Newsletter, Footer} from "../../components"
import Head from 'next/head'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Card = ({title, paragraph, link, img}) => {
    return(
        <div className="relative max-large:pb-[4rem] max-large:mb-[0.5rem] min-h-[38rem] max-large:min-h-[32rem]">
            <div  className="relative w-full min-h-[17.5rem] max-large:min-h-[15rem]">
                <Image 
                src={img}
                fill
                alt="event"
                /> 
            </div>

            <h2 className="font-h3 text-secondary">
            {title}
            </h2>
            <p className="text-[#044930] text-normal">
           {paragraph}
            </p>   
                <Link href={link}>
                <button className="px-3 max-large:px-4 py-3 bg-btn_bg rounded-[12px] absolute bottom-[0.5rem] right-0 no-underline">
                {/* <div  className="relative min-w-[20px] min-h-[20px] max-large:min-h-[20px]">
                <Image 
                src="https://img.icons8.com/ios/20/FCFCFD/circled-right-2.png" 
                fill
                alt="event"
                /> 
                </div> */}
                 <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
                </button>
                </Link>  
        </div>
    )
}

export default function Media() {
    const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            gsap.to(".carouselBanner", 
              { 
                x: -150,
                duration: 1, 
              }
            );
        }
    )

    const handleMouseEnter1 = () => { 
                gsap.to(".carouselBanner", 
                  { 
                    x: 0,
                    duration: 1, 
                  }
                );
  }

    const handleMouseLeave1 = () => {
       
            gsap.to(".carouselBanner", 
                { 
                x: -150,
                duration: 1, 
                }
            );
    }

    const handleMouseEnter2 = () => { 
        gsap.to(".carouselBanner", 
          { 
            x: -100,
            duration: 1, 
          }
        );
}

const handleMouseLeave2 = () => {

    gsap.to(".carouselBanner", 
        { 
        x: -150,
        duration: 1, 
        }
    );
}

const handleMouseEnter3 = () => { 
    gsap.to(".carouselBanner", 
      { 
        x: -100,
        duration: 1, 
      }
    );
}

const handleMouseLeave3 = () => {
gsap.to(".carouselBanner", 
    { 
    x: -150,
    duration: 1, 
    }
);
}

const handleMouseEnter4 = () => { 
    gsap.to(".carouselBanner", 
      { 
        x: -100,
        duration: 1, 
      }
    );
}

const handleMouseLeave4 = () => {
gsap.to(".carouselBanner", 
    { 
    x: -150,
    duration: 1, 
    }
);
}

const handleMouseEnter5 = () => { 
    gsap.to(".carouselBanner", 
      { 
        x: -130,
        duration: 0.5, 
      }
    );
}

const handleMouseLeave5 = () => {

gsap.to(".carouselBanner", 
    { 
    x: -150,
    duration: 0.5, 
    }
);
}

const handleMouseEnter6 = () => { 
    gsap.to(".carouselBanner", 
      { 
        x: -305,
        duration: 1, 
      }
    );
}

const handleMouseLeave6 = () => {
gsap.to(".carouselBanner", 
    { 
    x: -150,
    duration: 1, 
    }
);
}

    const AllNews = [
        {
            title: "Embracing Digital Transformation: Unlocking the Potential of Slum Communities",
            img: "/images/event1.png",
            link: "blog/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        },
        {
            title: "Empowering Tomorrow's Leaders: The Global Impact of SlumTech Institutes' Future Expansion and Strategic Partnerships",
            img: "/images/event2.png",
            link: "blog/post2",
            paragraph: "The future of education is set to be transformed by the visionary plans of the SlumTech Foundation as it embarks on establishing SlumTech Institutes globally"
        },
        {
            title: "SlumTech Foundation Joins US Chamber of Commerce",
            img: "/images/event3.png",
            link: "media/post1",
            paragraph: "In the bustling streets of urban slums, where challenges like poverty, limited resources, and inadequate infrastructure persist, a beacon of hope is emerging – digitalization."
        }
    ]

    const AllEvents = [
        {
            title: "Tech for Change: Empowering Communities Worldwide.",
            img: "/images/event4.png",
            link: "media/post1",
            paragraph: "This event aims to bring together tech innovators, social entrepreneurs, policymakers, and community leaders from around the world to collaborate on solutions that address the unique challenges faced by underserved communities."
        }
    ]

  return (
   <main className="relative text-primary overflow-hidden" ref={container}>
    <Head>
    <title>Slumtech Media page </title>
    <meta
      name="description"
      content="SlumTech Foundation is a US-based nonprofit organization with a bold mission 
      to establish world-class tech institutions across Africa"
      key="desc"
    />
    <meta name="keywords" content="nonprofit, foundation, slum, technology, africa" />
    </Head>
    <Navigation />
    <Sidebar /> 

    {/* carousel banner */}
    {/* css is in home.css in style folder */}
    <section className="mt-[8rem] w-full bg-[#f3f4f6] py-[10rem]">
        <div className="carouselBanner flex flex-row items-center h-[396px]">
        <div 
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        className="relative min-w-[267px] h-[342px] mr-[1rem] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />
            <div className="relative ml-[10%] mt-[1rem] font-h4 text-[17px] text-index">JUNE 2</div>
             <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <p className="text-index">
                Become a member
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
            
        </div>

        <div 
         onMouseEnter={handleMouseEnter2}
         onMouseLeave={handleMouseLeave2}
        className="relative min-w-[308px] h-[395px] mr-[1rem] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />

            <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <header className="text-mediaBannerHead">Event</header>
                <p className="text-index">2025 Event
                Title: Tech for Change Empowering 
                Communities Worldwide.
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
        </div>

        <div 
         onMouseEnter={handleMouseEnter3}
         onMouseLeave={handleMouseLeave3}
        className="relative min-w-[308px] h-[395px] mr-[1rem] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />
             <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <header className="text-mediaBannerHead">News</header>
                <p className="text-index">
                SlumTech Foundation Joins US Chamber of Commerce
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
        </div>

        <div
         onMouseEnter={handleMouseEnter4}
         onMouseLeave={handleMouseLeave4}
        className="relative min-w-[319px] h-[406px] mr-[1rem] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />
            <div className="relative ml-[10%] mt-[1rem] font-h4 text-[17px] text-index">AUGUST 14</div>
             <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <header className="text-mediaBannerHead">New Blog Post</header>
                <p className="text-index">
                Embracing Digital Transformation: Unlocking the Potential of Slum Communities
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
        </div>

        <div 
         onMouseEnter={handleMouseEnter5}
         onMouseLeave={handleMouseLeave5}
        className="relative min-w-[308px]  h-[395px] mr-[1rem] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />
            <div className="relative ml-[10%] mt-[1rem] font-h4 text-[17px] text-index">AUGUST 18</div>
             <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <header className="text-mediaBannerHead">Blog Post</header>
                <p className="text-index">
                Empowering Tomorrow's Leaders: 
                The Global Impact of SlumTech Institutes' 
                Future Expansion and Strategic Partnerships
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
        </div>

        <div 
         onMouseEnter={handleMouseEnter6}
         onMouseLeave={handleMouseLeave6}
          className="relative min-w-[267px] h-[342px] hover:z-50 hover:scale-125 shadow-[2px_5px_5px_2px_#0000004D] rounded-[10px]">
            <Image src='/images/event2.png'
            fill
            className="" alt="banner" />
            <div className="relative ml-[10%] mt-[1rem] font-h4 text-[17px] text-index">JUNE 3</div>
             <div className="absolute bottom-8 left-[10%] w-[80%] flex items-end justify-between font-h4 text-h3">
              <div>
                <p className="text-index">
                Volunteer
                </p>
              </div>
                <Image 
                src='/icons/white_arrow.svg'
                width="24"
                height="24"
                className="" 
                alt="banner" />
            </div>
        </div>
        </div>
    </section>

    <section className="flex flex-row max-large:flex-col items-center w-[80%] max-large:w-[90%] mx-auto mt-[5em] max-large:mt-[3em]">
    <div  className="relative w-[55%] max-large:w-full min-h-[32.5rem] max-large:min-h-[20rem] mt-[3em]">
    <Image 
    src="/images/event1.png"
    fill
    alt="event"
    /> 
    </div>

    <div className="w-[40%] max-large:w-full ml-[5rem] max-large:ml-0">
        <header className="font-h4 text-[2.5em] max-large:text-h4 text-primary">
        Embracing Digital Transformation: Unlocking the Potential of Slum Communities
        </header>
        <p className="text-[23px] max-large:text-h3 text-[#044930] font-normal mt-[1em]">
        In the bustling streets of urban slums, where challenges like poverty, limited resources, 
        and inadequate infrastructure persist, a beacon of hope is emerging – digitalization.
        </p>

        <div className="w-full text-right mt-[2rem] max-large:mt-[1rem]">
        <Link href="/blog/post1" className='no-underline'>
        <button className="px-6 py-3 bg-btn_bg rounded-[12px]">
        {/* <div  className="relative min-w-[30px] min-h-[30px] max-large:h-[30px]">
        <Image 
        src="https://img.icons8.com/ios/50/FCFCFD/circled-right-2.png" 
        fill
        alt="event"
        /> 
        </div> */}
         <Image 
          src='/icons/white_arrow.svg'
          width="30"
          height="30"
          className="" 
          alt="banner" />
    </button>
    </Link>
    </div> 
    </div>
    </section>

    {/* all news */}
    <section className="mt-[3em] w-[80%] max-large:w-[90%] mx-auto">
        <header className="font-h4 text-[2.5em] max-large:text-mHeader">All news</header>

        <div className="mt-[1em] grid grid-cols-4 max-large:grid-cols-1 gap-4">
          {
            AllNews.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>

    {/* AllEvents */}
    <section className="mt-[3em] w-[80%] max-large:w-[90%] mx-auto">
        <header className="font-h4 text-[2.5em] max-large:text-mHeader">All Events</header>

        <div className="mt-[1em] grid grid-cols-4 max-large:grid-cols-1 gap-4">
          {
            AllEvents.map((item, i) => <Card title={item.title} paragraph={item.paragraph} img={item.img} link={item.link} key={i}/>)
          }
        </div>
    </section>
    <Newsletter />
    <Footer /> 
</main>
);
}