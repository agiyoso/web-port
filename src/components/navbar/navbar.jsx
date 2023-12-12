import React from 'react'
import "./../css/warna.css"

export default function navbar() {
  return (
    <div className='bg-biru border-bottom' style={{height:"60px"}}>
        <div className="row">
            <div className="col">
                <p className='text-putih' >AGIYOSO</p>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                        <p className='text-putih'>Home</p>
                    </div>
                    <div className="col">
                        <p className='text-putih'>Project</p>
                    </div>
                    <div className="col">
                        <p className='text-putih'>Skill</p>
                    </div>
                    <div className="col">
                        <p className='text-putih'>Contact</p>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}
