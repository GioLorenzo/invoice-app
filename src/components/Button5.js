const Button5 = ({classList, text}) => {
  return (
    <button className={classList}>
      <h4>{text}</h4>
    </button>
  )
}

Button5.defaultProps = {
  text: 'Delete',
  classList: 'button-5 btn'
}

export default Button5