import React, { useState } from 'react'
import { filterNames } from './const'

const Filter = () => {
    const [names, setNames] = useState(filterNames)

    return (
        <div className='filter'>

            <ul className='filter__list'>
                {names.map((item, index) => {
                    return (
                        <li
                            key={item}
                            // onClick={() => handleClick(index)}
                            className={`filter__item ${index === 0 ? 'is-active' : ''}`}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default Filter
