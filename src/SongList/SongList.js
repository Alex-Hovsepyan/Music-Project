import { useEffect, useState } from 'react'
import AddAllButton from './AddAllButton'
import PlayAllButton from './PlayAllButton'
import './SongList.scss'
import SongRow from './SongRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function SongList(){
    const songs = useSelector(state => state.song)
    const [newData, setNewData] = useState(songs)
    const [OurInterval, setOurInterval] = useState()
    
    useEffect(() => setNewData(songs), [songs])

    // SongSort - This function will sort the data in ascending or descending order

    function SongSort(event){
        const val = event.target.value
        if(val === '+'){
            setNewData([...songs].sort((a, b) => a.trackNumber - b.trackNumber))
        }
        
        else if(val === '-'){
            setNewData([...songs].sort((a, b) => b.trackNumber - a.trackNumber))
        }
    }

    // playAll - Enabling this function will start all songs in sequence
    
    function playAll(){
        if(OurInterval) clearInterval(OurInterval)
        let song = 0
        const h1 = document.querySelector('h1')
        const timer = setInterval(() => {
            if(song === newData.length) {
                h1.innerHTML = ''
                return
            }
            h1.innerHTML = newData[song].songName
            song++
        }, 500);
        setOurInterval(timer)
    }

    // addAll - This function will select all songs
    
    function addAll(){
        let songs = Array.from(document.querySelectorAll('tr'))
        songs.map(item => item.lastChild.classList.add('active'))
        setNewData(newData.map(item => ({...item, isLiked : true})))
    }

    // songPlay - Enabling this function, the music will start

    function songPlay(e){
        if(OurInterval) clearInterval(OurInterval)
        const h1 = document.querySelector('h1')
        h1.innerText = e.currentTarget.parentNode.children[1].innerText
    }

    // songFilter - With this function you can find music while searching for it

    function songFilter(){
        let song = document.querySelector('input[name="songFilter"]').value
        setNewData([...songs].filter(item => item.songName.toLowerCase().includes(song.toLowerCase())).sort((a, b) => a.songName.localeCompare(b.songName)))
    }

    // songLike - With this function you can add the music to your wishlist

    function songLike(e){
        let songname = e.currentTarget.parentNode.children[1]
        let song = newData.find(item => item.songName === songname.innerText)
        let updatedData = newData.map(item => {
            if(item.songName === songname.innerText){
                if(song.isLiked) {e.currentTarget.classList.remove('active')}
                else {e.currentTarget.classList.add('active')}
                return { ...item, isLiked: !item.isLiked }
            }
            return item
        })
        setNewData(updatedData)
    }

    return (
        <div className='songlist'>
            <div className='songlist_container'>
                <header>
                    <div className='left_part'>
                        <PlayAllButton onClick={playAll} />
                        <AddAllButton onClick={addAll} />
                    </div>
                    <div className='right_part'>
                        <select onChange={(event) => SongSort(event)}>
                            <option value="">Тrack Number</option>
                            <option value="+">in ascending order</option>
                            <option value="-">in descending order</option>
                        </select>
                        <div>
                            <input name='songFilter' placeholder='Filter' />
                            <button onClick={songFilter}><FontAwesomeIcon icon={faSearch} /></button>
                        </div>
                    </div>
                </header>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Song Name</th>
                            <th>Artist Name</th>
                            <th>Track</th>
                            <th></th>
                        </tr>
                        {newData && newData.map(item => <SongRow key={item.trackNumber} onClick={songPlay} onClick2={(event) => songLike(event)} artistName={item.artistName} songName={item.songName} trackNumber={item.trackNumber} />)}
                    </tbody>
                </table>
            </div>
            <h1></h1>
        </div>
    )
}

export default SongList