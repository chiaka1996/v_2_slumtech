import { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head'
import {Navigation, Sidebar, Footer,} from "../../components";


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
    <Footer />
    </main>
    )
}

export default ContactUs;