import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { FeedBackProvider } from './context/FeedBackContext'
import FeedbackStats from './components/FeedbackStats'
import FeedBackForm from './components/FeedBackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedBackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  )
}

export default App
