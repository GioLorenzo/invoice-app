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

export default Button1
