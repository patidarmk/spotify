import { useState } from 'react';
import Loader from './Loader';
const Songlist = (props) => {
    const{data, loading} = props.songs;
    const[search, setSearch] = useState("")
    const clickHandler = (event) => {
        setSearch(event.target.value)
    }
    let filteredArray = []
    if(!loading){
         filteredArray = data.getSongs.filter((song,index) => song.title.includes(search))
    }
    return ( 
        <section className='songlist-section'>
            <span className='songlist-section-playist'>{props.activePlayList[1]}</span>
            <input type="text" className='search-box' placeholder = "Search Song,Artist" onChange = {clickHandler}/>
             <div className='songlist-container'>
                { loading &&  <Loader/>} 
                { !loading && data && filteredArray.map((song,index) => {
                        let minutes = Math.floor(song.duration/ 60);
                        let seconds = Math.ceil(song.duration % 60);
                return ( 
                    <div key={song._id} onClick={()=>{props.onSelectSong(song._id)}} className={props.currentSong && props.currentSong._id===song._id?'song-box active':"song-box"}>
                        <div className='song-box-details'> 
                            <img className='img' src={song.photo} alt="cover"/>
                            <div className='song-box-details-title'>
                                <div className='song-box-details-title-main'>{song.title}</div>
                                <div className='song-box-details-title-artist'>{song.artist}</div>
                            </div>
                        </div>
                        
                        <div className="song-box-time">{minutes+":"+seconds}</div>
                    </div>
                    )}
                )}
            </div>
        </section>
    )}

export default Songlist;