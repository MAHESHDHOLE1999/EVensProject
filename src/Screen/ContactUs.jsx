import React, { useEffect } from "react";
import bgImg from "../assets/AboutAndServiceBgImg.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Form from "../Components/Form";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!localStorage.getItem('authToken')){
  //     navigate('/login');
  //   }
  // },[navigate])

  // if(!localStorage.getItem('authToken')){
  //   return null;;
  // }

  return (
    <div>
      <div
        className="w-full h-60 flex justify-center items-center lg:w-full lg:h-[722px] bg-cover bg-center md:justify-center md:items-center lg:text-5xl font-bold text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h1>Contact Us</h1>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.901751520649!2d73.81120507496213!3d18.488108982599126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdc67066bb3%3A0x3cca47704c1d5383!2sJijamata%20Mahila%20Sahakari%20Bank%20Limited!5e0!3m2!1sen!2sin!4v1718809446471!5m2!1sen!2sin"
          loading="lazy"
          className="w-full h-44 md:w-full md:h-60 lg:w-full lg:h-[297px] lg:pt-5"
        ></iframe>
      </div>
      <div className="py-7 flex justify-center items-center flex-col space-y-6 md:space-y-0 md:py-14 md:justify-center md:items-center md:flex-row lg:justify-center lg:items-center lg:gap-52 lg:h-40">
        <div className=" w-96 h-auto flex  items-center gap-4 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-5">
          <FaLocationDot className="size-6 p-1 w-9 md:size-7 md:p-1 lg:size-9 md:w-10 lg:w-12 lg:p-2 text-white rounded-full bg-bgColor" />
          <div>
            <p className="md:text-sm lg:text-sm font-bold">Address</p>
            <p className="md:text-xs lg:text-sm font-normal text-wrap">3rd Floor,above Jijimata Mahila Sahakari Bank, Karve Nagar,Pune,Maharashtra 411052</p>
          </div>
        </div>
        <div className="w-60 flex  items-center gap-4 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-3">
          <MdMail className="size-6 p-1 md:size-7 md:p-1 lg:size-9 lg:p-2 text-white rounded-full bg-bgColor" />
          <div>
            <p className="md:text-sm lg:text-sm font-bold">Email id</p>
            <p className="md:text-xs lg:text-sm font-normal">info@evens.com</p>
          </div>
        </div>
        <div className="w-60 flex items-center gap-4 md:justify-center md:items-center md:gap-3 lg:justify-center lg:items-center lg:gap-3">
          <IoCallSharp className="size-6 p-1 md:size-7 md:p-1 lg:size-9 lg:p-2 text-white rounded-full bg-bgColor" />
          <div>
            <p className="md:text-sm lg:text-sm font-bold">Phone No.</p>
            <p className="md:text-xs lg:text-sm font-normal">+91 9168520943</p>
          </div>
        </div>
      </div>

      <div>
        <div><Form/></div>
      </div>
    </div>
  );
};

export default ContactUs;
