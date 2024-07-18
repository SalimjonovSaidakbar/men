import React from 'react'
import Header from '../header/Header'
import rooll from './photo_2024-07-16_14-56-43.jpg'
import "./Head.css"

export default function Head() {
return (
    <div className='head' style={{backgroundImage:`URL(${rooll})`, width: '1440px', height: '582px'} }> 
        <Header/>
        <h1>Propel your business.</h1>
        <p>Propel comes with everything you need to get your business rolling.</p>
        <button>Get Started</button>
    </div>
)
}
