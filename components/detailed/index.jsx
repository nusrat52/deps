import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
const CenterMode =({images})=> {
       
   const imageArray = images.map((imagee) => {
          return imagee.image
        })
      const settings = {
        customPaging: function(i) {
        return (
          <a>
            <img  className="carouselBigPicture" src={imageArray[i]}  />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-dots_sp slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="detailed">
         <Slider {...settings}>
  
       {   imageArray.map((image, index)=> <div key={index}>
            <img className="carouselThumbs" src={image} />
          </div>)      
          }
        </Slider>
      </div>
    );
}
 

export default CenterMode;