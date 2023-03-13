import React, {useRef,useState,useEffect} from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const Contact = {
        width: '100%',
        maxHeight: '100%',
        paddingTop: '5%',
        paddingBottom: '50%',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255, 0.5)), url("assets/restaurantes5.jpg")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover',
        textAlign: 'center',
        fontFamily: 'Georgia, "Times New Roman", Times, serif',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const LeftSide = {
        width: '50%',
        padding: '50px 0',
        background: '#fff',
        fontSize: '1.1rem',
        fontWeight: '800',
        float: 'left',
        
    };

    const RightSide = {
        width: '50%',
        padding: '22.6px 0',
        background: '#fff',
        float: 'right',
        
    };

    const Frame = {
        width: '90%',
        height: '680px',
        margin: '1.5% 5%',
        padding: '4px',
        border: '3px solid #72585c',
        borderRadius: '10px',
        boxShadow: '5px 5px 10px #72585c'
    };

    const contactForm = {
        width: '60%',
        height: '130%',
        margin: '0 20%',
        padding: '15px',
        paddingTop: '30px',
        background: '#fff',
        borderRadius: '8px',
        border: '3px solid #5e2129',
        float: 'left'
    };

    const Text = {
        width: '70%',
        margin: '3px 0',
        padding: '5px 2%',
        background: '#fff',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#333',
        border: '1px solid #333',
        borderRadius: '4px'
    };

    const Select = {
        width: '70%',
        margin: '3px 0',
        padding: '5px 10px',
        background: 'rgb(221, 221, 218)',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#333',
        border: '1px solid #333',
        borderRadius: '4px',
    };

    const Message = {
        width: '70%',
        minHeight: '100px',
        background: '#fff',
        marginTop: '7px',
        padding: '5px 7px',
        border: '1px solid #333',
        borderRadius: '4px',
        fontWeight: '700',
        fontSize: '1rem',
        color: '#333',
        cols: '30',
        rows: '6'
    };

    const Send = {
        minWidth: '40%',
        minHeight: '50px',
        marginTop: '10px',
        background: '#0b7e57',
        color: '#fff',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        border: '1px solid #333',
        bordeRadius: '20px',
        cursor: 'pointer'
    };

    //Configuring some action in the contact form
    const form = useRef();
    const nameRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleChange = event => { setName(event.target.value) };
    const handleChange2 = event => { setEmail(event.target.value) };
    const handleChange3 = event => { setSubject(event.target.value) };
    const handleChange4 = event => { setMessage(event.target.value) };

    //Connecting to the Email Server (EmailJS)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3jnm03b', 'template_t13do6n', form.current, 'pRxcV4a-_G3gOuxVv')
        //emailjs.sendForm('service_20jnboi', 'template_bqfpe08', form.current, 'IrsjCEE_sKgaU0Pg5')
            .then((result) => { console.log(result.text); }, (error) => { console.log(error.text); });
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        nameRef.current.focus();
    };

    return (
        <div style={Contact}>
            <div style={LeftSide}>
                <h1>Our Hours</h1>
                <p>Mon: 9:00 am to 5:00 pm -- Tues: 9:00 am to 5:00 pm<br />
                    Wed: 9:00 am to 5:00 pm -- Thurs: 9:00 am to 6:00 pm<br />
                    Fri: 9:00 am to 6:00 pm -- Sat: 9:00 am to 4:00 pm<br />
                    sun: 11:00 am to 4:00 pm<br /><br />
                    Phone call: 519 - 701-0000
                </p><br />
                <form ref={form} onSubmit={sendEmail} style={contactForm} >
                    <h1>Contact Us by</h1>
                    <input ref={nameRef} onChange={handleChange} value={name} type="text" name="name" style={Text} placeholder="name" required/><br />
                    <input onChange={handleChange2} value={email} type="email" name="email" style={Text} placeholder="email" required/><br />
                    <select onChange={handleChange3} value={subject} name="subject" style={Select} title="subject" required>
                        <option value="">Subject</option>
                        <option value="General">General</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Suggestion">Suggestion</option>
                    </select><br />
                    <textarea onChange={handleChange4} value={message} name="message" style={Message} placeholder="your message here..." required></textarea>
                    <input className='btn btn-info btn-lg btn-block' style={Send} type="submit" value="Send"/><br />
                </form>
            </div>
            <div style={RightSide}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.5609018639877!2d-81.24945230738861!
                3d42.985228679047566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef203324017fb%3A0x7916c16a01f4ea37!
                2s201%20Queens%20Ave%2C%20London%2C%20ON%20N6A%201J1!5e1!3m2!1sen!2sca!4v1675094399047!5m2!1sen!2sca"
                allowfullscreen="" loading="lazy" style={Frame} referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};


/*
 <img style={emailIcon} src="/assets/email.png" alt="email icon"
                        onclick="ToggleForm()" /><br />
*/

