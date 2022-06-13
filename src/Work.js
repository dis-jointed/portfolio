import React from 'react'
import AmazingWorks from './AmazingWorks'
import Image from './Image'
import './Work.css'

function Work() {
    return (
        <div className='work' id="work">
            <p className="work__title">Portfolio</p> 
             <p className="work__desc">My creative works</p>
             <div className='workImage__cont' >
                
                    <Image
                      link="https://tesla-clone-173eb.web.app/"
                      image="/images/tesla.png"
                      desc="Tesla clone" />
                      <Image
                      link="https://happyhourliquor.netlify.app/"
                      image="/images/happyy.png"
                      desc="Happy hour" />
                       <Image
                      link="https://netflix-clone-ae87f.web.app/"
                      image="/images/neetf.png"
                      desc="Netflix" />

<Image
                      link="https://netflix-clone-ae87f.web.app/"
                      image="/images/happyy.png"
                      desc="HBssswadaxszO" />

                  
                       


             </div>
        </div>

    )
}

export default Work
