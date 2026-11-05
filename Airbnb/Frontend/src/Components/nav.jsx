import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistant } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authDataContext } from '@/Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '@/Context/userContext';

function Nav(){
    let [show,setShow] = useState(false)
    let {userData, setUserData} = useContext(userDataContext)
    let navigate = useNavigate()
    let {serverUrl} = useContext(authDataContext)

    const handleLogOut = async () => {
        try{
            let result = await axios.post(serverUrl + "/api/auth/logout", {}, {withCredentials:true})
            console.log(result)
            setUserData(null)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='w-full min-h-[80px] bg-[#fbfafa] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between '>
                <div>
                    <img src={logo} alt="" className='w-[130px] ' />
                </div>
                <div className='w-[25%] flex flex-row relative md:block hidden'>
                    <input type="text" className='w-[100%] rounded-full h-[7vh] pl-[20px] border-[#cccbcb] border-[2px] p-[20px]' placeholder='Any Where| Any City| Any Time' />
                    <button className="h-[35px] w-[35px] absolute top-[8px] bg-red-500 flex items-center justify-center rounded-full left-[85%] text-white"><FaSearch /></button>
                </div>
                <div className="flex flex-row gap-[25px] mr-5 relative">
                    <span className="mt-2 md:block hidden">List your Home</span>
                    <button className="flex flex-row border-[#676464] border-[2px] rounded-lg gap-[7px] p-[5px] hover: shadow-lg" onClick={()=>setShow(prev=>(!prev))}>
                    <GiHamburgerMenu className='h-[30px] w-[20px]' />
                    {userData == null && <span><CgProfile className='h-[30px] w-[20px]' /></span>}
                    {userData != null && <span className='w-[22px] h-[22px] flex rounded-full justify-center items-center bg-[#080808] text-white mt-1'>{userData?.name.slice(0,1)}</span>}
                    </button>
                    {show && <div className='w-[220px] h-[250px] absolute bg-[#fbfafa] top-[110%] right-[5%] md:right-[10%] border-[2px] border-[#c6c2c2]  z-10 rounded-lg'>
                        <ul className='w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]'>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]' onClick={()=>navigate("/login")}>Login</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]' onClick={handleLogOut}>Logout</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>List your Home</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>My Listing</li>
                            <li className='w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3]'>Check Booking</li>
                        </ul>
                    </div>}
                </div>
            </div>
                <div className='w-full h-[60px] flex item-center justify-center md:hidden block py-2 mb-2'>
                <div className='w-[65%] flex flex-row relative'>
                    <input type="text" className='w-[100%] rounded-full h-[7vh] pl-[20px] border-[#cccbcb] border-[2px] p-[20px]' placeholder='Any Where| Any City| Any Time' />
                    <button className="h-[35px] w-[35px] absolute top-[8px] bg-red-500 flex items-center justify-center rounded-full left-[85%] text-white"><FaSearch /></button>
                </div>
                </div>
            <div className='w-full h-[85px] bg-white flex items-center justify-start md:justify-center cursor-pointer gap-[20px] overflow-auto'>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <MdWhatshot className='w-[30px] h-[30px] text-black' />
                    <h3>Trending</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <GiFamilyHouse className='w-[30px] h-[30px] text-black'/>
                    <h3>Villa</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <MdBedroomParent className='w-[30px] h-[30px] text-black' />
                    <h3>Farmhouse</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px text-nowrap'>
                    <MdOutlinePool className='w-[30px] h-[30px] text-black ' />
                    <h3>Pool House</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <GiWoodCabin className='w-[30px] h-[30px] text-black' />
                    <h3>Rooms</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <SiHomeassistant className='w-[30px] h-[30px] text-black' />
                    <h3>Flat</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <IoBedOutline className='w-[30px] h-[30px] text-black' />
                    <h3>PGs</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <FaTreeCity className='w-[30px] h-[30px] text-black' />
                    <h3>Cabins</h3>
                </div>
                <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#c6b9b9] text-13px'>
                    <BiBuildingHouse className='w-[30px] h-[30px] text-black' />
                    <h3>Shops</h3>
                </div>
            </div>
        </div>
    )
}

export default Nav