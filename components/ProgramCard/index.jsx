import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

const ProgramCards = ({img, title, list}) => {

    return(
        <div className='min-h-[34rem] w-full shadow-none bg-card1 rounded-[21px] px-[2em] pt-[2em] pb-[0.5em] 
                    transition-all ease-in-out delay-250 duration-700 hover:duration-700 
                    hover:transition-all hover:bg-[#ADF802] hover:scale-110'>
            <div  className="relative w-full min-h-[14em]">
            <Image 
            src={img}
            fill
            alt="cardimg"
            /> 
            </div>
            <div className='pl-3'>
            <h1 className='text-[22px] text-[#000] font-h3 my-[1em]'>{title} </h1>

            <ul className='list-disc pl-6 text-[#000]'>
                {
                    list.map((listings, i) => <li key={i}>{listings}</li>)
                }
            </ul>

            </div>
            
        </div>
    )
}
export default ProgramCards;