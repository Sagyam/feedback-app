import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedBackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  return (
    <Card>
      <h2>How would you rate us</h2>
      {/** Rating select comp */}
      <div className='input-group'>
        <input
          type='text'
          placeholder='Rating'
          onChange={handleTextChange}
          value={text}
        />

        <Button type='submit'>Send</Button>
      </div>
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
