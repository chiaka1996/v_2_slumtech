import Image from "next/image";

const ApproachCard = ({img, title, note}) => {

    return(
       <div>
        <div className="w-[10rem] h-[10rem] rounded-full bg-approacIconBackgroundColor flex items-center justify-center">
        <div className='relative w-[5rem] h-[5rem]'>
        <Image 
            src={img}
           fill
          alt="slumtech-foundation-approach"
        />
        </div>
        </div>
        <h1 className="text-[2rem] leading-[2.5rem] font-[500] my-[2rem]">{title}</h1>
        <div>
           {note}
        </div>
       </div>
    )
}

export default ApproachCard;