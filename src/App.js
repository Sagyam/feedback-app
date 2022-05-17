import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id)
      setFeedbacks(newFeedbacks)
    }
  }

  return (
    <>
      <div className='container'>
        <Header />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
