import React, {useState} from 'react'

export default function ContactForm() {

  return (
    <div>
      <p className="fw-bold text-decoration-underline">Contact Form Coming Soon!</p>
    </div>
  )
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) { 
    event.preventDefault()
    console.log('Sending email.')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setBody('')
        }
      })
  }

  return (
    <div className="">
        <p className="fw-bold">Please use the contact form on this page to send me a message, and I'll get back to you as soon as possible.</p>
        <form>
            <div className="row">
              <div className="col-1">
                <label className="fw-bold d-flex align-items-center justify-content-center h-100 align-middle" for="name">Name:</label>
              </div>
              <div className="col-3">
                <input className="form-control" required type="name" id="name" name="name" 
                    onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className="col-1">
                <label className="fw-bold d-flex align-items-center justify-content-center h-100 align-middle" for="email">Email:</label>
              </div>
              <div className="col-7">
                <input className="form-control" required type="email" id="email" name="email" 
                    onChange={(e)=>{setEmail(e.target.value)}}/>  
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-1">
              <label for="message" className="fw-bold d-flex align-items-center justify-content-center h-100 align-middle">Message:</label>
              </div>
              <div className="col-11 ">
              <input className="form-control" maxlength="200" required type="text" id="message" name="message" 
                  onChange={(e)=>{setMessage(e.target.value)}}/>
              </div>
            </div>
            <button className="btn btn-primary my-2" type="submit" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
            <br/>
        </form>
    </div>
  )
}
