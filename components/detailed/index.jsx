import React, { Component, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Lightbox } from "react-modal-image";




const CenterMode = ({ images }) => {
  

  const [url, setUrl]=useState("")
       
   const imageArray = images.map((imagee) => {
          return imagee.image
        })
      const settings = {
        customPaging: function(i) {
        return (
          <a>
            <img  className="carouselBigPicture" src={"http://142.93.240.128:3000/api/getImage/public/uploads/products/"+imageArray[i]}  />
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
    <>
      
{ url &&     <Lightbox
         large={url}
         hideZoom={true}
        showRotate={true}
       onClose={()=>setUrl("")}
    />}
      <div className="detailed">
         <Slider {...settings}>
  
       {   imageArray.map((image, index)=> <div key={index}>
            <img onClick={(e)=> setUrl(e.target.src)} className="carouselThumbs" src={"http://142.93.240.128:3000/api/getImage/public/uploads/products/"+image} />
          </div>)      
          }
        </Slider>
      </div>
      </>
    );
}
 

export default CenterMode;