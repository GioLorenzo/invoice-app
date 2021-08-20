const Button2 = ({classList, text}) => {
  return (
    <button className={classList}>
      <h4>{text}</h4>
    </button>
  )
}

Button2.defaultProps = {
  text: 'Mark as Paid',
  classList: 'button-2 btn'
}

export default Button2
