import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "780",
      width: "1280",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
        <YouTube videoId="6MtJNQR4oUM" className="youtubeVideo"
            opts={opts} onReady={this._onReady} />
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}