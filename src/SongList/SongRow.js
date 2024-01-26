import { faPlay, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SongRow({songName, artistName, trackNumber, onClick, onClick2}){
    return (
        <tr>
            <td onClick={onClick}><FontAwesomeIcon icon={faPlay} /></td>
            <td>{songName}</td>
            <td>{artistName}</td>
            <td>{trackNumber}</td>
            <td onClick={onClick2}><FontAwesomeIcon icon={faHeart} /></td>
        </tr>
    )
}

export default SongRow