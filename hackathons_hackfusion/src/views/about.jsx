import React from "react";
import Header from "../components/header";
import "../css/about.css";

function About(){
    return(
        <>
            <Header></Header>
            <div className="about">
                <p>
                    This project was made for the hackathon hosted by HackFusion, for this hackathon the partecipant were needed to build
                    something with a social impact. 
                    Because of this I decided to build a website where you can learn the basics of web development at no cost.
                </p>
            </div>
        </>
    );
}

export default About;