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
    <button onClick={onclickFuncSub} className="filter-categories-alt__expander" data-collapse-trigger />
    <Link href={`/filter/child-${child.pk}/${child.fields.title}`}>{child.fields.title}</Link>
    <div className="filter-categories-alt__children" data-collapse-content>
      <ul className="filter-categories-alt__list filter-categories-alt__list--level--2">
    {  child.subCategories &&  child.subCategories.map(sub=> <li className="filter-categories-alt__item" data-collapse-item>
          <Link href={`/filter/sub-${sub.pk}/${sub.fields.title}`}>{sub.fields.title}</Link>
        </li> ) }
     
      </ul>
    </div>
  </li>
  )
}

export default SearchDr