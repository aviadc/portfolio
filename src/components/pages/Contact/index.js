import React ,{useState} from "react";
import emailjs from "@emailjs/browser";
import PageTitle from "../../PageTitle";
import "./contact.scss";

const Contact = () => {

  const [messageToUser,setMessageToUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(e.target[0].value&&e.target[1].value&&e.target[2].value)){ //check if the input fields not empty
      setMessageToUser("missing details!")
      return;
    }
    e.target.reset();
    emailjs.sendForm("service_u2r26pi", "template_pxi3mti", e.target,'SU6sZXbXeQVKcGJSw')
    .then(res=>{
      console.log(res);
      setMessageToUser("Your message has been sent successfully");
    }).catch(err=>{
      console.log(err);
      setMessageToUser("There was an error trying to send your message, please try again later.");
    });
  };

  

  return (
    <div className='contact-container' id='contact'>
      <PageTitle title='Contact' />
      <form className='contact-form' onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Enter email' />
        <textarea name='message' placeholder='Your message' rows='10' />
        <button>SUBMIT</button>
      </form>
      <h5>{messageToUser}</h5>
    </div>
  );
};

export default Contact;
