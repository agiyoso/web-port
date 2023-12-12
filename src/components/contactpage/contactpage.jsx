import React from 'react'

import { FaInstagramSquare } from "react-icons/fa";
import "./../css/warna.css"
export default function contactpage() {
  return (
    <div className='bg-biru-laut' style={{height:"50vh"}}>
        <p className='text-putih'>Contact Information</p>
        <p className='text-putih'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, labore nesciunt minima velit suscipit illum aut ipsum inventore temporibus harum perferendis ullam ad ducimus voluptate quod accusantium consectetur dolor quae!</p>
        <p className='text-merah'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta adipisci et expedita sint asperiores vitae ab, cum tempore saepe eligendi?</p>
        <div className="row">
            <div className="col"><FaInstagramSquare color='white' size={30}/></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
        </div>
    </div>
  )
}
