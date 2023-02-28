import React from "react";

import Tracker from "./tracker";
import Screen from './screen';

import ZingTouch from "zingtouch";
import song from "./static/Music/NightChanges.mp3";

class Ipod extends React.Component {

    constructor(){
        super();
        this.state = {
            activePage: "Menu",
            activeItem: "Now Playing"
        }
    }



    moveTracker = () => {

        if(this.state.activePage !== "Menu"){
            return;
        }

        var angleChange = 0;
        let self = this;

        let tracker = document.getElementById("tracker-circle");
        let activeRegion = new ZingTouch.Region(tracker);
    
        activeRegion.bind(tracker, "rotate", function(e){
            
            let distanceChange = e.detail.distanceFromLast;

            if(distanceChange>0){
                angleChange++;

                if(angleChange>100){
                    angleChange = 0;
                    if(self.state.activeItem==="Now Playing"){
                        self.setState({
                            activeItem: "My Music"
                        });
                    }
                    else if(self.state.activeItem==="My Music"){
                        self.setState({
                            activeItem: "Games"
                        });
                    }
                    else if(self.state.activeItem==="Games"){
                        self.setState({
                            activeItem: "Settings"
                        });
                    }
                    else if(self.state.activeItem==="Settings"){
                        self.setState({
                            activeItem: "Now Playing"
                        });
                    }
                }

            }
            else if(distanceChange<0){
                
                angleChange++;

                if(angleChange>100){
                    angleChange = 0;
                    if(self.state.activeItem==="Now Playing"){
                        self.setState({
                            activeItem: "Settings"
                        });
                    }
                    else if(self.state.activeItem==="My Music"){
                        self.setState({
                            activeItem: "Now Playing"
                        });
                    }
                    else if(self.state.activeItem==="Games"){
                        self.setState({
                            activeItem: "My Music"
                        });
                    }
                    else if(self.state.activeItem==="Settings"){
                        self.setState({
                            activeItem: "Games"
                        });
                    }
                }

            }

        });
    
    };


    openPage = () => {

        if(this.state.activePage==="Menu"){
            if(this.state.activeItem==="Now Playing"){
                this.setState({
                    activePage: "Now Playing Page",
                    activeItem: ""
                });
            }
        }

    };


    playOrPause = () => {

        let audio = document.getElementById("song-playing-now");

        if(audio.paused){
            audio.play();
        }
        else{
            audio.pause();
        }

    };

    componentDidMount(){

        let audio = document.getElementById("song-playing-now");

        this.setState({
            audio: audio
        });
    }
    

    render(){
  
      return (
        <div className="ipod">

                <div>
                    <audio id="song-playing-now" src={song}></audio>
                </div>

          <Screen activePage={this.state.activePage} activeItem={this.state.activeItem} song={this.state.audio} songName={"Night Changes"} />
          <Tracker moveTracker={this.moveTracker} openPage={this.openPage} playOrPause={this.playOrPause} />
        </div>
      );
  
    }
  }
  
  export default Ipod;