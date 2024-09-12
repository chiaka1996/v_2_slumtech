import { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'
import {Navigation, Sidebar, Headers, Footer, InputComponent, TextAreaComponent, ButtonComponent, SubmitModal} from "../../components";


const ContactUs = () => {
  const [toggleModal, setToggleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] =  useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: ""
  })
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

  const toggleState = () => {
    setToggleModal(false)
  }

  const onChangeInput = (e) => {
  const value = e.target.value;
  const name = e.target.name;

  setData({
      ...data, 
      [name] : value
  })
}

const submitBtn = async (e) => {
  try{
      e.preventDefault()
      setLoading(true)
  const {firstname, lastname, phone, email, message} = data;

  if(!firstname || !lastname || !phone || !email || !message) {
      setLoading(false)
      return  toast.error("please fill all required fields.", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(firstname.length < 2 || lastname.length < 2){
      setLoading(false)
      return  toast.error("name should be a minimum of 2 characters", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(!emailRegex.test(email)){
      setLoading(false)
      return  toast.error("invalid email", {
          position: "top-right",
          theme: "colored",
          });
  }

  const httpRequest = await fetch('../api/contact',{
      method: "POST",
      body: JSON.stringify(data),
      headers:{
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  const response = await httpRequest.json();

  if(response.status){
      setLoading(false)
      setToggleModal(true)
      toast.success(`${response.message}`, {
        position: "top-right",
        theme: "colored",
        });

      setData({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
         message: ""
      })
  }
  else{
      setLoading(false)
      toast.error(`${response.message}`, {
          position: "top-right",
          theme: "colored",
          });
  }
  }
  catch(error){
  setLoading(false)
  return toast.error(`${error.message}`, {
      position: "top-right",
      theme: "colored",
      });
}
}

    return (
        <main className="text-primary font-primary">
          <Head>
          <title>Slumtech Contact page </title>
          <meta
            name="description"
            content="contact@slumtechfoundation.com, +1888-355-2015"
            key="desc"
          />
          <meta name="keywords" content="nonprofit, foundation, slum, technology, africa, contact" />
        </Head>
        <Navigation />
        <Sidebar /> 
        <ToastContainer />
        {/* <SubmitModal 
        toggle={toggleModal} 
        toggleState={toggleState}
        /> */}
         <div  className="relative w-full min-h-[30rem] max-large:min-h-[15rem] mt-[10em] max-large:mt-[7rem]">
        <Image 
        src="/images/contactbanner.png"
        fill
        alt="banner"
        />   
         <div className="text-card1 text-h1 font-h2 relative z-[10] min-h-[30rem]  max-large:min-h-[15rem] flex flex-row justify-center items-center">
            CONTACT US
        </div> 
        </div>

        <section className="w-[60%] max-large:w-[90%] mx-auto my-[3em]">
          <header className="text-[48px] max-large:text-mHeader font-h4 pl-[3rem] max-large:pl-0">Send us a Mail</header>

        <form className="w-full rounded-[16px] bg-[#FD213E] px-[3em] max-large:px-[1em] py-[2em] max-large:py-[1em] mt-[1.5em]">
        {/* grid 1 */}
        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="First Name"
            name="firstname"
            value={data.firstname}
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={data.lastname}
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>

        <div className="grid grid-cols-2 gap-5 mt-[1.5em]">
        <input 
            type="text"
            placeholder="Email Address"
            name="email"
            value={data.email}
            className=" rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />

        <input 
            type="text"
            placeholder="Phone no"
            name="phone"
            value={data.phone}
            className="rounded-[0.5rem] pl-[1.2em] outline-none border border-index
            w-[100%] h-[3rem] text-primary font-normal text-[18px] placeholder-primary"
            onChange={onChangeInput}
            />
        </div>

        <div className="my-[1.5em]">
         <textarea
            placeholder="Message" 
            name="message"
            value={data.message}
            onChange={onChangeInput}
            className="rounded-[0.5rem] px-[1.2em] py-[0.5em] outline-none 
            border border-btn_bg w-[100%] h-[7.5rem] text-primary font-normal 
            text-[18px] xlarge:text-normal placeholder-primary"
            >
            </textarea>
        </div>
        <button 
        className="font-h2 p-[1em] text-btn_bg bg-h1 rounded-[12px] text-[1em] bg-card1"
        onClick={submitBtn}
        disabled={loading}
        >
        {loading ? "sending..." : "Send"}
        </button>
    </form>

    <div className="flex justify-left items-center mt-[3rem] max-large:mt-[2rem] pl-[3rem] max-large:pl-0">
    <div className="relative w-[24px] h-[24px] max-large:h-[24px] mr-[0.7em] mt-[0.5em]">
    <Image 
    src="https://img.icons8.com/material-outlined/24/open-envelope.png"
    fill
    alt="mail"
    /> 
    </div>
    <span className="text-btn_bg text-h2 font-normal underline">career@slumtech.org</span>
    </div>

    <div className="flex justify-left items-center mt-[1rem] pl-[3rem] max-large:pl-0">
    <div className="relative w-[24px] h-[24px] max-large:h-[24px] mr-[0.7em] mt-[0.5rem]">
    <Image 
    src="https://img.icons8.com/material-outlined/24/open-envelope.png"
    fill
    alt="mail"
    /> 
    </div>
    <span className="text-btn_bg text-h2 font-normal underline">media@slumtech.org</span>
    </div>

    <div className="flex justify-left items-center mt-[1rem] pl-[3rem] max-large:pl-0">
    <div className="relative w-[24px] max-large:w-[36px] h-[24px] max-large:h-[36px] mr-[0.7em] mt-[0.2rem]">
    <Image 
    src="https://img.icons8.com/ios/24/address--v1.png" 
    fill
    alt="mail"
    /> 
    </div>
    <span className="text-h2 font-normal underline">
    801 Travis Street Suite 2101 Houston, Texas 77002
    United States
    </span>
    </div>

    </section>
    <Footer />
    </main>
    )
}

export default ContactUs;