import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const PlusIcon = ({classList}) => {
  return (
    <FontAwesomeIcon className={classList} icon={faPlus} />
  )
}

export default PlusIcon
