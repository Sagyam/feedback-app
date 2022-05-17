function FeedbackItem({ feedback, rating }) {
  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{feedback}</div>
    </div>
  )
}

export default FeedbackItem
