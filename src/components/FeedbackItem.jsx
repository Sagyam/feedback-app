import { FaTimes } from 'react-icons/fa'
import { PropTypes } from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ feedback, rating, id, handleDelete }) {
  return (
    <Card reversed={true}>
      <div className='num-display'>{rating}</div>
      <button className='close' onClick={() => handleDelete(id)}>
        <FaTimes color='hotpink' />
      </button>
      <div className='text-display'>{feedback}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default FeedbackItem
