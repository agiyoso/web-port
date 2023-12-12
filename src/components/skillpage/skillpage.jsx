import React from 'react'
import "./../css/warna.css"

export default function skillpage() {
  return (
    <div className='bg-biru' style={{height:"60vh"}}>
        <p className='text-putih'>Skill</p>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-end col-2">
                <div className="skill-java bg-biru-laut" style={{height:"100px", width:"280px"}}>
                    <p>Java</p>
                </div>
            </div>
            <div className="d-flex justify-content-center col-4">
                <div className="skill-java bg-biru-laut" style={{height:"150px", width:"330px"}}>
                    <p>Java</p>
                </div>
            </div>
            <div className="d-flex justify-content-start col-2">
            <div className="skill-java bg-biru-laut" style={{height:"100px", width:"280px"}}>
                <div className='bg-merah' style={{height:"20px", width:"30px"}}>
                    <p className='text-putih'>3</p>
                </div>
                    <p>Java</p>
                </div>
            </div>
        </div>
    </div>
  )
}
