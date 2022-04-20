import {useState, useEffect} from "react"
import '../styles/globals.css'
import "../styles/owlCarousel/owl.carousel.mini.css"
import "../styles/bootstrap.min.css"
import "../styles/photoswipe.css"
import "../styles/defaultSkin/default.skin.css"
import "../styles/select2.min.css"
import "../styles/all.min.css"
import "../styles/stroyka/stroyka.css"
import "../styles/home.css"
 
function MyApp({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
  
	setIsSSR(false);
}, []);
 
  
  if(isSSR){
    return <div></div>
  }
  
  return <Component {...pageProps} />
}

export default MyApp
