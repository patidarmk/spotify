import {memo} from 'react'
const Player =(props) =>{
   
return (
    <>
       <div className='playBox'>
        <section className="player">
            <div className="player-currentSong-title">
               {props.currentSong.title}
            </div>
            <div className="player-currentSong-artist">{props.currentSong.artist}</div>
            <img  className="player-currentSong-cover" src={props.currentSong.photo} alt="cover" />
            <div>
                <input type="range" className="player-currentSong-progress"  onChange={(e)=>props.onSeek(e.target.value)} step="1"  value = {props.progress} min="0" max="217.517714" /></div>
            <div className='player-controls'>
                <svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.19999 2.99998C5.19999 3.63649 4.94714 4.24694 4.49705 4.69703C4.04696 5.14712 3.43651 5.39997 2.79999 5.39997C2.16347 5.39997 1.55302 5.14712 1.10294 4.69703C0.65285 4.24694 0.399994 3.63649 0.399994 2.99998C0.399994 2.36346 0.65285 1.75301 1.10294 1.30292C1.55302 0.852832 2.16347 0.599976 2.79999 0.599976C3.43651 0.599976 4.04696 0.852832 4.49705 1.30292C4.94714 1.75301 5.19999 2.36346 5.19999 2.99998ZM12.4 2.99998C12.4 3.63649 12.1471 4.24694 11.697 4.69703C11.247 5.14712 10.6365 5.39997 9.99999 5.39997C9.36347 5.39997 8.75302 5.14712 8.30294 4.69703C7.85285 4.24694 7.59999 3.63649 7.59999 2.99998C7.59999 2.36346 7.85285 1.75301 8.30294 1.30292C8.75302 0.852832 9.36347 0.599976 9.99999 0.599976C10.6365 0.599976 11.247 0.852832 11.697 1.30292C12.1471 1.75301 12.4 2.36346 12.4 2.99998V2.99998ZM17.2 5.39997C17.8365 5.39997 18.447 5.14712 18.897 4.69703C19.3471 4.24694 19.6 3.63649 19.6 2.99998C19.6 2.36346 19.3471 1.75301 18.897 1.30292C18.447 0.852832 17.8365 0.599976 17.2 0.599976C16.5635 0.599976 15.953 0.852832 15.5029 1.30292C15.0528 1.75301 14.8 2.36346 14.8 2.99998C14.8 3.63649 15.0528 4.24694 15.5029 4.69703C15.953 5.14712 16.5635 5.39997 17.2 5.39997Z" fill="white"/>
                </svg>
                <svg onClick={props.prevCickHandler} className="player-controls-action" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.712 0.389371C21.9529 0.228605 22.233 0.136269 22.5224 0.122215C22.8117 0.108162 23.0994 0.172916 23.3548 0.309572C23.6102 0.446227 23.8237 0.649657 23.9726 0.898156C24.1214 1.14666 24.2 1.4309 24.2 1.72057V14.5206C24.2 14.8102 24.1214 15.0945 23.9726 15.343C23.8237 15.5915 23.6102 15.7949 23.3548 15.9316C23.0994 16.0682 22.8117 16.133 22.5224 16.1189C22.233 16.1049 21.9529 16.0125 21.712 15.8518L13 10.0438V14.5206C13 14.8102 12.9214 15.0945 12.7726 15.343C12.6237 15.5915 12.4102 15.7949 12.1548 15.9316C11.8994 16.0682 11.6117 16.133 11.3224 16.1189C11.033 16.1049 10.7529 16.0125 10.512 15.8518L0.911984 9.45177C0.692852 9.30565 0.513181 9.1077 0.388913 8.87548C0.264646 8.64325 0.199625 8.38395 0.199625 8.12057C0.199625 7.85719 0.264646 7.59788 0.388913 7.36566C0.513181 7.13344 0.692852 6.93549 0.911984 6.78937L10.512 0.389371C10.7529 0.228605 11.033 0.136269 11.3224 0.122215C11.6117 0.108162 11.8994 0.172916 12.1548 0.309572C12.4102 0.446227 12.6237 0.649657 12.7726 0.898156C12.9214 1.14666 13 1.4309 13 1.72057V6.19737L21.712 0.389371Z" fill="white"/>
                </svg>
                { !props.isPlaying && <svg className="player-controls-action" onClick= {props.togglePlay} width="49" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 48.1205C30.3652 48.1205 36.4697 45.5919 40.9706 41.091C45.4714 36.5902 48 30.4857 48 24.1205C48 17.7553 45.4714 11.6508 40.9706 7.14992C36.4697 2.64905 30.3652 0.120483 24 0.120483C17.6348 0.120483 11.5303 2.64905 7.02944 7.14992C2.52856 11.6508 0 17.7553 0 24.1205C0 30.4857 2.52856 36.5902 7.02944 41.091C11.5303 45.5919 17.6348 48.1205 24 48.1205ZM22.665 15.6245C22.2132 15.323 21.688 15.1499 21.1455 15.1236C20.6031 15.0972 20.0636 15.2186 19.5847 15.4749C19.1058 15.7311 18.7055 16.1125 18.4264 16.5785C18.1473 17.0444 17.9999 17.5774 18 18.1205V30.1205C17.9999 30.6636 18.1473 31.1966 18.4264 31.6625C18.7055 32.1284 19.1058 32.5099 19.5847 32.7661C20.0636 33.0223 20.6031 33.1437 21.1455 33.1174C21.688 33.091 22.2132 32.9179 22.665 32.6165L31.665 26.6165C32.0759 26.3425 32.4128 25.9714 32.6458 25.5359C32.8788 25.1005 33.0007 24.6143 33.0007 24.1205C33.0007 23.6266 32.8788 23.1404 32.6458 22.705C32.4128 22.2696 32.0759 21.8985 31.665 21.6245L22.665 15.6245Z" fill="white"/>
                </svg> }
                { props.isPlaying && <svg className="player-controls-action" onClick= {props.togglePlay} fill="white" height="49" width="49" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320
                    c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320
                    c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"/>
                </svg>}
                <svg onClick={props.nextCickHandler} className="player-controls-action" width="25" height="17"  viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28802 0.389371C3.04706 0.228605 2.76697 0.136269 2.47764 0.122215C2.18832 0.108162 1.9006 0.172916 1.64519 0.309572C1.38979 0.446227 1.17627 0.649657 1.02742 0.898156C0.87857 1.14666 0.799975 1.4309 0.800018 1.72057V14.5206C0.799975 14.8102 0.87857 15.0945 1.02742 15.343C1.17627 15.5915 1.38979 15.7949 1.64519 15.9316C1.9006 16.0682 2.18832 16.133 2.47764 16.1189C2.76697 16.1049 3.04706 16.0125 3.28802 15.8518L12 10.0438V14.5206C12 14.8102 12.0786 15.0945 12.2274 15.343C12.3763 15.5915 12.5898 15.7949 12.8452 15.9316C13.1006 16.0682 13.3883 16.133 13.6776 16.1189C13.967 16.1049 14.2471 16.0125 14.488 15.8518L24.088 9.45177C24.3071 9.30565 24.4868 9.1077 24.6111 8.87548C24.7354 8.64325 24.8004 8.38395 24.8004 8.12057C24.8004 7.85719 24.7354 7.59788 24.6111 7.36566C24.4868 7.13344 24.3071 6.93549 24.088 6.78937L14.488 0.389371C14.2471 0.228605 13.967 0.136269 13.6776 0.122215C13.3883 0.108162 13.1006 0.172916 12.8452 0.309572C12.5898 0.446227 12.3763 0.649657 12.2274 0.898156C12.0786 1.14666 12 1.4309 12 1.72057V6.19737L3.28802 0.389371Z" fill="white"/>
                </svg>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.31444 0.478175C9.51743 0.560531 9.6909 0.699934 9.81292 0.87876C9.93495 1.05758 10.0001 1.2678 10 1.48283V14.5303C9.99995 14.7453 9.93476 14.9555 9.81267 15.1342C9.69057 15.313 9.51706 15.4523 9.31406 15.5346C9.11106 15.6169 8.88769 15.6384 8.67218 15.5965C8.45668 15.5545 8.25872 15.451 8.10333 15.299L3.98444 11.2684H1.11111C0.816426 11.2684 0.53381 11.1539 0.325437 10.95C0.117063 10.7461 0 10.4695 0 10.1811V5.83199C0 5.54362 0.117063 5.26706 0.325437 5.06316C0.53381 4.85925 0.816426 4.7447 1.11111 4.7447H3.98444L8.10333 0.714117C8.25871 0.561969 8.45672 0.458341 8.67231 0.416342C8.88789 0.374343 9.11136 0.395862 9.31444 0.478175ZM15.1744 0.318343C15.3828 0.114508 15.6654 0 15.96 0C16.2546 0 16.5372 0.114508 16.7456 0.318343C17.7787 1.32697 18.598 2.52538 19.1565 3.84476C19.715 5.16413 20.0017 6.57848 20 8.00657C20.0017 9.43465 19.715 10.849 19.1565 12.1684C18.598 13.4877 17.7787 14.6862 16.7456 15.6948C16.536 15.8928 16.2553 16.0024 15.964 16C15.6727 15.9975 15.394 15.8831 15.188 15.6815C14.982 15.4799 14.8651 15.2072 14.8626 14.9222C14.86 14.6371 14.972 14.3624 15.1744 14.1574C16.0013 13.3507 16.6569 12.3919 17.1037 11.3363C17.5505 10.2807 17.7796 9.14911 17.7778 8.00657C17.7778 5.60366 16.7844 3.43125 15.1744 1.85577C14.9661 1.65187 14.8491 1.37537 14.8491 1.08706C14.8491 0.798747 14.9661 0.52224 15.1744 0.318343ZM12.0311 3.3932C12.1343 3.2921 12.2568 3.21191 12.3917 3.15719C12.5266 3.10247 12.6712 3.07431 12.8172 3.07431C12.9632 3.07431 13.1078 3.10247 13.2427 3.15719C13.3776 3.21191 13.5001 3.2921 13.6033 3.3932C14.2232 3.99845 14.7148 4.71759 15.0498 5.50929C15.3848 6.30099 15.5567 7.14967 15.5556 8.00657C15.5566 8.86345 15.3847 9.71211 15.0497 10.5038C14.7147 11.2955 14.2232 12.0146 13.6033 12.6199C13.3948 12.824 13.1121 12.9386 12.8172 12.9386C12.5224 12.9386 12.2396 12.824 12.0311 12.6199C11.8226 12.4159 11.7055 12.1392 11.7055 11.8507C11.7055 11.5621 11.8226 11.2854 12.0311 11.0814C12.4446 10.6782 12.7726 10.199 12.9961 9.67127C13.2196 9.14356 13.3342 8.5778 13.3333 8.00657C13.3342 7.43532 13.2196 6.86955 12.9962 6.34183C12.7727 5.8141 12.4447 5.33487 12.0311 4.93171C11.9278 4.83073 11.8458 4.71082 11.7899 4.57882C11.734 4.44683 11.7052 4.30534 11.7052 4.16245C11.7052 4.01957 11.734 3.87808 11.7899 3.74609C11.8458 3.61409 11.9278 3.49418 12.0311 3.3932Z" fill="white"/>
                </svg>
            </div>
        </section>
        </div>
        <div className = "player-bottom">
            <div className='player-bottom-song-box'>
                <div className='song-box-details'> 
                    <img className='img' src={props.currentSong.photo} alt="cover"/>
                    <div className='song-box-details-title'>
                        <div className='song-box-details-title-main'>{props.currentSong.title}</div>
                            <div className='song-box-details-title-artist'>{props.currentSong.artist}</div>
                    </div>                       
                </div>
                <div>
                    { !props.isPlaying &&
                    <svg className="player-controls-action" onClick= {props.togglePlay} width="49" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 48.1205C30.3652 48.1205 36.4697 45.5919 40.9706 41.091C45.4714 36.5902 48 30.4857 48 24.1205C48 17.7553 45.4714 11.6508 40.9706 7.14992C36.4697 2.64905 30.3652 0.120483 24 0.120483C17.6348 0.120483 11.5303 2.64905 7.02944 7.14992C2.52856 11.6508 0 17.7553 0 24.1205C0 30.4857 2.52856 36.5902 7.02944 41.091C11.5303 45.5919 17.6348 48.1205 24 48.1205ZM22.665 15.6245C22.2132 15.323 21.688 15.1499 21.1455 15.1236C20.6031 15.0972 20.0636 15.2186 19.5847 15.4749C19.1058 15.7311 18.7055 16.1125 18.4264 16.5785C18.1473 17.0444 17.9999 17.5774 18 18.1205V30.1205C17.9999 30.6636 18.1473 31.1966 18.4264 31.6625C18.7055 32.1284 19.1058 32.5099 19.5847 32.7661C20.0636 33.0223 20.6031 33.1437 21.1455 33.1174C21.688 33.091 22.2132 32.9179 22.665 32.6165L31.665 26.6165C32.0759 26.3425 32.4128 25.9714 32.6458 25.5359C32.8788 25.1005 33.0007 24.6143 33.0007 24.1205C33.0007 23.6266 32.8788 23.1404 32.6458 22.705C32.4128 22.2696 32.0759 21.8985 31.665 21.6245L22.665 15.6245Z" fill="white"/>
                    </svg>}
                    { props.isPlaying && 
                    <svg className="player-controls-action" onClick= {props.togglePlay} fill="white" height="49" width="49" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
                        <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320
                        c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320
                        c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"/>
                    </svg>}
                </div>
            </div>
        </div>
    </>
    )
}

export default memo(Player);