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
    {
      id: 2,
      text: 'This is another feedback',
      rating: 4,
    },
    {
      id: 3,
      text: 'This is a third feedback',
      rating: 5,
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

  const [feedbackToEdit, setFeedbackToEdit] = useState({
    item: null,
    edit: false,
  })

  const editFeedback = (item) => {
    setFeedbackToEdit({
      item,
      edit: true,
    })
  }

  const updateFeedback = (id, updFeedback) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updFeedback } : feedback
      )
    )
    setFeedbackToEdit({
      item: null,
      edit: false,
    })
  }

  return (
    <FeedBackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackToEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
