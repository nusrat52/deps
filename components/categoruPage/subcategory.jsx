import React from 'react'
 import Link from 'next/link'

function Subcategory ({altcategory}) {
 
    
  

   return (
      <div>
                {altcategory && <ul className="category-card__links">
                       {altcategory.map((child, index) => <li key={index}>
                          <Link href={`/filter/sub-${child.uniq_id}/${child.slug.replace(/#| /g,'-')}`}>{child.name_az}</Link>
                        </li>)}
                       </ul>}
    </div>
  )
}

export default Subcategory