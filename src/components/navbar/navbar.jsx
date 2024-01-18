import React from 'react'
import "./../css/warna.css"

export default function navbar() {
  return (
    <div className='bg-warna-satu' style={{height:"60px"}}>
        <div className="row d-flex align-items-center container-sm h-100">
            <div className="col h-100">
                <p className='text-putih d-flex align-items-center justify-content-center h-100' >AKHMAD AGIYOSO</p>
            </div>
            <div className="col h-100">
                <div className="row d-flex align-items-center h-100">
                    <div className="col h-100">
                        <p className='d-flex align-items-center justify-content-center h-100'><a href="#homepage" className='text-decoration-none text-putih'>Home</a></p>
                    </div>
                    <div className="col h-100">
                        <p className='d-flex align-items-center justify-content-center h-100'><a href="#project" className='text-decoration-none text-putih' >Project</a></p>
                    </div>
                    <div className="col h-100">
                        <p className='d-flex align-items-center justify-content-center h-100'><a href="#skill" className='text-decoration-none text-putih'>Skill</a></p>
                    </div>
                    <div className="col h-100">
                        <p className='d-flex align-items-center justify-content-center h-100'><a href="#contact" className='text-decoration-none text-putih'>Contact</a></p>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}
