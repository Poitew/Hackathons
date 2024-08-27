import React from "react";
import { Link } from "react-router-dom";
import "../css/topics.css"
import Data_topics from '../data/topics.json';

function Topics(){

    const data_topics = Data_topics;

    return(
        <div className="web-dev-topics" id="topicsID">
            <div className="header-topics">
                <h3>Front-End Development:</h3>
                <p>Start creating websites right now!</p>
            </div>
            <div className="topics-wrapper">
                <div className="topics-grid">
                    {data_topics.map((element, index) => (
                        <Single_Topics
                            key={index}
                            i={index}
                            name={element.name}
                            to={element.to}
                        >
                        </Single_Topics>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Single_Topics(props){

    function getColor(){ 
        return "hsl(" + 360 * Math.random() + ',' +
                   (25 + 70 * Math.random()) + '%,' + 
                   (85 + 10 * Math.random()) + '%)'
    }

    return(
        <Link to={props.to}>
            <div className="topic" style={{backgroundColor: getColor()}} >
                <p>{props.i + 1}. {props.name}</p>
            </div>
        </Link>
    );
}

export default Topics;