import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import FeedBackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'

function FeedbackList() {
  const { feedbacks, isLoading } = useContext(FeedBackContext)

  if (!isLoading && (feedbacks.length === 0 || !feedbacks)) {
    return <p>No Feedback</p>
  }

  return isLoading ? (
    <Spinner />
  ) : (
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
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
