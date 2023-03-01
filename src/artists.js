


function Artists(props){
    return (
        <div style={styles.artistContainer} className="artists-container">

            <div style={styles.artistStyle} className="artists">
                <span style={styles.compStyle}><i className="fa-solid fa-palette"></i></span>
                <span style={styles.compStyle}>Artists</span>
            </div>

        </div>
    );
}

const styles = {
    artistContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        borderRadius: 10
    },
    artistStyle: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        marginTop: 10
    },
    compStyle: {
        margin: "0 10px"
    }

};


export default Artists;