const Button4 = ({classList, text}) => {
  return (
    <button className={classList}>
      <h4>{text}</h4>
    </button>
  )
}

Button4.defaultProps = {
  text: 'Save as Draft',
  classList: 'button-4 btn light-theme'
}

export default Button4