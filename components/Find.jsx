import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Find = () => {

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_u6up06r', 'template_sayk4di', form.current,
      '7sQTTDOHxbobHlDIS')

      e.target.reset();
  };

  return (
    <div id='contact'
    className='flex flex-row justify-around align-center custom-contact bg-fixed bg-center bg-cover h-screen p-20'>
        <form ref={form} onSubmit={sendEmail}
        className='flex flex-col justify-center items-center align-center p-5 gap-y-5'  
        action="/send-data-here" 
        method="post">
            <input 
            type="text" 
            placeholder='Your Full Name' 
            id="name" name="name"
            className='w-100% p-5 border-2 border-brown rounded-2xl font-semibold text-brown font-Quicksand w-fit' 
            />
            <input 
            type="text" 
            placeholder='Your Email' 
            id="email" name="email" 
            className='w-100% p-5 border-2 border-brown rounded-2xl font-semibold text-brown font-Quicksand w-fit'            
            />
            <textarea 
            type="text" 
            placeholder='Your Message' 
            id="message" name="message" 
            className='w-100% p-5 border-2 border-brown rounded-2xl font-semibold text-brown font-Quicksand w-fit'
            />
            <button 
            type="submit"
            className='font-Signika text-yellow border rounded-3xl w-fit px-10 py-5 bg-white'
            >
              Submit
            </button>
        </form>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.7798421492766!2d36.81132552972072!3d-1.26733602053773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17a1327839a5%3A0xd7c19c2ad33e329c!2sOdyssey%20Africa%20Hikes!5e0!3m2!1sen!2ske!4v1661414590295!5m2!1sen!2ske" 
        width="600" height="450" style={{border:0}} 
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className='rounded-3xl'
        ></iframe>
        </div>
    </div>
  )
}

export default Find