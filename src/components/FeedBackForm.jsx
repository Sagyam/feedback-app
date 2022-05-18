import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedBackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)

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
      handleAdd(newFeedback)
      setText('')
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

Button.propTypes = {
  version: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
}

export default FeedBackForm
