import React, {Component} from 'react';
import Request from '../helpers/request';
import MusicList from '../components/MusicList';
import MusicSelector from '../components/MusicSelector';
import SongSelected from '../components/SongSelected';

class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };

    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data}))
  }

  handleSongSelected(index){
    const chosenSong = this.state.songs[index];
    console.log(chosenSong);
    this.setState({selectedSong: chosenSong});
    console.log(chosenSong);
  }

  render(){
    return(
      <div>
      <h2>Top 20 Chart</h2>
      <MusicSelector data={this.state.songs} onSongSelected={this.handleSongSelected}/>
      <SongSelected song={this.state.selectedSong}/>
      <MusicList data={this.state.songs} />
      </div>
    )
  }
}

export default MusicContainer;
