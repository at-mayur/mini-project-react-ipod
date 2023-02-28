import Menu from "./menu";
import NowPlaying from "./nowPlaying";

function Screen(props){

    return (
        <div style={styles.screenStyle} className="screen">

            <img style={styles.wallpaperStyle} alt="Wallpaper" src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

            { props.activePage==="Menu" ? <Menu activeItem={props.activeItem} /> : null}

            { props.activePage==="Now Playing Page" ? <NowPlaying song={props.song} songName={props.songName} /> : null}

        </div>
    );

}


const styles = {
    screenStyle: {
        width: "90%",
        height: "30vh",
        margin: "auto",
        position: "relative"
    },
    wallpaperStyle: {
        width: "100%",
        height: "100%"
    }
};


export default Screen;