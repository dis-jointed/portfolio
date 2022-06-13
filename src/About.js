import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about' id="about">
            <div className='left__div'>
              <p className="about__title">About</p> 
              <h2>Hi, I'm Terence Jumba</h2>
              <p className="about__desc">Hi, im Terence Jumba a Fullstack Web Developer and an Android Developer from Nairobi, Kenya.<br/>
                 I have ideas for developing unique custom websites and Android apps. I use <br/> innovative approach to idea and concept development.</p>

                 <a href="#contact">
                  <button>Get in Touch</button>
                 </a>
            </div>

            <img className="profile" src="./images/passport.jpg"/>


        </div>
    )
}

export default About
