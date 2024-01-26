import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PlayAllButton({onClick}){
    return (
        <button onClick={onClick}><FontAwesomeIcon icon={faPlay} /> Play All</button>
    )
}

export default PlayAllButton