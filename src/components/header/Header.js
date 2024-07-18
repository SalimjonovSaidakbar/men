import React from 'react'
import "./Header.css"

export default function Header() {
return (
    <div className='Header'>
        <p className='p1'>Spoon</p>
        <div className='top1'>
        <a>Feature</a>
        <a>Premium</a>
        <a>Pricing</a>
        <a>About</a>
        <a>Sign in</a>
        <button className='button1'>Get Started</button>
        </div>
    </div>
)
}
