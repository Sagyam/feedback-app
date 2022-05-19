import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: 'This is a feedback',
      rating: 3,
    },
  ])

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id)
      setFeedbacks(newFeedbacks)
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbacks([newFeedback, ...feedbacks])
  }

  return (
    <FeedBackContext.Provider
      value={{ feedbacks, deleteFeedback, addFeedback }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
