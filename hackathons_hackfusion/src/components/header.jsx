import React from "react";
import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "../css/header.css";

function Header(){
    return(
        <header>
            <HashLink to="/#homeID">
                <h1>Web-Learning</h1>
            </HashLink>

            <nav>
                <ul>
                    <li><HashLink to="/#topicsID">Courses</HashLink></li>
                    <li><HashLink to="/#footerID">Roadmaps</HashLink></li>
                    <li><Link to="/about">About this project</Link></li>
                </ul>
            </nav>

            <Outlet />
        </header>
    );
}

export default Header;