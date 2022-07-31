import React, {useEffect, useState} from 'react'
import * as Agent from "../../api/agent"
import Link from 'next/link'
function SubCategory ({ pk }) {
     const [subCategory, subCategoryy]=useState([])
useEffect(() => {
    const subTaker = async () => {
        const childArr = await Agent.general.getSubcategories(pk)
        subCategoryy(childArr)
     }
    subTaker()
}, [])
   return (<>
    {subCategory.map((sub, indx) => <li key={indx} className="megamenu__item">
    <Link href={`/filter/sub-${sub.pk}/${sub.fields.title?sub.fields.title.replace(/#| /g,'-'):"null"}`}>{sub.fields.title?sub.fields.title:""}</Link>
</li>
              )}</>
  )
}

export default SubCategory