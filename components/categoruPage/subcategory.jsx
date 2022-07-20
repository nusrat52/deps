import React, {useEffect, useState} from 'react'
import * as Agent from "../../api/agent"
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
                          <a href="#">{child.fields.title}</a>
                        </li>)}
                       </ul>}
    </div>
  )
}

export default Subcategory