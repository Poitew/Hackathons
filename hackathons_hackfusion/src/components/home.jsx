import React from "react";
import "../css/home.css"

function Home(){
    return(
        <main id="homeID">
            <div className="shade-bg"></div>

            <div className="content">
                <div className="title">
                    <h2>Learn Web Development... <br/> for free</h2>
                    <p>Seriously, no catch, your journey is only a click away.</p>
                </div>

                <div className="arrow-img">
                    <img src="/icons/angle-down.svg" alt="Arrow Down" />
                </div>

                <a href="#topicsID">
                    <div className="start-button">
                        <p>Start Learning</p>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default Home;