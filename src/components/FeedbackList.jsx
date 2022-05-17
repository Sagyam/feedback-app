import React from 'react'
import FeedbackItem from './FeedbackItem'
import { PropTypes } from 'prop-types'

function FeedbackList({ feedbacks, handleDelete }) {
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
          handleDelete={() => handleDelete(feedback.id)}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default FeedbackList
