import React, {useState} from 'react'
import {AiOutlineDown} from "react-icons/ai"
function SearchDropdown () {
    
    const [dropOn, setDropOn] = useState(false)
    const [dropOnSub, setDropOnSub] = useState(false)
    const dropDownClass = dropOn ? "filter filter--opened" : "filter";
    const dropDownSubClass = dropOnSub ? "filter-categories-alt__item filter-categories-alt__item--open" : "filter-categories-alt__item";
    
    const onclickFunc = (e) => {
        e.stopPropagation()
        setDropOn(!dropOn)
    }
    const onclickFuncSub = (e) => {
        e.stopPropagation()
        setDropOnSub(!dropOnSub)
    }
  return (
    <div onClick={onclickFunc} className="widget-filters__item">
          <div className={dropDownClass} data-collapse-item>
              <div className='search__dropdown'>
               <button type="button" className="filter__title" data-collapse-trigger> Categories  
             </button>
             <AiOutlineDown/>
              </div>
      <div onClick={e=>e.stopPropagation()} className="filter__body" data-collapse-content>
        <div className="filter__container">
                      <div className="filter-categories">
                          
            <ul className="filter-categories__list">
              <li className="filter-categories__item filter-categories__item--parent  filter-categories__item--parent__sp">
                 <a  >Construction &amp; Repair</a>
                              </li>
                               <li  onClick={e=>e.stopPropagation()}  className={dropDownSubClass}  >
                                  <button onClick={onclickFuncSub} className="filter-categories-alt__expander" data-collapse-trigger />
                                  <a  >Power Tools</a>
                                  <div className="filter-categories-alt__children" data-collapse-content>
                                    <ul className="filter-categories-alt__list filter-categories-alt__list--level--2">
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Engravers</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Drills</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Wrenches</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Plumbing</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Wall Chaser</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Pneumatic Tools</a>
                                      </li>
                                      <li className="filter-categories-alt__item" data-collapse-item>
                                        <a href="#">Milling Cutters</a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
                        
  )
}

export default SearchDropdown