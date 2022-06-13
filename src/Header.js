import React from 'react'
import './Header.css'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Header() {
    return (
        <div className='header'>
            
            <a className="logoo">
                <h3>Zeroday<span>.</span></h3>
            </a>

            <div className='works__div'>

            <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={1500} delay={10}>
              Home
            </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1500} delay={10}>
              About
            </Link>
            <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={1500} delay={10}>
              Portfolio
            </Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1500} delay={10}>
            Contact
            </Link>
                

    
            </div>

          

        </div>
    )
}

export default Header
