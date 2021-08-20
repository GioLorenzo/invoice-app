import Button1Icon from "./Button1Icon"

const Button1 = ({classList, text}) => {
  return (
    <button className={classList}>
      <Button1Icon classList='btn-icon' />
      <h4 style={h4Styles}>{text}</h4>
    </button>
  )
}

const h4Styles = {
  margin: 'auto'
}

Button1.defaultProps = {
  text: 'New Invoice',
  classList: 'button-1'
}

export default Button1
