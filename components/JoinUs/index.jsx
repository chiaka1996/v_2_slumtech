import Link from "next/link";
import Button from "../Button/btn.jsx";

const JoinUs = () => {
    return(
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
    )
}

export default JoinUs;