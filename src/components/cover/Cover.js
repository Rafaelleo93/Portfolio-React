import React from 'react'
import "./Cover.css";
import CoverVideo from "../../media/CoverVideo.mp4";

const Cover = () => {
  return (
    <div className= "cover-container">
        <video className= "video" src= {CoverVideo}autoPlay loop mute />
        <h1>Name Last Name</h1>
        <p>Developer | Designer | Content Creator | Entrepeneur</p>
        </div>
  )
}

export default Cover