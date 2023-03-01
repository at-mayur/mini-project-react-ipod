// importing all the screens for various tabs
import Menu from "./menu";
import NowPlaying from "./nowPlaying";
import MyMusicMenu from "./myMusicMenu";
import Games from "./games";
import Settings from "./settings";
import Albums from "./albums";
import Artists from "./artists";

// functional component Screen
function Screen(props){

    // rendering different component based on active page and active item which we are receiving through props
    return (
        <div style={styles.screenStyle} className="screen">

            <img style={styles.wallpaperStyle} alt="Wallpaper" src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

            {/* Using ternary conditional operator to display required page according to current active page */}
            { props.activePage==="Menu" ? <Menu activeItem={props.activeItem} /> : null}

            { props.activePage==="Now Playing Page" ? <NowPlaying song={props.song} songName={props.songName} /> : null}

            { props.activePage==="My Music Menu" ? <MyMusicMenu activeItem={props.activeItem} /> : null}

            { props.activePage==="Games" ? <Games /> : null}

            { props.activePage==="Settings" ? <Settings /> : null}

            { props.activePage==="Albums" ? <Albums /> : null}

            { props.activePage==="Artists" ? <Artists /> : null}

        </div>
    );

}

// styles for screen
// made position relative and other component as absolute hence displaying other compponents over screen
const styles = {
    screenStyle: {
        width: "94%",
        height: "30vh",
        margin: "auto",
        position: "relative",
        transition: "all 0.3s",
        borderRadius: 10
    },
    wallpaperStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    }
};


export default Screen;