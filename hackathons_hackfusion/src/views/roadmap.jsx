import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import "../css/roadmap.css";

// Roadmap Text
import front_end from "../data/front-end.txt?raw"; // ?raw is used to get the content of the file
import back_end from "../data/back-end.txt?raw";
import full_stack from "../data/full-stack.txt?raw";
import DevOps from "../data/Devops.txt?raw";

function Roadmap(){
    const { roadmapType } = useParams();
    const [text, setText] = useState();

    useEffect(() => {
        switch(roadmapType){
            case "front-end":
                setText(front_end);
                break;
            
            case "back-end":
                setText(back_end);
                break;
            
            case "full-stack":
                setText(full_stack);
                break;

            case "DevOps":
                setText(DevOps);
                break;
        }

        window.scrollTo(0, 0);
    }, [roadmapType])

    return(
        <>
            <Header></Header>
            <div className="roadmap">
                <pre>{text}</pre>
            </div>
        </>
    );
}

export default Roadmap;