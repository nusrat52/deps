import React from 'react'
import Link from 'next/link'
 import {useRouter} from "next/router"
function SubCategory ({ subcategory }) {
 const router =useRouter()
   return (<>
    {subcategory.map((sub, indx) => <li key={indx} className="megamenu__item">
    <Link href={`/filter/sub-${sub.uniq_id}/${sub.slug?sub.slug.replace(/#| /g,'-'):"null"}`}>{sub[`name_${router.locale}`]}</Link>
</li>
              )}</>
  )
}

export default SubCategory