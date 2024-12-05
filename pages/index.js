import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, Banner, Button, MainHeader, Card, JoinUs, ApproachCard, Footer} from "../components"


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const ourApproach = [{
    img: "/v_3_icons/approach1.png",
    title: "Community-Centric",
    note: "We believe that effective solutions must be rooted in the communities they serve. Our programs are developed in collaboration with local leaders and organizations to ensure they address specific needs and challenges."
  },
  {
  img: "/v_3_icons/approach2.png",
    title: "Cloud-Based Tech",
    note: "We focus on creating lasting change by equipping individuals with skills and knowledge that promote self-sufficiency and resilience."
  },
  {
    img: "/v_3_icons/approach3.png",
      title: "Sustainability",
      note: "We focus on creating lasting change by equipping individuals with skills and knowledge that promote self-sufficiency and resilience."
    },
    {
      img: "/v_3_icons/approach4.png",
        title: "Innovation-Driven",
        note: "By leveraging the latest technologies, we aim to bridge the digital divide and pave the way for improved educational and economic opportunities."
      },
  ]
  const ourServiceArray = [{
    img: "/v_3_images/service1.png",
    title: "CommunityCentric Technology Development",
    list: [
      "Tailored tech solutions designed collaboratively with community members.",
       "Development of mobile apps and digital platforms that address specific local challenges, such as health, education, and economic opportunities."
    ]
  },
  {
    img: "/v_3_images/service2.png",
    title: "Digital Literacy Training",
    list: [
      "Workshops and training sessions focused on building digital skills among community members.",
      "Programs that educate individuals on using technology to access resources, gain employment, and improve their quality of life."]

  },
  {
    img: "/v_3_images/service3.png",
    title: "Social Impact Consulting",
    list: [
      "Consultancy services for organizations looking to implement technology-driven solutions in underserved communities.",
      "Strategies that align technological advancements with community needs for sustainable development." ]
  },
  {
    img: "/v_3_images/service4.png",
    title: "Resource Access and Distribution",
    list: [
      "Facilitation of access to essential services, information, and resources through our integrated platforms.",
      "Partnerships with local organizations to ensure the distribution of resources is efficient and impactful."]

  },
  {
    img: "/v_3_images/service5.png",
    title: "Sustainable Project Implementation",
    list: [
      "Execution of projects that promote environmental sustainability alongside technological advancement.",
      "Initiatives that incorporate renewable energy and eco-friendly practices in community development." ]

  },
  {
    img: "/v_3_images/service6.png",
    title: "Networking and Collaboration Opportunities",
    list: [
      "Creation of a network for individuals, organizations, and businesses to collaborate on tech solutions for social issues.",
      "Facilitation of partnerships to leverage resources and strengths for greater impact within communities." ]
  },
  {
    img: "/v_3_images/service7.png",
    title: "Monitoring and Evaluation",
    list: [
      "Comprehensive assessment and evaluation services to measure the impact of technology on community wellbeing.",
      "Feedback loop implementation to ensure ongoing improvement and responsiveness to community needs."
       ]

  },
  {
    img: "/v_3_images/service8.png",
    title: "Your Dream Realized",
    list: [
      "At SlumTech Foundation, we are dedicated to turning your dreams into reality through our expertise. Whether you're a community leader, a local organization, or an aspiring tech innovator, we are here to support you. Together, we can drive meaningful change and build resilient communities."   
    ]

  }
]
  return (
   <main className="text-[1.6rem] max-small:text-[1.3rem] font-[400] text-[#000] leading-[2.6rem] max-small:leading-[2rem]">
    <Navigation />
    <Sidebar /> 
    <Banner 
      img="/v_3_images/banner-image.png"
      header1="Welcome to"
      header2="SlumTech Foundation"
      header2Color="#FDB21A"
      header1Color="#fff"
      subheader="Empowering Communities Through Technology!"
    />

    {/* about slumtech */}
    <section className='container py-[10rem] max-small:py-[5rem]'>
      <MainHeader text="About SlumTech Foundation" />
      <h2 className='font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[3rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
      <span className='text-[#FDB21A]'>Empowering Underserved Communities </span>
      <span>Through Technology and Innovation</span>
      </h2>

      <div className='flex flex-row max-small:flex-col max-small:gap-y-[1.5rem] items-center gap-x-[5rem] mt-[5rem] max-small:mt-[2rem]'>
        <div className='relative w-[56.1rem] max-small:w-full h-[40rem] max-small:h-[25rem]'>
        <Image 
            src="/v_3_images/about_image.png"
           fill
          alt="about slumtech foundation description"
        />
        </div>
        <div className='w-[50rem] max-small:w-full flex flex-col gap-y-[2rem] max-small:gap-y-[1rem]'>
        <p>Founded on the belief that every individual deserves the opportunity to thrive, 
          SlumTech Foundation is a global nonprofit organization dedicated to transforming the lives of underserved 
          communities both in the United States and around the world. 
        </p>
        <p>Our mission is to harness the power of technology and innovation to 
        create sustainable solutions that address the unique challenges faced by marginalized populations.
        </p>

        <div className="w-[16rem] h-[5.8rem] mt-[1.5rem]">
            <Button text="Learn More" />
        </div>
        </div>
      </div>
    </section>

    {/* our service */}
    <section className='bg-[#fafafa]'>
      <div className='container py-[10rem] max-small:py-[5rem]'>
      <MainHeader text="Our Services" classnames="text-center"/>
      <h2 className='font-[500] text-center text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
      <span className='text-[#FDB21A]'>Our Expertise,</span><span>Your Dream</span>
      </h2>
      <h3 className='max-w-[58.6rem] mx-auto max-small:max-w-full text-center mt-[2rem] max-small:mt-0'>
      We offer a range of innovative services designed to empower
      communities and create sustainable solutions through technology. Here’s how we can help:
      </h3>

      <div className='mt-[5rem] serviceCard'>
        {
          ourServiceArray.map((service, index) =>  <Card key={index} img={service.img} title={service.title} list={service.list} />)
        }
      </div>

      <div className='mt-[5rem] text-center'>
        <h1 className='text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem]'>Let’s Connect!</h1>
        <p className='py-[2rem] max-small:py-[1rem] max-w-[58.6rem] max-small:max-w-full mx-auto'>
        Explore our services, partner with us, or find out how you can get involved. 
        Your dream for a better tomorrow is within reach, and with SlumTech Foundation by your side, we can make it happen!
        </p>
        <div className="w-[18.2rem] h-[5.8rem] mx-auto">
            <Button text="Connect Now" />
        </div>
        
        </div>
      </div>
    </section>  

    {/* our Approach */}
    <section className=''>
      <div className='container py-[10rem] max-small:py-[5rem]'>  
      <MainHeader text="Our Approach" classnames="text-center"/>
      <h2 className='font-[500] text-center text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[3.5rem] max-small:mb-[0.5rem]'>
      <span className='text-[#FDB21A]'>Inovation</span><span> in Action</span>
      </h2>

      <div className='mt-[5rem] max-small:mt-[3rem] approachCard'>
      {
          ourApproach.map((approach, index) =>  <ApproachCard key={index} img={approach.img} title={approach.title} note={approach.note} />)
        }

      </div>
        </div>
    </section>

    <JoinUs />
    <Footer />
    </main>
  );
}
