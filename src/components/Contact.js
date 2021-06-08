// import React from 'react'

// function Contact() {
//     return (
//         <section className="contact" id="contact">
//         <div className="form-wrapper flex">
//           <h2>Get in <br /> 
//             <span>touch</span> 
//           </h2>
//           <form action="action=https://formspree.io/f/mgerkdpl" method="POST">
//             <label htmlFor="email"> Your Email: </label>
//             <input type="email" name="_replyto" id="email required" />
//             <label htmlFor="message"> Your Message: </label>
//             <input className="text" name="message" />  
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         <img src="/img/contact-image.jpg" alt="cortez" />
//       </section>
//     )
// }

// export default Contact



import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_cg80r2q', 'template_9gtz8ib', e.target, 'user_7MjyIZRGK6YJxqnVWa0UQ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        
        <div className="contact" id="contact">
            <div className="form-wrapper flex">
                <h2>Get in <br /> 
                    <span>touch</span> 
                </h2>
                <form onSubmit={sendEmail}>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email " name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="button" value="Submit" alert="Succesfully submitted!"></input>
                        </div>
                </form>
            </div>
            <img className="img"  src="/images/contact-image.jpg" alt="portrait-pic" />
        </div>
    )
}
