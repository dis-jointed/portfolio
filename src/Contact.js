import React, { useState } from 'react'
import "./Contact.css"
// import emailjs from 'emailjs-com';

function Contact() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Subject, setSubject] = useState("")

    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('gmail', 'service_avh0sz7', e.target, 'user_wVbxahn8XP32Qg07E4ClQ')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {a
    //           console.log(error.text);
    //       });

    //       setemail("");
    //       setname("");
    //   }

    return (
        <div className="contact" id="contact">

            <div className="left__cont">
           `` <p className="contact__title">Contact</p>
               <h2>Get in Touch</h2>
               <p className="contact__desc">Have any project in mind? Let's<br/>talk about it. </p>
               <div className="mail__box">
               `<img className="mail__contact" src="./images/mail.svg" />
                <p>terencejumba@gmail.com</p>
               </div>  
             
            </div>

            <div className="right__cont">
                <div className="name__upper">
                <input className="name__contact" placeholder="Name" value= {name}  onChange={(e) => setname(e.target.value)} />
                <input className="email__contact" placeholder="Email"  value = {email}  onChange={(e) => setemail(e.target.value)}/>
                </div>

                <input className="subject__input" placeholder="Subject" />
                <textarea className="messagee__input" placeholder="Message" />
                {/* <button onClick={sendEmail}>Submit</button> */}
               
            </div>
            
        </div>
    )
}

export default Contact
