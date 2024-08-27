import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import "../css/courses.css";

import html from "../data/html.md?raw";
import css from "../data/css.md?raw";
import javascript from "../data/javascript.md?raw";
import vue from "../data/vue.md?raw";

function Courses(){

    const { courseType } = useParams();
    const [ text, setText ] = useState()

    useEffect(() => {
        switch(courseType){
            case "html":
                setText(html);
                break;
            case "css":
                setText(css);
                break;
            case "javascript":
                setText(javascript);
                break;
            case "vue":
                setText(vue);
                break;
            default:
                setText("Course not avaible");
        }

        window.scrollTo(0, 0);
    }, [courseType]);

    return(
        <>
            <Header></Header>
            <div className="course-text">
                <div className="text">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </>
    );
}

export default Courses;