import React from 'react'

import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


import "./../css/warna.css"
export default function contactpage() {
  return (
    <div className='bg-warna-satu-laut mt-5' id='contact' style={{height:"50vh"}}>
        <p className='text-putih fw-semibold fs-4 mb-5'>CONTACT <span className='text-warna-tiga'>INFORMATION</span> </p>
        <p className='text-putih'>Feel free to reach out collaborations or just a friendly hello</p>
        <p className='text-putih'>akhmadagiyosoo@gmail.com</p>
        <div className="row">
            <div className="col"><a href="https://www.instagram.com/akhmadagi_"><FaInstagram color='white' size={30}/></a></div>
            <div className="col"><FaWhatsapp color='white' size={30}/></div>
            <div className="col"><a href="https://github.com/agiyoso/"><FaGithub color='white' size={30}/></a></div>
            <div className="col"><a href="https://www.linkedin.com/in/akhmad-agiyoso-188437291/"><FaLinkedin color='white' size={30}/></a></div>
        </div>
    </div>
  )
}
