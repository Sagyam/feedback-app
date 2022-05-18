import { PropTypes } from 'prop-types'

function Header(props) {
  return (
    <>
      <header>
        <div className='container'>
          <h2>{props.text}</h2>
        </div>
      </header>
    </>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.5)',
  textColor: '#fcfeff',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
