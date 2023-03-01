

// games screen component
function Games(props){
    return (
        <div style={styles.gameStyle} className="games-container">

            {/* Name and icon */}
            <div style={styles.gameTitleStyle} className="albums">
                <span style={styles.compStyle}><i className="fa-solid fa-gamepad"></i></span>
                <span style={styles.compStyle}>Games</span>
            </div>

        </div>
    );
}

const styles = {
    gameStyle: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        // Setting background image for game screen
        backgroundImage: "url(https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80)",
        backgroundSize: "cover",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        borderRadius: 10
    },
    gameTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        marginTop: 10,
        color: "white"
    },
    compStyle: {
        margin: "0 10px"
    }

};


export default Games;