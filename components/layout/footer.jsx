import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import * as Agent from "../../api/agent"
import { homepageTranslate, dashboardTranslate} from "../../translate";
import { useRouter } from "next/router";
  function Footer () {
 
  const [adress, setAdress]=useState({})
  
  useEffect(() => {
    const getUserAdress = async () => {
      const adresses = await Agent.general.getAdress()
       setAdress(adresses[0])
     }
    getUserAdress()
  }, [])
   const router=useRouter()
  return (
    <footer className="site__footer">
    <div className="site-footer">
      <div className="container">
        <div className="site-footer__widgets">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
            <div className="site-footer__widget footer-contacts">
                  
                  <h5 className="footer-contacts__title">{homepageTranslate['contactUs'][router.locale]}</h5>
                   <ul className="footer-contacts__contacts">
                    <li>
                      <i className="footer-contacts__icon fas fa-globe-americas"></i> {adress?.adress}
                    </li>
                    <li>
                      <i className="footer-contacts__icon far fa-envelope"></i> {adress?.email}
                    </li>
                    <li>
                    <i className="footer-contacts__icon fas fa-mobile-alt"></i> {adress?.number1}, {adress?.number2} 
                  </li>
                  <li>
                    <i className="footer-contacts__icon far fa-clock"></i> {adress?.openTimes}
                  </li>
                  </ul>
                </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="site-footer__widget footer-links">
                <h5 className="footer-links__title">{homepageTranslate['information'][router.locale]}</h5>
                <ul className="footer-links__list">
                    <li className="footer-links__item">
                      <Link href='/haqqimizda'>
                     <a   className="footer-links__link"> {homepageTranslate['aboutUs'][router.locale]} </a>
                      </Link>
                    </li>
                    <li className="footer-links__item">
                      <Link href='/bizimleelaqe'>
                     <a   className="footer-links__link">  {homepageTranslate['contactUs'][router.locale]} </a>
                      </Link>
                    </li>
                    <li className="footer-links__item">
                      <Link href='/direktorayaz'>
                     <a   className="footer-links__link">  {homepageTranslate['vriteDirector'][router.locale]} </a>
                      </Link>
                    </li>
        
                    <li className="footer-links__item">
                      <Link href='/sualver'>
                     <a   className="footer-links__link">  {homepageTranslate['askQuestion'][router.locale]}</a>
                      </Link>
                    </li>
                 </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="site-footer__widget footer-links">
                <h5 className="footer-links__title">{homepageTranslate['myAccount'][router.locale]}</h5>
                  <ul className="footer-links__list">
                      <li className="footer-links__item">
                      <Link href='/profile/orderhistory'>
                     <a   className="footer-links__link">  {dashboardTranslate['orderHistory'][router.locale]}</a>
                      </Link>
                    </li>
                     <li className="footer-links__item">
                
                    </li>
                   </ul>
              </div>
            </div>
              <div className="col-12 col-md-12 col-lg-4 d-flex align-items-start flex-column justify-content-between">
                <div className="site-footer__widget footer-contacts">
                <div className="site-header__logo">
               <Link href="/">
                 <a className='pointer'>
                 <img width={196} src={"images/ilink-logo.jpeg"} />
                 </a>
               </Link>
            </div>
              </div>
              <div className="site-footer__widget footer-newsletter">
               
               <div className="social-links footer-newsletter__social-links social-links--shape--circle">
                  <ul className="social-links__list">
                    <li className="social-links__item">
                      <a className="social-links__link social-links__link--type--rss" href="#" target="_blank">
                        <i className="fas fa-rss"></i>
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a className="social-links__link social-links__link--type--youtube" href="#" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a className="social-links__link social-links__link--type--facebook" href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a className="social-links__link social-links__link--type--twitter" href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="social-links__item">
                      <a className="social-links__link social-links__link--type--instagram" href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  </div> 
                  
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
 
          <div className="site-footer__payments">
            <img src="images/payments.png" alt="" />
          </div>
        </div>
      </div>
      <div className="totop">
        <div className="totop__body">
          <div className="totop__start"></div>
          <div className="totop__container container"></div>
          <div className="totop__end">
            <button type="button" className="totop__button">
              <svg width="13px" height="8px">
                <use xlink="images/sprite.svg#arrow-rounded-up-13x8"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer