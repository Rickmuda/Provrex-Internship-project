import React from "react";
import { Routes, Route,useNavigate } from "react-router-dom";

function Copyright() {
    const navigate = useNavigate();
    const handleRickVlogsClick = (event) => {
        event.stopPropagation ();
        navigate('/password')
    };
    
    return (
        <div>
                <p>© RICK AMBERGEN <button onClick={()=>navigate('/password')}>20</button>02</p>

        </div>
    );
}

export default Copyright;