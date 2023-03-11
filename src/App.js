import './App.css'
import Navbar from './components/Navbar';
import Songlist from './components/Songlist'
import { useQuery } from '@apollo/client'
import { useSongs } from './hooks/useSongs';
import { GET_PLAYLISTS } from './hooks/navigations';
import Player from './components/Player'
import { useRef, useState } from 'react';


const App = () => {
    const playList = useQuery(GET_PLAYLISTS);
    const[activePlayList,setPlayList] = useState([1,"For You"])
    const songs = useSongs(activePlayList[0], "");
    const[currentSong,setCurrentSong] = useState();
    const[isPlaying,setIsPlaying] = useState(false);
    const audio = useRef(new Audio(currentSong?.url));
    const[prevSong,setPrevSong] = useState();
    const[nextSong,setNextSong] = useState();
    const[progress,setProgress] = useState();
    const songsAll = songs?.data?.getSongs;


    const setProgressBar = () => {
        setInterval(() => {
            setProgress(audio.current.currentTime)
            if(audio.current.ended){
                nextCickHandler(nextSong)
            }
        },1000)
        
    }
    const onSeek = (value) => {
        console.log(value)  
        setProgress(value)
        audio.current.currentTime =value
        console.log(audio.current.duration)       
    }

    const togglePlay = () => {
        isPlaying ? audio.current.pause():audio.current.play();
        setIsPlaying(!isPlaying);
    }

    const prevCickHandler = () => {
        playCurrentSong(prevSong);
        let index = songs.data.getSongs.findIndex((item)=>{
            return item._id === prevSong._id
         });
        setPreNextsong(index);    
    }

    const nextCickHandler = () => {
         playCurrentSong(nextSong);
         let index = songs.data.getSongs.findIndex((item)=>{
            return item._id === nextSong._id
        });
        setPreNextsong(index)
    }

    const playCurrentSong = (song) => { 
        audio.current.pause()
        setCurrentSong(song);
        audio.current = new Audio(song.url);
        audio.current.play();
        setIsPlaying(true);
        setProgressBar()
    }
    
    const setPreNextsong = (currentIndex) => {
        if(currentIndex === 0){
            setPrevSong(songsAll[songsAll.length-1])
            setNextSong(songsAll[currentIndex+1])
        }
        else if(currentIndex === songsAll.length-1){
            setPrevSong(songsAll[currentIndex-1])
            setNextSong(songsAll[0])
        }
        else{
            setPrevSong(songsAll[currentIndex-1])
            setNextSong(songsAll[currentIndex+1])
        }
    }

    const navigationHandler = (clickedPlaylist) => {
        setPlayList([clickedPlaylist.id,clickedPlaylist.title]); 
    }

    const onSelectSong = (songId) => {
        let index = songs.data.getSongs.findIndex((item) => {
           return item._id === songId
        });
        playCurrentSong(songsAll[index]);
        setPreNextsong(index)
    }  

    return (
        <div className='container'>
            <Navbar 
                playList = {playList}
                navigationHandler = {navigationHandler}
                activePlayList = {activePlayList}
            />
            <Songlist 
                songs = {songs} 
                activePlayList = {activePlayList} 
                onSelectSong   = {onSelectSong} 
                currentSong    = {currentSong}
            /> 
            { currentSong && <Player 
                currentSong = {currentSong} 
                togglePlay  = {togglePlay} 
                isPlaying   = {isPlaying} 
                prevCickHandler = {prevCickHandler}
                nextCickHandler = {nextCickHandler}
                progress = {progress}
                onSeek ={onSeek} 
            />} 
        </div>
    ) 
}

export default App;