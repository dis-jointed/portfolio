import React from 'react'
import './Image.css'

function Image({desc, image, link}) {
    return (
        <div className='image__work'>
            <a href={link} >
                <img src={image}/>
                <p className="imagee__desc">
                {desc}
                </p>
            </a>

           
            
        </div>
    )
}

export default Image
