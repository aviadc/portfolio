import React from 'react'
import PageTitle from '../../PageTitle'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <PageTitle title='Contact' />
    <form className='contact-form' >
      <input type='text' name='name' placeholder='name' />
      <input type='email' name='email' placeholder='email' />
      <textarea name="message" placeholder='message' />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Contact