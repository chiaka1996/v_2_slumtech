import {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [data, setData] = useState({
        email: "",
        name: ""
    })

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    const toggleCheckbox = () => {
        setErrMsg('')
        setChecked((prev) => !prev)
    }

    const onChangeInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setData({
            ...data,
            [name] : value
        })
    }

    const submitBtn = async (e) => {
        try{
            e.preventDefault()
            setLoading(true)
            const {email, name} = data;

        if(!checked){
            setLoading(false)
            return setErrMsg('please approve notifications')
            }
      
        if(!email || !name) {
            setLoading(false)
            return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
        }
      
        if(name.length < 2){
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
      
        const httpRequest = await fetch('../api/newsletter',{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
      
        const response = await httpRequest.json();
      
        if(response.status){
            setLoading(false)
            toast.success(`${response.message}`, {
              position: "top-right",
              theme: "colored",
              });
      
            setData({
                name: "",
                email: ""
            })
            setErrMsg('')
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

    return(
       <section className='bg-[#F5F5F5] w-[80%] max-large:w-[90%] mx-auto py-5 mt-[3em] max-large:mt-[2em] text-primary text-center'>
        <ToastContainer />
        <div className='text-[2em] font-h2'>Stay Updated</div>
        <div className='font-normal text-secondary'>Stay up to date on our, events, programs and more.</div>
        <form className='w-[35%] mx-auto max-large:w-[90%]'>
            <div className='my-[1em]'>
                <input 
                type="email" 
                placeholder='Email' 
                name='email'
                value={data.email}
                onChange={onChangeInput}
                className='outline-none rounded-[12px] px-5 border hover:border-2 border-btn_bg w-full h-[45px] hover:scale-[1.1]'
                 />
            </div>

            <div className='my-[1em]'>
                <input 
                type="text" 
                name='name'
                value={data.name}
                onChange={onChangeInput}
                placeholder='Your first name' 
                className='outline-none rounded-[12px] px-5 border hover:border-2 border-btn_bg w-full h-[45px] hover:scale-[1.1]' 
                />
            </div>
            
            <div className='w-full flex justify-between'>
                {/* <div> */}
                <label className='w-[20px]'>
                <input 
                type="checkbox"    
                onChange={toggleCheckbox} 
                className='hidden'
                 />
                 <div className={`border border-btn_bg rounded-full h-[15px] w-[15px] ${checked ? "bg-btn_bg" : "bg-index"}`}></div>
                 </label>
                {/* </div> */}
                <div className='font-normal w-[100%] text-[1em] ml-[0.5em] text-left'>
                I agree to receive notifications, 
                updates, publications, alerts and newsletters from the SlumTech Foundation.
                </div>
            </div>
            <div className='text-btn_bg text-[13px] font-[400] mb-[1em]'>{errMsg}</div>
            <button
            disabled={loading}
            onClick={submitBtn}
            className='outline-none bg-btn_bg text-[1em] font-h2 w-full h-[50px] rounded-[12px] text-btn_color'
            >
            {loading ? "Subscribing..." : "Subscribe"}
            </button>
        </form>
       </section>
    )}

    export default Newsletter;