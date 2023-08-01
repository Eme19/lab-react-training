import './Carousel.css'
// import { Carousel } from "react-responsive-carousel";
import { useState} from 'react';
import React from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"




function CarouselSel ({images}) {
   console.log('show me images in array', images )

   const [slide, setSlide]= useState(0)

   const nextSlide = () => {
     setSlide((prevIndex) =>
       prevIndex + 1 === images.length ? 0 : prevIndex + 1
     );
   };


   const previousSlide = () => {
     setSlide((prevIndex) =>
       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
     );
   };

   return (
    <div className="carousel">
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
        {images.map((Imge, indx)=> {
   return <img src={Imge}   alt="Imageslide" key={indx} className={slide === indx ? "slide" : "slide slide-hidden" }/>
        })}
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
        <span className='indicators'>
        {images.map((_, indx)=> {
   return <button key={indx} onClick={()=> setSlide(indx)} className={slide === indx ? "indicator" : "indicator indicator-color"}></button>
        })}
        </span>
    </div>
   )

}

export default CarouselSel