


function Albums(props){
    return (
        <div style={styles.albumContainer} className="albums-container">

            <div style={styles.albumStyle} className="albums">
                <span style={styles.compStyle}><i className="fa-solid fa-compact-disc"></i></span>
                <span style={styles.compStyle}>Albums</span>
            </div>

        </div>
    );
}

const styles = {
    albumContainer: {
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
    albumStyle: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        marginTop: 10
    },
    compStyle: {
        margin: "0 10px"
    }

};


export default Albums;