import React, {Component} from 'react';

class MusicDetails extends Component{
  render(){
    return(
      <div className="music-details">
      <p>Artist: {this.props.song['im:artist'].label}</p>
      <p>Song Title: {this.props.song['im:name'].label}</p>
      <hr/>
      </div>
    )
  }
}

export default MusicDetails;
