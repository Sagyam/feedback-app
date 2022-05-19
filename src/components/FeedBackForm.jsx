import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(1)

  const { addFeedback, feedbackToEdit, updateFeedback } =
    useContext(FeedBackContext)

  useEffect(() => {
    if (feedbackToEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackToEdit.item.text)
      setRating(parseInt(feedbackToEdit.item.rating))
    }
  }, [feedbackToEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Message must be 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage('')
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackToEdit.edit) {
        updateFeedback(feedbackToEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
      setRating(5)
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />

          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <p className='message'>{message}</p>}
      </form>
    </Card>
  )
}

Button.defaultProps = {
  version: 'primary',
  placeholder: '',
  isDisabled: false,
  type: 'button',
}

export default FeedBackForm
