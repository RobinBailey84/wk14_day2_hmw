import React from 'react';

const MusicSelector = (props) => {
  if(props.data.feed){
    const options = props.data.feed.entry.map((song, index) => {
      return <option song={song} key={index}>{song['im:artist'].label}</option>
    })

    function handleChange(event){
      console.log(event.target.value);
      props.onSongSelected(event.target.value)
    }

    return(
      <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a song</option>
      {options}
      </select>
    )
  }
  else{
    return null;
  }



}
export default MusicSelector
