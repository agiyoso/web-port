import React from 'react'

import "./../css/warna.css"
export default function projectpage() {
    return(
    <div className='min-vh-100 mt-5' id='project'>
        <p className='text-putih fw-semibold fs-4 mb-5'>PERSONAL <span className='text-warna-tiga'>PROJECT</span> </p>

        <div className="row d-flex align-items-center justify-content-center" style={{height:"18em"}}>
            <div className="col d-flex justify-content-end align-items-center h-100">
                <div className='bg-warna-tiga mx-5' style={{height:"17em", width:'17em'}}>

                </div>
            </div>
            <div className="col h-100">
                <p className='text-putih fw-medium fs-5 text-start mx-5'>Project 1</p>
                <p className='text-putih text-start mx-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, iure!</p>
                <button className='bg-warna-tiga shadow-none border-none rounded text-putih d-flex align-items-center justify-content-center mx-5 py-2' style={{height:"1.5em", width:"6em"}}>Link</button>
                {/* <p><a href="#" className='text-warna-tiga link-underline-light'>link</a></p> */}
            </div>
        </div> 
        
    </div>
    )
}
