import React from 'react'
import "./../css/warna.css"

export default function skillpage() {
  return (
    <div className='bg-warna-satu mt-5' id='skill' style={{height:"45vh"}}>
        <p className='text-warna-tiga fw-semibold fs-4 mb-5'>SKILL</p>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-end col-2">
            <div className="skill-java bg-warna-dua" style={{height:"100px", width:"280px"}}>
                <div className='bg-warna-tiga' style={{height:"20px", width:"30px"}}>
                    <p className='text-putih fw-medium'>1</p>
                </div>
                <div className='h-100 d-flex align-items-center justify-content-center pb-3'>
                    <p className="text-putih fs-5">Java</p>
                </div>
            </div>
            </div>
            <div className="d-flex justify-content-center col-4">
            <div className="skill-java bg-warna-dua" style={{height:"150px", width:"330px"}}>
                <div className='bg-warna-tiga' style={{height:"20px", width:"30px"}}>
                    <p className='text-putih fw-medium'>2</p>
                </div>
                <div className='h-100 d-flex align-items-center justify-content-center pb-3'>
                    <p className="text-putih fs-4">ReactJS</p>
                </div>
                </div>
            </div>
            <div className="d-flex justify-content-start col-2">
            <div className="skill-java bg-warna-dua" style={{height:"100px", width:"280px"}}>
                <div className='bg-warna-tiga' style={{height:"20px", width:"30px"}}>
                    <p className='text-putih fw-medium'>3</p>
                </div>
                <div className='h-100 d-flex align-items-center justify-content-center pb-3'>
                    <p className="text-putih fs-5">HTML</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
