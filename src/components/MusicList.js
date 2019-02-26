import React from 'react';
import MusicDetails from './MusicDetails';

const MusicList = (props) => {

  if(props.data.feed){
  const songNodes = props.data.feed.entry.map((song, index) => {
    return <MusicDetails song={song} key={index}></MusicDetails>
  })

  return (
    <div className="music-list">
      {songNodes}
    </div>
  )
}
else{
  return null;
}
}

export default MusicList;
