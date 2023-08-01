import React from "react";
import twitter from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import instagram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="inner-footer">
                <img src={twitter} alt="twitter"></img>
                <img src={facebook} alt="facebook"></img>
                <img src={instagram} alt="instagram"></img>
                <img src={github} alt="github"></img>
            </div>
        </div>
    )
}