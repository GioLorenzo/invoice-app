import PlusIcon from "./PlusIcon.js"

const Button6 = ({classList, text}) => {
  return (
    <button className={classList}>
      <PlusIcon classList='btn6-icon' />
      <h4>{text}</h4>
    </button>
  )
}

Button6.defaultProps = {
  text: 'Add New Item',
  classList: 'button-6 btn'
}

export default Button6