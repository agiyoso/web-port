import React from 'react'
import poto from '../image/millenials.png'
import poto2 from '../image/ldpage.png'

import "./../css/warna.css"
export default function projectpage() {
    return(
    <div className='min-vh-100 mt-5' id='project'>
        <p className='text-putih fw-semibold fs-4 mb-5'>PERSONAL <span className='text-warna-tiga'>PROJECT</span> </p>

        <div className="row d-flex align-items-center justify-content-center" style={{height:"18em"}}>
            <div className="col d-flex justify-content-end align-items-center h-100">
                <div className='bg-warna-tiga mx-5' style={{height:"17em", width:'17em'}}>
                    <img src={poto} alt="potopp" className='' style={{height:"17em", width:"17em"}}/>
                </div>
            </div>
            <div className="col h-100">
                <p className='text-putih fw-medium fs-5 text-start mx-5'>Project Millenials.Sply</p>
                <p className='text-putih text-start mx-5'>This website was designed to transform a conventional store into an online store. In this project, we developed an
                inventory and sales information system for the Millenials.Sply store, enabling the processing of sales and inventory data to be conducted directly online.</p>
                <button className='bg-warna-tiga shadow-none border-none rounded text-putih d-flex align-items-center justify-content-center mx-5 py-2' style={{height:"1.5em", width:"6em"}}><a href='https://github.com/agiyoso/millenials_project' className='text-decoration-none text-putih'>Link</a></button>
                {/* <p><a href="#" className='text-warna-tiga link-underline-light'>link</a></p> */}
            </div>
        </div> 

        <div className="row d-flex align-items-center justify-content-center" style={{height:"18em"}}>
            <div className="col d-flex justify-content-end align-items-center h-100">
                <div className='bg-warna-tiga mx-5' style={{height:"17em", width:'17em'}}>
                    <img src={poto2} alt="potopp" className='' style={{height:"17em", width:"17em"}}/>
                </div>
            </div>
            <div className="col h-100">
                <p className='text-putih fw-medium fs-5 text-start mx-5'>Project Landing Page</p>
                <p className='text-putih text-start mx-5'>This landing page website is built using Bootstrap, a popular front-end framework for responsive and mobile-first web development. Using Bootstrap, you can build an attractive and responsive landing page quickly, while leveraging a pre-existing set of tools and components.</p>
                <button className='bg-warna-tiga shadow-none border-none rounded text-putih d-flex align-items-center justify-content-center mx-5 py-2' style={{height:"1.5em", width:"6em"}}><a href='https://github.com/agiyoso/company_training' className='text-decoration-none text-putih'>Link</a></button>
                {/* <p><a href="#" className='text-warna-tiga link-underline-light'>link</a></p> */}
            </div>
        </div>     
    </div>
    )
}
