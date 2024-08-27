import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer id="footerID">
            <h4>Web-Learning</h4> <br/>

            <div className="footer-sections">
                <p>Courses</p>
                <ul>
                    <li><Link to="/course/html">HTML</Link></li>
                    <li><Link to="/course/css">CSS</Link></li>
                    <li><Link to="/course/javascript">JAVASCRIPT</Link></li>
                    <li><Link to="/course/vue">VUE.JS</Link></li>
                </ul>
            </div>

            <div className="footer-sections">
                <p>Roadmaps</p>
                <ul>
                    <li><Link to="/roadmap/front-end">Front-End</Link></li>
                    <li><Link to="/roadmap/back-end">Back-End</Link></li>
                    <li><Link to="/roadmap/full-stack">Full Stack</Link></li>
                    <li><Link to="/roadmap/DevOps">DevOps</Link></li>
                </ul>
            </div>

            <img src="/icons/rocket.png" alt="Rocket Image" />

        </footer>
    );
}

export default Footer;