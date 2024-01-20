import React from 'react'
import Poto from '../image/agipoto.png'
import "./../css/warna.css"

export default function homepage() {
  return (
    <div className='vh-100 bg-warna-satu' id='homepage'>
        <div className="row" style={{height:"80%"}}>
            <div className="col h-100 d-flex align-items-center justify-content-center">
              <img src={Poto} alt="potopp" className='rounded-circle shadow-sm' style={{height:"20em", width:"20em", objectFit:"cover"}} />
            </div>
            <div className="col h-100 d-flex align-items-center justify-content-left">
              <div>
              <p className='text-putih fw-bold fs-2 d-flex align-items-start'>HI! I'm Akhmad <span className='text-warna-tiga'>Agiyoso</span></p>
              <p className='text-putih d-flex align-items-start text-start'>
                              Welcome to the web development section of my portfolio! I am a web developer with a passion for creating innovative and functional digital solutions. I have been involved in various successful web development projects.</p>
              <p className='text-putih d-flex align-items-start'>read more</p>
              <button className='bg-warna-tiga rounded shadow-none fw-medium text-putih d-flex align-items-center justify-content-center border-none' style={{height:"2.5em", width:"8em"}}><a href='https://drive.google.com/file/d/1zXMjoCYE0xXopK5QKPEjRPvk5aa2LJvP/view?usp=sharing
               ' className='text-decoration-none text-putih' >download cv</a></button>
              </div>           
            </div>
        </div>
    </div>
  )
}
