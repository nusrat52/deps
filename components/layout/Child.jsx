import React, {useState, useEffect} from 'react'
import * as Agent from "../../api/agent"
import SubCategory from './SubCategory'
import Link from 'next/link'
import {useRouter} from "next/router"
 function Child ({childs}) {
    const router=useRouter()
   console.log();
 
    return (
  <>
             {childs && childs.map((ch, index) => <li key={index} className="megamenu__item megamenu__item--with-submenu">
      <Link href={`/filter/child-${ch.uniq_id}/${ch.slug.replace(/#| /g,'-')}`}>{ch[`name_${router.locale}`]}</Link>
     <ul className="megamenu__links megamenu__links--level--1">
    <SubCategory subcategory={ch.altcategory}/>
                     </ul>
    </li>)}
     </>
  )
}

export default Child