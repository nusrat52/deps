import React, {useEffect, useState} from 'react'
import * as Agent from "../../api/agent"
import Link from 'next/link'
function SubCategory ({ subcategory }) {
 
   return (<>
    {subcategory.map((sub, indx) => <li key={indx} className="megamenu__item">
    <Link href={`/filter/sub-${sub.uniq_id}/${sub.slug?sub.slug.replace(/#| /g,'-'):"null"}`}>{sub.name_en}</Link>
</li>
              )}</>
  )
}

export default SubCategory