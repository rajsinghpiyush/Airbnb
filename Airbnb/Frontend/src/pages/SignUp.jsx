import React, {useContext, useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios'

function SignUp() {
    let [show, setShow] = useState(false);
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    const handleSignUP = async(e) => {
        try{
            e.preventDefault()
            const result = await axios.post(serverUrl + "/api/auth/signup",{
                name,
                email,
                password
            },{withCredentials: true})
            console.log(result)
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
            <div className='w-[50px] h-[50px] bg-[red] rounded-[50%] flex items-center justify-center top-[10%] left-[5%] absolute cursor-pointer' onClick={() => { navigate("/") }}>
                <FaArrowLeft className='text-[white] text-[30px]' />
            </div>
            <form action="" className='max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]' onSubmit={handleSignUP}>
                <h1 className='text-[30px] text-[black]'>Welcome to airbnb</h1>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
                    <label htmlFor="name" className='text-[20px]'>UserName</label>
                    <input type="text" id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div className='w-[90%] flex items-start justify-start flex-col gap-[10px]'>
                    <label htmlFor="email" className='text-[20px]'>Email</label>
                    <input type="text" id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div className='w-[90%] flex item-start justify-start flex-col gap-[10px] relative'>
                    <label htmlFor="password" className='text-[20px]'>Password</label>
                    <input type={show ? "text" : "password"} id="name" className='w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {!show && <FaEye className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={() => setShow(prev => !prev)} />}
                    {show && <FaEyeSlash className='w-[22px] h-[22px] absolute right-[12%] bottom-[10px]' onClick={() => setShow(prev => !prev)} />}
                </div>
                <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg cursor-pointer mt-[20px]'>Submit</button>
                <p className='text-[18px]'>Already have a account?  <span className='text-[19px] text-[red] cursor-pointer' onClick={() => navigate("/login")}>Login</span></p>
            </form>

        </div>
    )
}

export default SignUp