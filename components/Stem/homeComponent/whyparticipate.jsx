import Image from 'next/image';
import Link from 'next/link';

const WhyParticipate = () => {
 
    return(
      <section
      className="w-full font-[400] leading-[3rem] text-[#000] relative"
     >
        <div className='container py-[12rem] text-center'>
            <h1 className='text-[#004658] text-[54px] font-[700] leading-[64px]'>Why Participate</h1>
            <h3 className='max-w-[878px] text-[1.8rem] mx-auto'>
            The SlumTech STEM Competition is an annual event dedicated to inspiring and 
            empowering young minds from underserved communities across the United States.
            </h3>

            <div className='gridStyle gap-x-[3rem] mt-[5rem]'>
                <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate1.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate1.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] text-[#004658]'>Unlock Potential</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Showcase your skills, demonstrate your creativity, and turn your innovative ideas into real-world solutions.
                </div>
                </div>

                <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate2.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate2.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] text-[#004658]'>Prizes and Scholarships</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Win scholarships, cash prizes, and mentorship opportunities that can help you take your education and career to the next level.
                </div>
                </div>

                <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate3.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate3.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] text-[#004658]'>Networking</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Connect with professionals and peers who share your passion for STEM and innovation, opening doors for future opportunities.
                </div>
                </div>

                <div className='rounded-[25px] flex flex-col gap-y-[2rem] border border-[#EFEFEF]'>
                <div className="relative h-[20rem] w-full rounded-[25px]">
                <Image 
                src="/v_3_images/participate4.png"
                fill
                alt="participate in slumtech competition"
                />
                </div> 
                <div className='flex gap-x-[2rem] items-center mx-[2.5rem]'>
                <Image 
                src="/v_3_icons/participate4.png"
                width={34}
                height={36}
                alt="participate in slumtech competition"
                />
                <h3 className='font-[700] text-[2rem] text-[#004658]'>Make a Difference</h3>
                </div>
                <div className='text-left mx-[2.5rem] leading-[24px] text-[1.6rem] py-[15px] border border-[#DADADA] border-t-1 border-x-0 border-b-0'>
                Tackle real-world social challenges and use your skills to make a positive impact on your community.
                </div>
                </div>

            </div>
        </div>
      </section>
    )
}

export default WhyParticipate;