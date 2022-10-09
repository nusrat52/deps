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
               <button type="button" className="filter__title" data-collapse-trigger> {category.name_en}  
             </button>
             <AiOutlineDown/>
              </div>
      <div onClick={e=>e.stopPropagation()} className="filter__body" data-collapse-content>
        <div className="filter__container">
                      <div className={!dropOn?"filter-categories d-none": "filter-categories"}>
              <ul className="filter-categories__list filter-categories__list_none">
                             {category.subcategory.map((child)=> <SearchDr key={child.uniq_id}  child={child}/>)}
             </ul>
          </div>
        </div>
      </div>
      </div>
  </div>
                        
  )
}

export default SearchDropdown