import React from 'react'
import './AmazingWorks.css'

function AmazingWorks() {
    return (
        <div className='amazingworks'>
            <img className='image__amazing' src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' />

            <div className='amazing__details'>
                <h1 className='amazing__title'>vivo Barber Shop</h1>
                <p>Donec id volutpat nunc. Ut sagittis laoreet efficitur.<br/>
                   Mauris pellentesque mi dolor, at pharetra <br/> 
                   urna fringilla cursus. Vestibulum tristique dolor ac ipsum <br/>
                   efficitur, eget vehicula mi maximus. In sit amet convallis erat.<br/>
                    Integer nec velit vel ipsum dignissim placerat.</p>
            </div>
        </div>
    )
}

export default AmazingWorks
