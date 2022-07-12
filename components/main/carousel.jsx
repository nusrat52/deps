import React, {useEffect, useState} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import * as Agent from "../../api/agent"
 


function Carousel () {
  const [slides, setSlides]=useState([])
useEffect(() => {
  const getSlideDatas = async () => {
    const SlideDatas = await Agent.general.getCarousel()
    setSlides(SlideDatas.results)
  }
  getSlideDatas()
}, [])
   return (
    <>
      <div className="block-slideshow block-slideshow--layout--with-departments block">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 d-none d-lg-block"></div>
      <div className="col-12 col-lg-9 p-0">
            {slides.length>0 && <OwlCarousel className="owl-theme" nav={false} dots={true} items={1} loop   >
                
       { slides.map((item, index)=>   <div key={index} className="item">
         <a className="block-slideshow__slide" >
                 <div className="block-slideshow__slide-image block-slideshow__slide-image--desktop" style={{
                        backgroundImage: `url('${item.image}')`,
                      }}></div>
              <div className="block-slideshow__slide-image block-slideshow__slide-image--mobile" style={{
                        backgroundImage:
                          `url('${item.mobile_image}')`,
                      }}></div>
              <div className="block-slideshow__slide-content">
                <div className="block-slideshow__slide-title"> {item.title} </div>
                <div className="block-slideshow__slide-text"> {item.text} <br /> {item.title2} </div>
                <div className="block-slideshow__slide-button">
                  <span className="btn btn-primary btn-lg">Shop Now</span>
                </div>
             </div>
              </a>
                </div>)  
                }
          </OwlCarousel>}
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Carousel;
