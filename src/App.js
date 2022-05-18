import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedBackForm from './components/FeedBackForm'

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

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
    <>
      <div className='container'>
        <Header />
        <FeedBackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
