import React, {useEffect, useState} from 'react'
import * as Agent from '../../api/agent'
 import Link from 'next/link'
import {aboutTranslate} from "../../translate"
import { useRouter } from 'next/router'
function Index () {
    const [about, setAbout] = useState()
    const [context, setContext] = useState()
    const [teams, setTeams] = useState([])

  
  const router = useRouter()
 
 useEffect(() => {
     const fetchAboutData = async () => {
        const aboutData = await Agent.general.getAboutPage("en")
         setAbout(aboutData.results[0][0].title)
         setContext(aboutData.results[0][0].context )
       const TeamsData = await Agent.general.getTeam("en")
          setTeams(TeamsData)
     }
    fetchAboutData()
 }, [])
   
     return (
     <div>
        <div className="site">
            <div className="site__body">
            <div className="block about-us">
              <div className="about-us__image" />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-xl-10">
                    <div className="about-us__body">
                      <h1 className="about-us__title">{about && about[router.locale]}</h1>
                      <div className="about-us__text typography">
                         <p>
                           
                           {/* {
                             console.log(about[0][0].context['az'], 'abbb')
                           } */}
                         {context && context[router.locale]}
                        </p>
                       </div>
                      <div className="about-us__team">
                        <h2 className="about-us__team-title">Meat Our Team</h2>
                        <div className="about-us__team-subtitle text-muted">
                          {aboutTranslate['about1'][router.locale]}<br /> 
                          {aboutTranslate['about2'][router.locale]}
                        </div>
                        <div className="about-us__teammates teammates">


                          <div className='aboutWrapper'>
                            <div className="row w-100">
 
                          {   teams.map(team=> <div key={team.uniq_id} className="col-lg-4 col-sm-6 col-12">
                              <div className="teammates__item teammate">
                              <div className="teammate__avatar">
                                <img src={"http://142.93.240.128:3000/api/getImage/"+team.image} alt="" />
                              </div>
                              <div className="teammate__name">{team.title} </div>
                              <div className="teammate__position text-muted">
                                {team.profession[router.locale]}
                              </div>
                            </div>
                              </div>)}
 
                            </div>
                             
                             </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
           <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
               
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
                   <div className="pswp__container">
                       
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
      </div>
   )
}

export default Index