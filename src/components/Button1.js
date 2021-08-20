import PlusIcon from "./PlusIcon.js"

const Button1 = ({classList, text}) => {
  return (
    <button className={classList}>
      <PlusIcon classList='btn1-icon' />
      <h4>{text}</h4>
    </button>
  )
}

Button1.defaultProps = {
  text: 'New Invoice',
  classList: 'button-1 btn'
}

export default Button1
