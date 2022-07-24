import React, {useState, useEffect} from 'react'
import * as Agent from "../../api/agent"
import SubCategory from './SubCategory'
import Link from 'next/link'
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
      <Link href={`/filter/child-${ch.pk}/${ch.fields.title}`}>{ch.fields.title}</Link>
     <ul className="megamenu__links megamenu__links--level--1">
    <SubCategory pk={ch.pk}/>
    
                    </ul>
    </li>)}
     </>
  )
}

export default Child