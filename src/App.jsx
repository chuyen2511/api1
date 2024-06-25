import React, { useState } from "react";
import Navbar from "./components/navar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Video from "./pages/video/video";

const App =()=>{
    const [sidebar,setSidebar] = useState(true);
    return(
        <div>
            <Navbar setSidebar={setSidebar}/>
            <Routes>
                <Route path="/" element={<Home sidebar={sidebar} />}/>
                <Route path="/video/:categoryID/:videoID" element={<Video/>}/>               
            </Routes>
        </div>
    );
};

export default App;