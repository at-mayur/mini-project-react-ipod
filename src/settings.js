


function Settings(props){
    return (
        <div style={styles.settingsContainer} className="settings-container">

            <div style={styles.settingsStyle} className="settings">
                <span style={styles.compStyle}><i className="fa-solid fa-gears"></i></span>
                <span style={styles.compStyle}>Settings</span>
            </div>

        </div>
    );
}

const styles = {
    settingsContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    settingsStyle: {
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    compStyle: {
        margin: "10px 0"
    }

};


export default Settings;