import React from "react";



class NowPlaying extends React.Component {

    constructor(){
        super();
        this.state = {
            audio: 0
        };
    }

    componentDidMount(){

        let audio = document.getElementById("song-playing-now");
        let self = this;

        audio.addEventListener("timeupdate", function(){

            let currDurr = Math.round(audio.currentTime);
            let totalDurr = Math.round(audio.duration);

            let progress = (currDurr/totalDurr) * 100;

            document.getElementById("progressbar-fill").style.width = progress+"%";
            document.getElementById("progressbar-dot").style.left = progress+"%";

            self.setState({
                width: progress
            });


        });

    }


    render(){

        let song = this.props.song;

        let currDurr = song.currentTime;
        let totalDurr = song.duration;

        return (
            <div style={styles.containerStyle} className="now-playing-container">

                <div style={styles.songTitleStyle}>
                    {this.props.songName}
                </div>

                <div style={styles.progressBarStyle} className="progress-bar">
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
                    <div id="progressbar-fill" style={styles.progressFillStyle} className="progress-fill"></div>
                    <div id="progressbar-dot" style={styles.progressDotStyle} className="progress-dot"></div>
                </div>

            </div>
        );

    }

}


const styles = {
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
    },
    progressBarStyle: {
        width: "90%",
        height: 2,
        backgroundColor: "white",
        margin: "30px auto",
        position: "relative"
    },
    progressDotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "orange",
        position: "absolute",
        top: 0,
        transform: "translate(-50%, -47%)"
    },
    progressFillStyle: {
        height: 0,
        backgroundColor: "orange",
        borderTop: "1px solid orange",
        borderBottom: "1px solid orange",
        position: "absolute",
        left: 0,
        top: 0
    },
    currDurationStyle: {
        position: "absolute",
        top: -30,
        left: 0,
        color: "white"
    },
    totalDurationStyle: {
        position: "absolute",
        top: -30,
        right: 0,
        color: "white"
    },
    songTitleStyle: {
        color: "white",
        position: "absolute",
        top: 40,
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
};


export default NowPlaying;