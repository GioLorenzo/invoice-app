import Button1Icon from "./Button1Icon"

const Button1 = ({classList, text}) => {
  return (
    <button className={classList}>
      <Button1Icon classList='btn-icon' />
      <h4>{text}</h4>
    </button>
  )
}

Button1.defaultProps = {
  text: 'New Invoice',
  classList: 'button-1 btn'
}

export default Button1
