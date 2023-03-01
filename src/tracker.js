// Styling for this component in App.css file

// functional component tracker
function trackor(props) {
    return (
        <div className="tracker-container">

            {/* Track circle */}
            <div onMouseOver={ () => {props.moveTracker()} } id="tracker-circle" className="track-circle">

                {/* Middle OK btn */}
                <div className="ok-btn">
                    <button onClick={() => props.openPage()} className="btn" type="button">
                        <i className="fa-regular fa-circle"></i>
                    </button>
                </div>

                {/* Top MENU btn */}
                <div className="menu-btn">
                    <button onClick={() => props.goBackOrMenu()} className="btn" type="button">Menu</button>
                </div>

                {/* Right next btn */}
                <div className="btn next-btn">
                    <i className="fa-solid fa-forward-fast"></i>
                </div>

                {/* Left Prev btn */}
                <div className="btn prev-btn">
                    <i className="fa-solid fa-backward-fast"></i>
                </div>

                {/* Bottom play pause btn */}
                <div onClick={() => props.playOrPause()} className="btn play-pause-btn">
                    <i className="fa-solid fa-play"></i>
                    &nbsp;
                    <i className="fa-solid fa-pause"></i>
                </div>


            </div>

        </div>
    );
}


export default trackor;