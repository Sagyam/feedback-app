import React from 'react'
import { PropTypes } from 'prop-types'

function Card({ children, reversed }) {
  return <div className={`card ${reversed && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
  reversed: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reversed: PropTypes.bool,
}

export default Card
