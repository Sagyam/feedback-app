import { FaTimes } from 'react-icons/fa'
import { PropTypes } from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function FeedbackItem({ feedback }) {
  const { deleteFeedback } = useContext(FeedBackContext)
  return (
    <Card reversed={true}>
      <div className='num-display'>{feedback.rating}</div>
      <button className='close' onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes color='hotpink' />
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
