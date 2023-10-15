import "../Styling/Contact.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_h57bqpo', //YOUR_SERVICE_ID'
        'template_gbi4lte',// 'YOUR_TEMPLATE_ID'
        form.current,
        'e-EwIONbvE3MPKNKK' // 'YOUR_PUBLIC_KEY'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (


        <>
            <div className="contact-height" id="contact">

                <div className='Up-Arrow'>
                    <a href='#VectDigi'><KeyboardArrowUpIcon
                    className="Up-Arrow-1"
                    /></a>
                </div>

                <div className="Heading">
                    <h2>How to Contact US</h2>
                    <h4>Simply fullfill the form</h4>
                </div>
                <div className="form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Enter your Name" className="name-input"  name="user_name"/>
                        <label htmlFor="Email" >Email </label>
                        <input type="email" placeholder="Enter your Email" className="email-input" name="user_email" />
                        <label htmlFor="Message">Message</label>
                        <textarea type="text" placeholder="Type your message here..." rows="6" cols="10" className="message-input" name="message" />
                        <button type="submit" className="submit-btn">Send</button>
                    </form>
                </div>

                <div className="downArrow1">
                    <a href="#Home"><KeyboardArrowUpIcon
                    className="down-Arrow-1"
                    /></a>
                </div>
            </div>

        </>
    )
}

export default Contact