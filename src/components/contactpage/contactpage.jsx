import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import "./../css/warna.css"
export default function contactpage() {
  return (
    <div className='bg-warna-satu-laut mt-5' id='contact' style={{height:"50vh"}}>
        <p className='text-putih fw-semibold fs-4 mb-5'>CONTACT <span className='text-warna-tiga'>INFORMATION</span> </p>
        <p className='text-putih'>Feel free to reach out collaborations or just a friendly hello</p>
        <p className='text-putihs'>akhmadagiyosoo@gmail.com</p>
        <div className="row">
            <div className="col"><FaInstagram color='white' size={30}/></div>
            <div className="col"><FaWhatsapp color='white' size={30}/></div>
            <div className="col"><FaTiktok color='white' size={30}/></div>
            <div className="col"><FaXTwitter color='white' size={30}/></div>
        </div>
    </div>
  )
}
