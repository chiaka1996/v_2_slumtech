import gsap from 'gsap'; 
import { useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from "next/image";
import Link from "next/link";
import {Navigation, Sidebar, Banner, Button, MainHeader, Card, ApproachCard, Footer} from "../components"


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
   <main className="text-[1.6rem] font-[400] text-[#000]">
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
    <section className='container py-[10rem]'>
      <MainHeader text="About SlumTech Foundation" />
      <h2 className='font-[500] text-[4.5rem] leading-[4.5rem]'>
      <span className='text-[#FDB21A]'>Empowering Underserved Communities</span><br/>
      <span>Through Technology and Innovation</span>
      </h2>

      <div className='flex flex-row items-center gap-x-[5rem] mt-[5rem]'>
        <div className='relative w-[56.1rem] h-[40rem]'>
        <Image 
            src="/v_3_images/about_image.png"
           fill
          alt="about slumtech foundation description"
        />
        </div>
        <div className='w-[50rem] leading-[2.6rem] flex flex-col gap-y-[2rem]'>
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
      <div className='container py-[10rem]'>
      <MainHeader text="Our Services" classnames="text-center"/>
      <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] text-center'>
      <span className='text-[#FDB21A]'>Our Expertise,</span><span>Your Dream</span>
      </h2>
      <h3 className='leading-[2.6rem] text-center mt-[2rem]'>
      <span>We offer a range of innovative services designed to empower </span><br/>
      <span>communities and create sustainable solutions through technology.</span><br/>
      <span>Here’s how we can help:</span>
      </h3>

      <div className='mt-[5rem] serviceCard'>
        {
          ourServiceArray.map((service, index) =>  <Card key={index} img={service.img} title={service.title} list={service.list} />)
        }
      </div>

      <div className='mt-[5rem] text-center'>
        <h1 className='text-[4.5rem] leading-[4.5rem]'>Let’s Connect!</h1>
        <p className='py-[2rem] max-w-[58.6rem] mx-auto'>
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
      <div className='container py-[10rem]'>  
      <MainHeader text="Our Approach" classnames="text-center"/>
      <h2 className='font-[500] text-[4.5rem] leading-[4.5rem] text-center'>
      <span className='text-[#FDB21A]'>Inovation</span><span> in Action</span>
      </h2>

      <div className='mt-[5rem] approachCard'>
      {
          ourApproach.map((approach, index) =>  <ApproachCard key={index} img={approach.img} title={approach.title} note={approach.note} />)
        }

      </div>
        </div>
    </section>

    {/* join us */}
    <section className="bg-[url('/v_3_images/join-us.png')] bg-cover bg-center h-[54.2rem] w-full text-[#fff]">
        <div className='container relative'>
        <div className='max-w-[48.5rem] absolute right-0 top-[7.7rem] flex flex-col gap-y-[2rem]'>
          <h1 className='text-[2.5rem] leading-[2.5rem]'>Join Us</h1>
          <h2 className='font-[500] text-[4rem] leading-[4.5rem]'>
          <span>Get involved and</span><span className='text-[#FDB21A]'> make a difference today!</span>
          </h2>

          <p>
          At SlumTech Foundation, we invite you to be a part of our mission. Together, 
          we can create a world where every individual has the opportunity to succeed. 
          Through your support, whether by volunteering, 
          donating, or spreading the word, you can help us empower communities and build a brighter future for all.
          </p>

          <div className="w-[16rem] h-[5.8rem]">
            <Button text="Join Today" />
            </div>
        </div>
        </div>
    </section>
    <Footer />
    </main>
  );
}
