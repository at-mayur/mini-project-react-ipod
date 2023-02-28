

function trackor(props) {
    return (
        <div className="tracker-container">

            <div onMouseOver={ () => {props.moveTracker()} } id="tracker-circle" className="track-circle">

                <div className="ok-btn">
                    <button onClick={() => props.openPage()} className="btn" type="button">
                        <i className="fa-regular fa-circle"></i>
                    </button>
                </div>

                <div className="menu-btn">
                    <button className="btn" type="button">Menu</button>
                </div>

                <div className="btn next-btn">
                    <i className="fa-solid fa-forward-fast"></i>
                </div>

                <div className="btn prev-btn">
                    <i className="fa-solid fa-backward-fast"></i>
                </div>

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