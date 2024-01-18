import React from 'react'
import Homepage from '../components/homepage/homepage';
import Projectpage from '../components/projectpage/projectpage';
import Skillpage from '../components/skillpage/skillpage';
import Contactpage from '../components/contactpage/contactpage';

export default function content() {
  return (
    <div className='container-sm'>
      <div>
        <Homepage/>
      </div>
      <div className='border-top'>
        <Projectpage/>
      </div>
      <div className='border-top'>
        <Skillpage/>
      </div>
      <div className='border-top'>
        <Contactpage/>
      </div>
  </div>
  )
}
