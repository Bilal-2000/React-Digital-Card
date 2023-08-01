import React from "react";
import logo from "../images/Profile.png"

export default function Image(){
    return(
        <div className="image-div">
            <img className="image" src={logo} alt="Profile"></img>
        </div>
    )
}