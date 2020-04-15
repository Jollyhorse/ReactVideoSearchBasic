import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

const YOUTUBEKEY = "AIzaSyD7LR80eoW290G5_x36UoP2yQQaAl6-UW4";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: YOUTUBEKEY
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
