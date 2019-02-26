import React from 'react';

const SongSelected = (props) => {
  if(!props.data){
    return <p>Choose a Song</p>
  }
  return(
    <div>
    <p>Artist: {this.props.song['im:artist'].label}</p>
    <p>Song Title: {this.props.song['im:name'].label}</p>
    <hr/>
    </div>
  )
}

export default SongSelected;
