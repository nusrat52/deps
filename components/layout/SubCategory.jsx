import React, {useEffect, useState} from 'react'
import * as Agent from "../../api/agent"

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
    <a href="#">{sub.fields.title}</a>
</li>
              )}</>
  )
}

export default SubCategory