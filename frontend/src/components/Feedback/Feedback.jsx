import React from 'react'
import "./Feedback.css"
import "../Items/Items.css"
import FeedbackCrousel from './FeedbackCrousel'
function Feedback() {
  return (
    <div>
        <div className='Feedback'>
        <h6 className='ItemProducts'>Testimonial</h6>
        <h3>Our Happy Client Says</h3>
        <div className='feedbackContent'>
          <FeedbackCrousel/>
          <img src="feedbackimg.png"></img>
        </div>
        </div>
    </div>
  )
}

export default Feedback