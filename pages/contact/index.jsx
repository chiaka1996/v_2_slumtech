import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Navigation, Sidebar, MainHeader, Banner, Footer, Button, JoinUs, Spinner} from "../../components"
import { topToBottomAnimation, bottomToTopAnimation } from "../../utilis/animations";

export default function Contact() {
  useEffect(() => {
    topToBottomAnimation(".contactHeader")
    bottomToTopAnimation(".contactForm")
  },[])

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
})

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

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
      e.preventDefault();
      setLoading(true)
      const {name, email, message, subject, phone} = data;

  if(!name || !email || !message || !phone || !subject) {
      setLoading(false)
      return toast.error("please fill all required fields.", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(name.length < 2){
      setLoading(false)
      return toast.error("name should be a minimum of 2 characters", {
          position: "top-right",
          theme: "colored",
          });
  }

  if(!emailRegex.test(email)){
      setLoading(false)
      return toast.error("invalid email", {
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
      setData({
          name: "",
          email: "",
          message: "",
          phone: "",
          subject: ""
      })
      return toast.success("message sent successfully", {
          position: "top-right",
          theme: "colored",
          });
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
   <main className="text-[1.6rem] max-small:text-[1.3rem] font-[400] text-[#000] leading-[2.6rem] relative">
    <Navigation />
    <Sidebar /> 
    <ToastContainer />
    <Banner 
      img="/v_3_images/contactbanner.png"
      header1="Get in"
      header2="Touch With Us?"
      header1Color="#FDB21A"
      header2Color="#fff"
      subheader="Connect with Our Team"
    />
    <section className='py-[10rem] max-small:py-[5rem]'>
        <div className='container'>
        <div className='text-center'>
        <MainHeader text="Contact Us" />
        <h2 className='contactHeader text-center font-[500] text-[4.5rem] max-small:text-[2rem] leading-[4.5rem] max-small:leading-[2rem] mt-[2rem] max-small:mt-[1rem] mb-[2.5rem] max-small:mb-[1.5rem]'>
        <span className='text-[#FDB21A]'>How Can </span>
        <span>We Help?</span>
        </h2>
        </div>

        <form className='contactForm max-w-[94.2rem] max-small:w-full mx-auto py-[5rem] max-small:py-[3rem] px-[7.5rem] max-small:px-0 flex flex-col gap-y-[2rem]'>
          {/* check global css for css of gridStyle */}
            <div className='gridStyle gap-x-[4rem]'>
                <div className=''>
                  <label className="block">Your name</label>
                  <input type="text" 
                  placeholder="john doe"
                  name="name" value={data.name} onChange={onChangeInput} 
                  className='text-[1.4rem] bg-[#f8f8f8] rounded-[12px] w-full h-[6rem] outline-none p-5' />
                </div>
                <div className=''>
                  <label className="block">Phone</label>
                  <input type="text" 
                  placeholder="213-075-098"
                  name="phone" value={data.phone} onChange={onChangeInput} 
                  className='text-[1.4rem] bg-[#f8f8f8] rounded-[12px] w-full h-[6rem] outline-none p-5' />
                </div>
            </div>

            <div className=''>
              <label className="block">Your email</label>
              <input type="email" 
              placeholder="xyz@gmail.com"
              name="email" value={data.email} onChange={onChangeInput} 
              className='text-[1.4rem] bg-[#f8f8f8] rounded-[12px] w-full h-[6rem] outline-none p-5' />
            </div>

            <div className=''>
              <label className="block">Subject</label>
              <input type="text"
              placeholder="type here.."
              name="subject" value={data.subject} onChange={onChangeInput} 
              className='text-[1.4rem] bg-[#f8f8f8] rounded-[12px] w-full h-[6rem] outline-none p-5' />
            </div>

            <div className=''>
              <label className="block">Your message</label>
              <textarea 
              name="message" value={data.message} onChange={onChangeInput} 
              className='h-[20rem] bg-[#f8f8f8] text-[1.4rem] w-full rounded-[1.2rem] outline-none p-5'></textarea>
            </div>

            <div className='h-[5.8rem] w-[12.5rem] mx-auto'>
              <button 
              disabled={loading}
              onClick={submitBtn}
              className="hover:scale-110 text-[1.6rem] text-[#fff] leading-[1.8rem] bg-[#11CD88] rounded-[5px] w-full h-full">
              {loading ? <Spinner /> : "Submit" }
             </button>
            </div>
        </form>
        </div>
    </section>
     <JoinUs />
     <Footer />
    </main>
  )
}