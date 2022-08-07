import React, {useEffect, useState} from 'react'
import * as Agent from "../../api/agent"
import Link from 'next/link'

function Subcategory ({pm}) {
    const [subcategories, setSubcategory] = useState(false)
    useEffect(() => {
        const subTaker = async () => {
            const subData = await Agent.general.getSubcategories(pm)
            setSubcategory(subData)
        }
        subTaker()
    }, [])
    
  

   return (
      <div>
                {subcategories && <ul className="category-card__links">
                       {subcategories.map((child, index) => <li key={index}>
                          <Link href={`/filter/sub-${child.pk}/${child.fields.title.replace(/#| /g,'-')}`}>{child.fields.title}</Link>
                        </li>)}
                       </ul>}
    </div>
  )
}

export default Subcategory