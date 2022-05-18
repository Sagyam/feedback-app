import React from 'react'
import FeedbackItem from './FeedbackItem'
import { PropTypes } from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ feedbacks, handleDelete }) {
  if (feedbacks.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{
              opacity: 0,
              y: -50,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
          >
            <FeedbackItem
              key={feedback.id}
              feedback={feedback.text}
              rating={feedback.rating}
              handleDelete={() => handleDelete(feedback.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
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
