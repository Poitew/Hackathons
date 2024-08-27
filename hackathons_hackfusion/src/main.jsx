import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './views/app';
import Roadmap from './views/roadmap';
import Courses from './views/courses';
import About from './views/about';
import "./css/main.css";
import "./css/responsive.css"

function Views(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/roadmap/:roadmapType' element={<Roadmap/>} />
                <Route path='/course/:courseType' element={<Courses/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Views/>
    </StrictMode>,
)