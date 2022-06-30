import React from 'react'
import PageTitle from '../../PageTitle'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <PageTitle title='Contact' />
    <form className='contact-form' >
      <input type='text' name='name' placeholder='Name' />
      <input type='email' name='email' placeholder='Enter email' />
      <textarea name="message" placeholder='Your message' />
      <button>SUBMIT</button>
    </form>
    </div>
  )
}

export default Contact