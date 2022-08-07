import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import slides from "./Slides";


import React from 'react'

const Slider = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            <h2>My project</h2>
        </div>

        <Carousel 
            arrows
            slidesPerPage={3}
            infinite
            animationsSpeed={200}
            centered
            offset={50}
            Itemwidth={400}    
            sildes={slides}

        />
    </div>
  )
}

export default Slider