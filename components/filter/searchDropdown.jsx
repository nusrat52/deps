import React, { useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";
import SearchDr from "./searchDr"

function SearchDropdown ({category}) {
    
    const [dropOn, setDropOn] = useState(false)
    const [dropOnSub, setDropOnSub] = useState(false)
    const dropDownClass = dropOn ? "filter filter--opened" : "filter";
    

    const onclickFunc = (e) => {
        e.stopPropagation()
        setDropOn(!dropOn)
    }

  return (
    <div onClick={onclickFunc} className="widget-filters__item">
          <div className={dropDownClass} data-collapse-item>
              <div className='search__dropdown'>
               <button type="button" className="filter__title" data-collapse-trigger> {category.title}  
             </button>
             <AiOutlineDown/>
              </div>
      <div onClick={e=>e.stopPropagation()} className="filter__body" data-collapse-content>
        <div className="filter__container">
                      <div className="filter-categories">
              <ul className="filter-categories__list">
                             {category.childs.map((child)=> <SearchDr key={child.id} child={child}/>)}
             </ul>
          </div>
        </div>
      </div>
      </div>
      


  </div>
                        
  )
}

export default SearchDropdown