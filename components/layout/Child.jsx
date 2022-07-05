import React, {useState, useEffect} from 'react'
import * as Agent from "../../api/agent"
import SubCategory from './SubCategory'
function Child ({id}) {
    
const [childs, setChilds] = useState([])
useEffect(() => {
    const childTaker = async () => {
        const childArr = await Agent.general.getChilds(id)
        setChilds(childArr)

    }
    childTaker()
}, [])
       
    return (
  <>
             {childs.map((ch, index) => <li key={index} className="megamenu__item megamenu__item--with-submenu">
                    
      
    <a href="#">{ch.fields.title}</a>

    <ul className="megamenu__links megamenu__links--level--1">
      
   <SubCategory pk={ch.pk}/>
    
                    </ul>
    </li>)}
     </>
  )
}

export default Child