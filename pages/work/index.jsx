import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs, WorkCard} from "../../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Work() {
    const OurWorkApproach = [{
        img: "/v_3_images/approach.png",
        title: "Empowerment Through Education",
        note: "We provide comprehensive educational programs that equip individuals with essential tech skills, from coding and software development to data analytics and AI. Our workshops and training sessions are designed to foster creativity, critical thinking, and problem-solving abilities, preparing participants for emerging job markets."
    },
    {
        img: "/v_3_images/approach-2.png",
        title: "Access to Technology",
        note: "Understanding that access to technology is crucial for personal and community development, we work to provide resources such as computers, internet connections, and software tools. We aim to create tech hubs in underserved areas, fostering collaboration and innovation."
    },
    {
        img: "/v_3_images/approach-3.png",
        title: "Community-driven Solutions",
        note: "We engage local communities to identify their unique challenges and collaborate on developing tailor-made solutions. Our projects are designed with input from those we serve, ensuring relevance and effectiveness."
    },
    {
        img: "/v_3_images/approach-4.png",
        title: "Mentorship and Support",
        note: "Our foundation offers mentorship programs that connect aspiring tech enthusiasts with experienced professionals. We believe in nurturing talent and providing ongoing support to help individuals navigate their career paths."
    },
    {
        img: "/v_3_images/approach-5.png",
        title: "Innovative Projects",
        note: "From building mobile applications that solve real-life problems to creating platforms that facilitate knowledge sharing, our initiatives are grounded in creativity and practicality. We strive to convert visionary ideas into impactful realities."
    },

]
  return (
   <main className="text-[1.6rem] max-small:text-[1.3rem] font-[400] text-[#000] leading-[2.6rem] max-small:leading-[2rem]">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/workbanner.png"
      header1="The Heart of"
      header2="Our Mission"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="Impact in Action"
    />
     <section className='py-[10rem] max-small:py-[5rem]'>
        <div className='container'>
        <div className=''>
        <MainHeader text="Our Work" />
        <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[3rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
        <span className='text-[#FDB21A]'>Where Vision </span>
        <span>Meets Reality</span>
        </h2>
        </div>

        <div className='mt-[5rem] max-small:mt-[2rem] flex flex-row max-small:flex-col items-center gap-x-[5rem] max-small:gap-x-0 max-small:gap-y-[1.5rem]'>
            <div className='w-[56.1rem] max-small:w-full h-[40rem] max-small:h-[25rem] relative' >
                <Image 
                    src="/v_3_images/ourwork.png"
                    fill
                    alt="our work at slumtech"
                />
            </div>
            <div className='w-[49.2rem] max-small:w-full'>
            <p>At SlumTech Foundation, we believe that the power of technology can 
            transform lives and uplift communities. Our mission is to bridge 
            the gap between vision and tangible outcomes, 
            ensuring that innovative solutions reach those who need them most.
            </p>
            <div className='mt-[3.5rem] max-small:mt-[1.5rem] w-[16rem] h-[5.8rem]'>
                <Button text="Learn More" />
            </div>
            </div>
        </div>
        </div>
    </section>

    <section className='py-[10rem] max-small:py-[5rem] bg-[#fafafa]'>
        <div className='container'>
        <div className=''>
        <MainHeader text="Our Approach" />
        <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
        <span className='text-[#FDB21A]'>Strategies </span>
        <span>That Drive Us</span>
        </h2>
        </div>

        <div className='mt-[5rem] max-small:mt-[2rem] gap-x-[3.3rem] gap-y-[5rem] max-small:gap-y-[2rem] gridStyle'>
            {
                OurWorkApproach.map((approach, index) => <WorkCard key={index} img={approach.img} title={approach.title} note={approach.note} />)
            }
        </div>
        </div>
    </section>

     {/* our story section */}
     <section className='bg-[#0A4527] text-[#fff]'>
      <div className='min-[1440px]:container max-small:px-[1rem] max-small:py-[5rem]'>
        <div className='flex flex-row max-small:flex-col max-small:gap-y-[1rem] items-center'>
        <div className='w-[50%] max-small:w-full'>
          <div className='max-w-[49.2rem] mx-auto'>
            <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[3.5rem] max-small:mb-[0.5rem]'>
                <span>Impact</span>
                <span className='text-[#FDB21A]'> Stories</span>
                </h2>
            <p>
            We measure our success through the stories of individuals 
            who have benefited from our programs. By fostering a supportive environment, 
            we have seen numerous participants gain employment, 
            start their businesses, and contribute positively to their communities.
            </p>
          </div>
        </div>
        <div className='w-[50%] max-small:w-full h-[74rem] max-small:h-[30rem] relative' >
            <Image 
                src="/v_3_images/impact-1.png"
              fill
              alt="impact of slumtech foundation"
            />
        </div>
        </div>

         <div className='flex flex-row max-small:flex-col-reverse max-small:gap-y-[1rem] items-center max-small:mt-[2rem]'>
         <div className='w-[50%] max-small:w-full h-[74rem] max-small:h-[30rem] relative' >
            <Image 
                src="/v_3_images/impact-2.png"
              fill
              alt="join us at slumtech"
            />
        </div>
        <div className='w-[50%] max-small:w-full' >
          <div className='max-w-[49.2rem] max-small:max-w-full mx-auto'>
          <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[3.5rem] max-small:mb-[0.5rem]'>
                <span>Join</span>
                <span className='text-[#FDB21A]'> Us</span>
                </h2>
            <p>
            Together, we can transform visions into realities. 
            Whether you’re looking to volunteer, contribute, or partner with us, 
            your involvement can make a significant difference. 
            Join the SlumTech Foundation in our journey to empower 
            communities and create lasting change through technology.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>

     <section className='py-[10rem] max-small:py-[5rem]'>
        <div className='container'>
        <div className='text-center'>
        <MainHeader text="News" />
        <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
        <span className='text-[#FDB21A]'>Our </span>
        <span>Latest News</span>
        </h2>
        </div>

       <div className='w-[90rem] max-small:w-full mx-auto mt-[5rem] max-small:mt-[2rem]'>
       <div className='w-full h-[50rem] max-small:h-[20rem] relative' >
            <Image 
                src="/v_3_images/news.png"
              fill
              alt="latest news"
            />
        </div>
        <h1 className="font-[500] text-[2.5rem] max-small:text-[1.8rem] leading-[2.5rem] my-[2.5rem] max-small:my-[1rem]">A Vision for Change: Proposed SlumTech Institute Aims to Provide Free
        Technology Education for Africa's Slum Communities</h1>

        <div>
       <p>In an exciting development for urban communities throughout Africa, the proposal for the SlumTech Institute is set to launch a transformative journey towards free technology education for residents of slum areas. This initiative 
       seeks to empower marginalized youth, equipping them with essential skills to thrive in today’s technology-driven world.
       </p>
        <p>The     proposed SlumTech Institute aims to establish a state-of-the-art facility in Africa, serving as a beacon of hope 
        for young people eager to learn and grow. Designed to provide 100% free access to a comprehensive curriculum, the institute
        will focus on crucial domains such as coding, software development, digital literacy, and entrepreneurship. 
        As technology continues to permeate all aspects of life, the institute's vision is to ensure that every young person
        in these communities has the opportunity to participate in the digital economy.
        </p>
        <p>“Creating the SlumTech Institute is about more than just education; it’s about creating pathways to success 
        for those who need it most,” Olanrewaju Daniel Ogunleye, the mind behind the SlumTech proposal. 
        “We are committed to breaking down barriers and ensuring that every individual, regardless of their socioeconomic background, 
        has the chance to learn, innovate, and compete in the technology sector.”
        </p>
        <p className='mt-[2.5rem] max-small:mt-[1rem]'>The proposal comes in response to the clear need for accessible educational resources in slum regions, 
        where opportunities to acquire technical skills are often limited. The SlumTech Institute plans to implement 
        a hands-on approach to learning, emphasizing practical experience through project-based work and collaborations
        with local tech businesses.
        </p>
        <p>
        To support the proposal, a community outreach program is set to launch, gathering input from local residents, 
        community leaders, and potential students. This inclusive approach aims to ensure the curriculum is relevant 
        and tailored to the specific needs of the community, promoting a sense of ownership and investment in the institute’s success.
        </p>
       </div>

       <div className='mt-[2.5rem] max-small:mt-[2rem] flex flex-col gap-y-[1.5rem]'>
            <h1 className='text-[2.5rem] max-small:text-[1.8rem] leading-[2.5rem]'>Key features of the proposed SlumTech Institute include :</h1>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span >Free Enrollment: No tuition fees for students, ensuring equal access for all.</span>
            </div>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Expert Instructors: A team of experienced educators and industry professionals dedicated to providing
            high-quality instruction.</span>
            </div>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Community Projects: Opportunities for students to work on real-world projects that address local challenges.</span>
            </div>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Mentorship Programs: Connections with mentors in the tech industry to guide and support students in their
            career paths.</span>
            </div>
       </div>

       <div className='mt-[2.5rem] max-small:mt-[2rem] flex flex-col gap-y-[2.5rem] max-small:gap-y-[1.5rem]'>
       <p>The launch event to present the proposal will be held at a set date that will be announced, 
        where community members can learn more about the vision for SlumTech Institute and how they 
        can get involved. Attendees will hear testimonials from successful individuals who overcame 
        challenges through education and technology, showcasing the potential impact of such an initiative.
        </p>
        <p>Support from local governments, nonprofits, and tech companies will be crucial in bringing the 
          SlumTech Institute to fruition. The proposal reflects a growing recognition of the importance of 
          technology education in driving economic empowerment and social change in underserved communities.
        </p>
        <p>For additional details about the proposed SlumTech Institute and how to contribute to its development, 
          visit www.SlumTech.org
          </p>
       </div>
       </div>
        </div>
    </section>

    <section className='py-[10rem] max-small:py-[5rem] bg-[#fafafa]'>
        <div className='container'>
        <div className=''>
        <MainHeader text="Upcoming Events" />
        <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[3.5rem] max-small:mb-[0.5rem]'>
        <span className='text-[#FDB21A]'>Upcoming Event: </span>
        <span> Tech for Good Summit</span>
        </h2>
        </div>

        <div className='mt-[5rem]  max-small:mt-[2rem] flex flex-row  max-small:flex-col gap-x-[5rem]  max-small:gap-y-[1rem] items-start'>
        <div className='w-[56.1rem] max-small:w-full h-[57.8rem]  max-small:h-[30rem] relative' >
            <Image 
              src="/v_3_images/upcoming-event.png"
              fill
              alt="slumtech upcoming events"
            />
           </div>
        <div className='flex flex-col gap-y-[2rem] w-[49.2rem]  max-small:w-full'>
          <p>
          SlumTech Foundation will host the "Tech for Good Summit" in Houston Texas on 4th of November, 2025. 
          This event will bring together community leaders, tech innovators, 
          and industry experts across the globe to discuss best practices, 
          share success stories, and explore collaborative opportunities.
          </p>
          <div className='flex flex-col gap-y-[1.5rem]'>
            <h1 className='text-[2.5rem]  max-small:text-[1.8rem] leading-[2.5rem]'>Key features of the proposed SlumTech Institute include :</h1>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Panel discussions featuring industry leaders on the latest tech trends in community development.</span>
            </div>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Workshops focused on digital literacy and sustainable technology solutions.</span>
            </div>
            <div className='flex flex-row gap-x-[1rem]'>
            <div className='w-[2.4rem] h-[2.4rem] relative' >
            <Image 
                src="/v_3_icons/check.png"
              fill
              alt="latest news"
            />
           </div>
            <span>Networking opportunities to connect with like-minded individuals and organizations.</span>
            </div>
       </div>
        <div className='flex flex-col gap-y-[2rem] max-small:gap-y-[1.5rem]'>
        <p>Join us as we explore how technology can empower communities and drive sustainable change!</p>
        <p>SlumTech Foundation – Together Towards a Brighter Future</p>
        <div className='w-[16rem] h-[5.8rem]'>
          <Button text="Join Today" />
        </div>
        </div>
        </div>
       
        </div>
        </div>
      </section>
     <JoinUs />
     <Footer />
    </main>
  )
}