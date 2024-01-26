import './MusicUploadForm.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSongName } from '../reducers/songReducer'
import { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'

function MusicUploadForm(){
    const songs = useSelector(state => state.song)
    const [loading, setLoading] = useState()
    const dispatch = useDispatch()
    
    // SongUpload - With This function user can upload different music

    function songUpload(){
        try {
            let song = document.getElementById('song').files[0].name
            song = song.replace(song.slice(-4))
            
            if(songs.find(item => item.songName != song)){
                let file = document.getElementById('song').files[0].name
                song = file.replace(file.slice(-4), '')

                if(!songs.find(item => item.file === file)) {
                    const updatedData = {
                        songName : song,
                        artistName : '',
                        trackNumber : songs.length + 1,
                        file : file
                    }
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        dispatch(setSongName(updatedData))
                        document.querySelector('h2').innerText = ''
                        document.getElementById('song').value = ''
                    }, 3000);
                }
                else {
                    document.querySelector('h2').innerText = 'Error: Select another file'
                    document.getElementById('song').value = ''
                }
            }
        }
        catch {
            const h2 = document.querySelector('h2')
            h2.innerText = 'Error: You need to select the file'
        }
    }

    // songNameFunc - This function will show the song name after selecting it

    function songNameFunc(){
        let song = document.getElementById('song').files[0].name
        song = song.replace(song.slice(-4), '')
        document.querySelector('h2').innerText = song
    }

    return (
        <div className='upload_container'>
            <h1>Add New Song</h1>
            {loading ? 
            <div className='loading'>
                <BallTriangle
                    height={600}
                    width={600}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /> 
                <h1>Uploading...</h1> 
            </div>: null}
            <label htmlFor="song">Click Here</label>
            <input onChange={songNameFunc} type="file" accept='.mp3, .wav' id="song" name="song" style={{display: 'none'}} />
            <button onClick={songUpload}>Submit</button>
            <h2></h2>
        </div>
    )
}

export default MusicUploadForm