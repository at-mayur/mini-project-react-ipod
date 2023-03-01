

// Sub menu within My Music
function MyMusicMenu(props){
    return (
        <div style={styles.listStyle} className="mymusic-menu-list">

            <div style={styles.lstItemStyle} className={props.activeItem === "Albums" ? "active" : ""}>
                <span>Albums</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

            <div style={styles.lstItemStyle} className={props.activeItem === "Artists" ? "active" : ""}>
                <span>Artists</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

        </div>
    );
}

const styles = {
    listStyle: {
        width: "60%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
        boxSizing: "border-box",
        borderRadius: 10
    },
    lstItemStyle: {
        width: "100%",
        height: "20%",
        fontSize: 18,
        boxSizing: "border-box",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s",
        borderRadius: 10
    },
    arrowStyle: {
        display: "inline-block",
        visibility: "hidden",
        marginRight: 5
    },

};


export default MyMusicMenu;