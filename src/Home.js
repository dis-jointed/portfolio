import React from 'react'
import Header from './Header'
import './Home.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Home() {
    return (
        <div className="home" id="home">
            <div className="left__cont">

            <p className="home__content"><span>Hello,</span> I'm <br/> Terence Jumba</p>

            <p className="home__desc">I'm a fullstack web and android developer</p>
            {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={1500} delay={1000}>
            
            </Link> */}

            <a href="#contact">
              <button>Get in Touch</button>
            </a>
           
            </div>

            <div className="right__cont">

                <img className="baboo" src="/images/baboopic.jpg"/>

                <div className="profile__menu">
                    <a href="https://www.instagram.com/zeroday_coder/">
                        <img src="/images/instagram.svg"/>
                    </a>

                    <a href="https://twitter.com/__disjointed">
                        <img src="/images/twitter.svg"/>
                    </a>

                    <a href="https://www.linkedin.com/in/terencejumba/">
                        <img src="/images/linkedin.svg"/>
                    </a>

                </div>
               

            </div>

        </div>
    )
}

export default Home 
