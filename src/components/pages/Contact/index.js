import React from "react";
import emailjs from "@emailjs/browser";
import PageTitle from "../../PageTitle";
import "./contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_u2r26pi", "template_pxi3mti", e.target,'SU6sZXbXeQVKcGJSw')
    .then(res=>{console.log(res)}).catch(err=>{
      console.log(err)
    });
  };

  return (
    <div className='contact-container' id='contact'>
      <PageTitle title='Contact' />
      <form className='contact-form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Enter email' />
        <textarea name='message' placeholder='Your message' />
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
