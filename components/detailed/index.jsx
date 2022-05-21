import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
export default class CenterMode extends Component {
    render () {
      

        const imageArray = [
            'https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-16.jpg',
            'https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-16-1.jpg',
            'https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-16-2.jpg',
            'https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-16-3.jpg',
            'https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-16-4.jpg'
        ]
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
  
       {   imageArray.map((image)=> <div key={image}>
            <img className="carouselThumbs" src={image} />
          </div>)      
          }
        </Slider>
      </div>
    );
  }
}