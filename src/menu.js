

// Menu item
function Menu(props){
    return (
        // Main component holding list
        <div style={styles.listStyle} className="menu-list">
            {/* Setting classname active if it is the curr active item
            Styling for class active in App.css file */}

            <div style={styles.lstItemStyle} className={props.activeItem === "Now Playing" ? "active" : ""}>
                <span>Now Playing</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

            <div style={styles.lstItemStyle} className={props.activeItem === "My Music" ? "active" : ""}>
                <span>My Music</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

            <div style={styles.lstItemStyle} className={props.activeItem === "Games" ? "active" : ""}>
                <span>Games</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

            <div style={styles.lstItemStyle} className={props.activeItem === "Settings" ? "active" : ""}>
                <span>Settings</span>
                <span className="arrow" style={styles.arrowStyle}><i className="fa-solid fa-chevron-right"></i></span>
                
            </div>

        </div>
    );
}

// Styles for item
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


export default Menu;