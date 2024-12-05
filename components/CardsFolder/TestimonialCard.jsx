import Image from "next/image";

const TestimonialCard = ({img, name, occupation, note}) => {
    return(
       <div className="bg-[#fff] px-[2.5rem] pt-[6rem] relative mt-[5rem] h-[35.1rem]">
        <div className='absolute top-[6rem] left-[2.5rem] w-[5.7rem] h-[3.5rem]'>
        <Image 
            src="/v_3_icons/quote.png" 
           fill
          alt="slumtech testimonials"
        />
        </div>
        <div className="relative text-left">
           {note}
        </div>
        <div className="mt-[5rem] flex flex-row items-center gap-x-[1.5rem]">
        <div className="relative w-[8rem] h-[8rem] rounded-full"> 
        <Image 
            src={img} 
           fill
          alt="slumtech testimonials"
        />
        </div>
        <div>
            <span className="block font-[500] text-[2rem] leading-[2.8rem] text-left">{name}</span>
            <span className="block text-[1.3rem] leading-[1.8rem] text-left">{occupation}</span>
        </div>
        </div>
       </div>
    )
}

export default TestimonialCard;