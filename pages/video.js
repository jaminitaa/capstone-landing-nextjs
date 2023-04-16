import React from "react";
import YouTube from "react-youtube";
  
export default class YoutubeVideo 
extends React.Component {
  render() {
    const opts = {
      height: "780",
      width: "1280",
      layout: "responsive",
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div>
        <YouTube videoId="6MtJNQR4oUM" 
            opts={opts} onReady={this._onReady} />
      </div>
    );
  }
  
  _onReady(event) {
    event.target.pauseVideo();
  }
}