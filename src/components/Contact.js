import React from 'react'

function Contact(props) {
  return (
    <div>
        <div className={`about-heading acc-${props.mode}`}>Contact Me</div>
        <div className={`contact-text acc-${props.mode}`}>&copy; copyright to Syed Zaheer Hossain</div>
        <div className={`contact-text acc-${props.mode}`}>Development of this Page is still under progess</div>
    </div>
  )
}

export default Contact