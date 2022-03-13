import PropTypes from 'prop-types'
const Button = ({ color, text, clickHandler }) => {
  return (
    <div>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  )
}
Button.defaultProps = {
  color: 'steelblue',
}
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
