import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback.text}
          rating={feedback.rating}
        />
      ))}
    </div>
  )
}

export default FeedbackList
