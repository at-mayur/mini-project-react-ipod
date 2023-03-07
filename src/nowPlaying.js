import React from "react";


// class component for Screen
class NowPlaying extends React.Component {

    // Constructor with state
    constructor(){
        super();
        this.state = {
            width: 0
        };
    }

    // function executes after this component mount
    componentDidMount(){

        // getting audio element
        let audio = this.props.song;
        let self = this;

        // fetching curr time and total duration
        let currDurr = audio.currentTime;
        let totalDurr = audio.duration;

        // calculating % song played
        let progress = (currDurr/totalDurr) * 100;

        // Setting progress fill and progress dot position
        let progressFill = document.getElementById("progressbar-fill");
        let progressDot = document.getElementById("progressbar-dot");

        if(progressFill!=null && progressDot!=null){

            document.getElementById("progressbar-fill").style.width = progress+"%";
            document.getElementById("progressbar-dot").style.left = progress+"%";

        }

        // adding event listener to that element
        audio.addEventListener("timeupdate", function(){

            // fetching curr time and total duration
            let currDurr = audio.currentTime;
            let totalDurr = audio.duration;

            // calculating % song played
            let progress = (currDurr/totalDurr) * 100;

            // Setting progress fill and progress dot position
            let progressFill = document.getElementById("progressbar-fill");
            let progressDot = document.getElementById("progressbar-dot");

            if(progressFill!=null && progressDot!=null){

                document.getElementById("progressbar-fill").style.width = progress+"%";
                document.getElementById("progressbar-dot").style.left = progress+"%";

            }

            // Using set state to re render component to display changes
            self.setState({
                width: progress
            });


        });

    }


    render(){

        let song = this.props.song;

        // getting currTime and total duration for song
        let currDurr = song.currentTime;
        let totalDurr = song.duration;

        return (
            <div style={styles.containerStyle} className="now-playing-container">

                {/* Setting song name */}
                <div style={styles.songTitleStyle}>
                    {this.props.songName}
                </div>

                <div style={styles.progressBarStyle} className="progress-bar">
                    {/* display curr durr and total duration */}
                    <div style={styles.currDurationStyle} className="current-duration">
                        {Math.round(currDurr/60)}
                        <span>:</span>
                        {Math.round(currDurr)%60}
                    </div>
                    <div style={styles.totalDurationStyle} className="song-duration">
                        {Math.round(totalDurr/60)}
                        <span>:</span>
                        {Math.round(totalDurr)%60}
                    </div>

                    {/* progress fill and progress dot */}
                    <div id="progressbar-fill" style={styles.progressFillStyle} className="progress-fill"></div>
                    <div id="progressbar-dot" style={styles.progressDotStyle} className="progress-dot"></div>
                </div>

            </div>
        );

    }

}


const styles = {
    // styles for main container
    containerStyle: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        backgroundSize: "contain",
        display: "flex",
        flexDirection: "column-reverse",
        borderRadius: 10
    },
    // styles for progress bar
    progressBarStyle: {
        width: "90%",
        height: 2,
        backgroundColor: "white",
        margin: "30px auto",
        position: "relative"
    },
    // style for progress dot
    progressDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "orange",
        position: "absolute",
        top: 0,
        transform: "translate(-50%, -47%)"
    },
    // style for progress fill
    progressFillStyle: {
        height: 0,
        backgroundColor: "orange",
        borderTop: "1px solid orange",
        borderBottom: "1px solid orange",
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translateY(20%)"
    },
    // style for curr durr
    currDurationStyle: {
        position: "absolute",
        top: -30,
        left: 0,
        color: "white"
    },
    // style for total durr
    totalDurationStyle: {
        position: "absolute",
        top: -30,
        right: 0,
        color: "white"
    },
    // style for song name
    songTitleStyle: {
        color: "white",
        position: "absolute",
        top: 40,
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
};


export default NowPlaying;