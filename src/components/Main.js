import React from "react";
import mailogo from "../images/Mail.svg";
import linkedinlogo from "../images/linkedin.svg";

export default function Main(){
    return (
        <div className="main">
            <div className="profile">
                    <div className="profile-inner">
                    <p className="title">Muhammad Bilal</p>
                    <p className="role">Full Stack developer</p>
                    <p className="stack">React and Django</p>
                </div>
            </div>
            <div className="contact-btn">
                <div className="contact-btn-inner">
                    <button className="email-btn"><div className="email-btn-div"><img src={mailogo} alt="mailbutton"></img><span className="email-span">Email</span></div></button>
                    <button className="linkedin-btn"><div className="linkedin-btn-div"><img src={linkedinlogo} alt="linkedinlogo"></img><span className="linkedin-span">LinkedIn</span></div></button>
                </div>
            </div>
            <div className="about">
                <div className="about-inner">
                    <p className="head-about">About</p>
                    <p className="para-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="head-interest">Interests</p>
                    <p className="para-interest">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
        </div>
    )
}