import React from "react";
import "./Scorebug.css";

function Scorebug() {
    return (
        <div className="container">
            <div className="spacer left"></div>
            <div className="teams"></div>
            <div className="timer"></div>
            <div className="mj">
                <img src="/jordan-logo.png" />
            </div>
            <div className="espn">
                <img src="/espn-logo.svg" />
            </div>
            <div className="spacer right"></div>
        </div>
    );
}

export default Scorebug;
