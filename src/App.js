import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedbacks] = useState(FeedbackData)
  return (
    <>
      <div className='container'>
        <Header />
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  )
}

export default App
