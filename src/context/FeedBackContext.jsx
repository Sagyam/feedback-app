import React, { createContext, useState, useEffect } from 'react'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    fetchFeedbacks()
  }, [])

  const fetchFeedbacks = async () => {
    const response = await fetch('/feedback?_sort=rating&_order=desc')
    const feedbacks = await response.json()
    setFeedbacks(feedbacks)
    setIsLoading(false)
  }

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })
      const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id)
      setFeedbacks(newFeedbacks)
    }
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()

    setFeedbacks([data, ...feedbacks])
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

  const updateFeedback = async (id, updFeedback) => {
    await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updFeedback),
    })

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
        isLoading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  )
}

export default FeedBackContext
