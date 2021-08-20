import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Button1Icon = ({classList}) => {
  return (
    <FontAwesomeIcon className={classList} icon={faPlus} />
  )
}

export default Button1Icon
