import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AddAllButton({onClick}){
    return (
        <button onClick={onClick}><FontAwesomeIcon icon={faPlus} /> Add All</button>
    )
}

export default AddAllButton