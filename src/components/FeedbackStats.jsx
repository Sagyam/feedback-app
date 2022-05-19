import React from 'react'
import FeedBackContext from '../context/FeedBackContext'
import { useContext } from 'react'

function FeedbackStats() {
  const { feedbacks } = useContext(FeedBackContext)

  let average =
    feedbacks.reduce((acc, feedback) => {
      return acc + feedback.rating
    }, 0) / feedbacks.length
  average = average.toFixed(2).replace(/\.?0+$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
