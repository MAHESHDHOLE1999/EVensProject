import React, { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import EvensLogo from "../assets/EvensLogo.png";
import { IoMenu } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { NavLink , useNavigate } from "react-router-dom";
import Login from "../Screen/Login";
import ContactUs from "../Screen/ContactUs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import DropDown from "./DropDown";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import AccountDropDown from "./AccountDropDown";
import AccountCard from "./AccountCard";
import ProductCart from "./ProductCart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountToggle, setAccountToggle] = useState(false);
  const [cardProfile, setCardProfile] =useState(false);
  const [product, setProduct] = useState(false);
  const navigate = useNavigate();
  let data = useCart();

  useEffect(()=>{
    function handleScroll(){
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);
    return () =>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);
  
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    setCardProfile(false);
    setAccountToggle(false);
    navigate('/login');
  }

  return (
    <>
      <div className="w-full h-4 flex justify-between items-center px-20 md:justify-between md:items-center md:px-10 lg:px-32 lg:justify-between lg:items-center md:w-full md:h-9 lg:w-full lg:h-[38px] bg-bgColor">
        <div className="min text-[6px] md:text-base lg:text-base text-white">
          Open Hours: Mon-Fri 8:00 AM-6:00 PM
        </div>
        <div className="text-white flex gap-3 md:justify-center md:items-center lg:justify-center lg:items-center md:gap-5 lg:gap-6">
          <FaLinkedin className="size-3 md:size-5 lg:size-6" />
          <FaTwitter className="size-3 md:size-5 lg:size-6" />
        </div>
      </div>

      <div className="relative w-full h-[25px]  md:w-full md:h-16 lg:w-full lg:h-[73.87px] bg-[#F1F3A2] flex justify-between items-center gap-5 px-5 md:justify-center md:gap-2 lg:gap-6  md:items-center lg:justify-between lg:items-center md:px-2 lg:px-24 lg:py-2">
        <div>
          <img
            src={EvensLogo}
            alt="Evens Logo"
            className="w-[18px] h-[22.48px] md:size-11 lg:w-[50px] lg:h-[62.43px]"
          />
        </div>

        <div>
          <div className="relative w-full flex justify-between items-center gap-4  md:justify-center md:items-center md:gap-7 lg:justify-center lg:items-center lg:gap-20">
            <div className="flex justify-center items-center gap-2 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-3">
              <FaLocationDot className="size-3 md:size-6 md:p-1 lg:size-9 lg:p-2 text-white rounded-full bg-bgColor" />
              <div>
                <p className="text-[6px] md:text-xs lg:text-sm font-bold">Address</p>
                <p className="text-[6px] font-normal md:text-xs lg:text-sm">Karve Nagar, Pune</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-3">
              <MdMail className="size-3 md:size-6 md:p-1 lg:size-9 lg:p-2 text-white rounded-full bg-bgColor" />
              <div>
                <p className="text-[6px] md:text-xs lg:text-sm font-bold">Email id</p>
                <p className="text-[6px] md:text-xs lg:text-sm font-normal">info@evens.com</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-3">
              <IoCallSharp className="size-3 md:size-6 md:p-1 lg:size-9 lg:p-2 text-white rounded-full bg-bgColor" />
              <div>
                <p className="text-[6px] md:text-xs lg:text-sm font-bold">Phone No.</p>
                <p className="text-[6px] md:text-xs lg:text-sm font-normal">+91 9168520943</p>
              </div>
            </div>

            <div className=" flex justify-center items-center gap-4 md:justify-center md:items-center lg:justify-center lg:items-center md:gap-8 lg:gap-12">
              {/* <h4 className="hidden md:text-base lg:text-xl text-darkGreen font-bold">Login</h4> */}
              
              {(localStorage.getItem("authToken")) ?  
              (<h4 className="hidden md:block md:text-xs lg:text-xl text-darkGreen font-bold"><button className='flex items-center gap-2' onClick={()=>{setAccountToggle(prev=>!prev) 
                setCardProfile(false)}}><FaUser /> My Account</button></h4>)
              : 
              (<h4 className="hidden md:block md:text-base lg:text-xl text-darkGreen font-bold"><NavLink to='/login' className='flex items-center gap-2'><FaUser /> Login </NavLink></h4>) }
              <h4 className="hidden md:block md:text-base lg:text-xl text-darkGreen font-bold"><NavLink to='/AddToCart'  className='flex items-center gap-2'>Cart<FaShoppingCart /><sup>{data.length}</sup> </NavLink></h4>
              <button className="w-12 h-[13px] md:w-28 md:h-8 lg:w-[130px] lg:h-[35px] text-[6px] md:text-xs lg:text-base font-bold text-white border bg-darkGreen rounded-2xl hover:text-darkGreen hover:bg-[#F1F3A2] hover:border-2 hover:border-darkGreen">
              <NavLink to='/ContactUs'>Enquiry Now</NavLink>
              </button>
              {/* <GiHamburgerMenu className={`text-darkGreen cursor-pointer md:hidden  ${toggle ? (<IoCloseSharp className="text-darkGreen cursor-pointer" />) : ('')}`}/> */}
              {toggle ? (
                <IoCloseSharp onClick={()=>setToggle(false)} className="text-darkGreen cursor-pointer md:hidden" />
                ) : (
                <GiHamburgerMenu onClick={()=>setToggle(true)} className="text-darkGreen cursor-pointer md:hidden" />
                )}
            </div>
          </div>
          
        </div>
        <div className="absolute right-0 top-6 md:hidden z-[1001]">
        {toggle ? <DropDown dropdown='menuDropDown'/> : '' }
      </div>
        <div className="absolute right-[26%] top-16 z-[1001]">
        {accountToggle ? <AccountDropDown setAccountToggle={setAccountToggle} setCardProfile={setCardProfile} handleLogout={handleLogout}/> : '' }
      </div>
        <div className="absolute md:right-5 lg:right-7 md:top-16  lg:top-[75px] z-[1001]">
        {cardProfile ? <AccountCard handleLogout={handleLogout}/> : '' }
      </div>

      </div>
      
      

      <div className={`hidden md:fixed  z-[1000] md:w-full md:h-auto lg:w-full md:flex md:justify-center md:items-center  ${scrolled ? 'md:top-0' : 'md:top-36 lg:top-44 lg:justify-center lg:items-center'} `}>
        <div className={` md:w-[600px] md:h-14  lg:h-[76px] bg-bgColor flex md:justify-center md:items-center lg:justify-center lg:items-center transition-all duration-300 ease-in-out ${scrolled ? 'md:w-full lg:w-full rounded-none' : 'lg:w-[994px] rounded-[100px]'}`}>
          <ul className="text-white md:text-lg md:font-bold lg:text-2xl lg:font-bold flex lg:justify-center lg:items-center md:gap-10 lg:gap-10">
            <NavLink to='/' className={(e)=>{return e.isActive ? 'md:text-xl lg:text-3xl text-darkGreen':''}}><li>Home</li></NavLink>
            <NavLink to='/AboutUs' className={(e)=>{return e.isActive ? 'md:text-xl lg:text-3xl text-darkGreen':''}}><li>About</li></NavLink>
            <NavLink to='/Service' className={(e)=>{return e.isActive ? 'md:text-xl lg:text-3xl text-darkGreen':''}}><li>Service</li></NavLink>
            <button onClick={()=>setProduct(pre =>!pre)} className={(e)=>{return e.isActive ? 'md:text-xl lg:text-3xl text-darkGreen':''}}><li>Products</li></button>
            <NavLink to='/ContactUs' className={(e)=>{return e.isActive ? 'md:text-xl lg:text-3xl text-darkGreen':''}}><li>Contact</li></NavLink>
          </ul>
        </div>
        <div className="hidden md:block md:top-12 lg:top-16 md:right-[23%] lg:right-[34%] absolute z-[1001]">{ product ? (<DropDown dropdown='product' setProduc={setProduct}/>):""}</div>
      </div>
    </>
  );
};

export default Navbar;
