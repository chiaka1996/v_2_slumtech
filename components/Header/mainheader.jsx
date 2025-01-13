const MainHeader = ({text, classnames}) => {

    return(
        <h1 className={`mainHeader text-[4.8rem] text-[#212121] font-[700] max-small:text-[3rem] leading-[6.2rem] max-small:leading-[3.2rem] max-small:mb-[0] ${classnames}`}>{text}</h1>
    )
}

export default MainHeader;