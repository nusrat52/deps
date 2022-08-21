import React, {useState} from 'react'
import Link from 'next/link'
function SearchDr ({ child }) {
    const [dropOn, setDropOn] = useState(false)
    const [dropOnSub, setDropOnSub] = useState(false)
    const onclickFuncSub = (e) => {
        e.stopPropagation()
        setDropOnSub(!dropOnSub)
    }
    const dropDownSubClass = dropOnSub ? "filter-categories-alt__item filter-categories-alt__item--open" : "filter-categories-alt__item";

  return (
    <li  onClick={e=>e.stopPropagation()}  className={dropDownSubClass}  >
    <button onClick={onclickFuncSub} className="filter-categories-alt__expander" />
    <Link href={`/filter/child-${child.uniq_id}/${child.slug.replace(/#| /g,'-')}`}>{child.name_en}</Link>
    <div className="filter-categories-alt__children" data-collapse-content>
      <ul className="filter-categories-alt__list filter-categories-alt__list--level--2">
    {  child.altcategory &&  child.altcategory.map((sub, index)=> <li key={index} className="filter-categories-alt__item" data-collapse-item>
          <Link href={`/filter/sub-${sub.uniq_id}/${sub.slug.replace(/#| /g,'-')}`}>{sub.name_en}</Link>
        </li> ) }
     
      </ul>
    </div>
  </li>
  )
}

export default SearchDr