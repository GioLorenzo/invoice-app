

const Button3 = ({classList, text}) => {
  return (
    <button className={classList}>
      <h4>{text}</h4>
    </button>
  )
}

Button3.defaultProps = {
  text: 'Edit',
  classList: 'button-3 btn'
}

export default Button3
