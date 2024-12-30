const MainHeader = ({text, classnames}) => {

    return(
        <h1 className={`text-[4.8rem] text-[#212121] font-[700] max-small:text-[1.8rem] leading-[6.2rem] max-small:leading-[1.8rem] mb-[2rem] max-small:mb-[0.5rem] ${classnames}`}>{text}</h1>
    )
}

export default MainHeader;