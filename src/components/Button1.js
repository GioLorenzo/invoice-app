// import Button1Icon from "./Button1Icon"

const Button1 = ({classList, text}) => {
  return (
    <button className={classList} style={button1Styles}>{text}</button>
  )
}

const button1Styles = {
  color: 'blue'
}

export default Button1
