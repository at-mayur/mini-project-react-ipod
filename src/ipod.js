import React from "react";

// importing screen and tracker component
import Tracker from "./tracker";
import Screen from './screen';

// importing Zingtouch to add rotate event listener to tracker
import ZingTouch from "zingtouch";

// importing static file song to play it in our app
import song from "./static/Music/NightChanges.mp3";

class Ipod extends React.Component {

    constructor(){
        super();
        // Setting state for component
        this.state = {
            // active page for current displaying page on screen
            activePage: "",
            // active item for current highlighted item on menu list screen
            activeItem: ""
        }
    }


    // function to select items from list with circular motion on circle of buttons tracker
    moveTracker = () => {

        // Don't action if active page is other than menu pages
        if(this.state.activePage !== "Menu" && this.state.activePage !== "My Music Menu"){
            return;
        }

        // declaring variables
        var angleChange = 0;
        let self = this;

        // Declaring region for zingtouch
        let tracker = document.getElementById("tracker-circle");
        let activeRegion = new ZingTouch.Region(tracker);
    
        // binding event listener to target element i.e. our track circle
        activeRegion.bind(tracker, "rotate", function(e){
            
            // getting distance change from last position
            let distanceChange = e.detail.distanceFromLast;

            // action items for clockwise motion i.e. move through list from top to bottom
            if(distanceChange>0){
                // note total angle change
                angleChange++;

                // change selected item if change crosses 50
                if(angleChange>100){
                    // set change to 0 again to detect next change
                    angleChange = 0;

                    // action items if main menu page is open
                    if(self.state.activePage === "Menu"){

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
                    // action items for sub menu page i.e. page within My Music is open
                    else{

                        if(self.state.activeItem==="Albums"){
                            self.setState({
                                activeItem: "Artists"
                            });
                        }
                        else if(self.state.activeItem==="Artists"){
                            self.setState({
                                activeItem: "Albums"
                            });
                        }

                    }
                    
                }

            }
            // action items for counter-clockwise motion i.e. move through list from bottom to top
            else if(distanceChange<0){
                
                angleChange++;

                if(angleChange>100){
                    angleChange = 0;

                    // action items if main menu page is open
                    if(self.state.activePage === "Menu"){

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

                    // action items for sub menu page i.e. page within My Music is open
                    else{

                        if(self.state.activeItem==="Albums"){
                            self.setState({
                                activeItem: "Artists"
                            });
                        }
                        else if(self.state.activeItem==="Artists"){
                            self.setState({
                                activeItem: "Albums"
                            });
                        }
                        
                    }
                    
                }

            }

        });
    
    };


    // Function to act upon click of ok btn i.e. middle btn
    openPage = () => {

        // action items for main menu list
        if(this.state.activePage==="Menu"){
            // get curr active item from state and make active page respective to that item.
            // set that active page using set state

            if(this.state.activeItem==="Now Playing"){
                this.setState({
                    activePage: "Now Playing Page",
                    activeItem: ""
                });
            }
            else if(this.state.activeItem==="My Music"){
                this.setState({
                    activePage: "My Music Menu",
                    activeItem: "Albums"
                });
            }
            else if(this.state.activeItem==="Games"){
                this.setState({
                    activePage: "Games",
                    activeItem: ""
                });
            }
            else if(this.state.activeItem==="Settings"){
                this.setState({
                    activePage: "Settings",
                    activeItem: ""
                });
            }
        }
        // action items for sub menu page i.e. page within My Music is open
        else if(this.state.activePage==="My Music Menu"){
            // get curr active item from state and make active page respective to that item.
            // set that active page using set state

            if(this.state.activeItem==="Albums"){
                this.setState({
                    activePage: "Albums",
                    activeItem: ""
                });
            }
            else if(this.state.activeItem==="Artists"){
                this.setState({
                    activePage: "Artists",
                    activeItem: ""
                });
            }
            
        }

    };


    // Function to act upon click of Menu btn i.e. Menu btn
    goBackOrMenu = () => {
        // get curr active page from state and make active page as the respective back page for that page.
        // set that active page using set state

        if(this.state.activePage===""){
            this.setState({
                activePage: "Menu",
                activeItem: "Now Playing"
            });
        }
        else if(this.state.activePage==="Now Playing Page"){
            this.setState({
                activePage: "Menu",
                activeItem: "Now Playing"
            });
        }
        else if(this.state.activePage==="Artists"){
            this.setState({
                activePage: "My Music Menu",
                activeItem: "Artists"
            });
        }
        else if(this.state.activePage==="Albums"){
            this.setState({
                activePage: "My Music Menu",
                activeItem: "Albums"
            });
        }
        else if(this.state.activePage==="My Music Menu"){
            this.setState({
                activePage: "Menu",
                activeItem: "My Music"
            });
        }
        else if(this.state.activePage==="Games"){
            this.setState({
                activePage: "Menu",
                activeItem: "Games"
            });
        }
        else if(this.state.activePage==="Settings"){
            this.setState({
                activePage: "Menu",
                activeItem: "Settings"
            });
        }
        else if(this.state.activePage==="Menu"){
            this.setState({
                activePage: "",
                activeItem: ""
            });
        }

    };


    // Function to act upon click of Play-Pause btn i.e. Play or Pause audio on click of this btn
    playOrPause = () => {

        // get audio element mounted
        let audio = document.getElementById("song-playing-now");

        // if audio is paused then play
        if(audio.paused){
            audio.play();
        }
        // if audio is not paused then pause it
        else{
            audio.pause();
        }

    };

    // Function which executes after mounting this component
    componentDidMount(){

        // get audio element mounted
        let audio = document.getElementById("song-playing-now");

        // set audio element in state using set state to pass it as props to now playing page
        this.setState({
            audio: audio
        });
    }
    

    render(){
  
      return (
        <div className="ipod">

            {/* Audio element to play song */}
            <div>
                <audio id="song-playing-now" src={song}></audio>
            </div>

            {/* Mounting screen and tracker btn */}
            {/* passing event handlers and active page active item and audio as props */}
            <Screen activePage={this.state.activePage} activeItem={this.state.activeItem} song={this.state.audio} songName={"Night Changes"} />
            <Tracker moveTracker={this.moveTracker} openPage={this.openPage} playOrPause={this.playOrPause} goBackOrMenu={this.goBackOrMenu} />
        </div>
      );
  
    }
  }
  
  export default Ipod;