import React from 'react';

const Caterogy = React.memo(function Caterogy({items, onClickFn, activeCategory}) {

    // console.log("category update")

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickFn(null)}
                    className={activeCategory === null ? 'active': ''}
                >Все</li>
                {
                    items.map((item, idx) => {
                            return <li
                                key={item + idx}
                                onClick={()=> onClickFn(idx)}
                                className={activeCategory === idx ? 'active': ''}
                            >{item}</li>
                        }
                    )
                }
            </ul>
        </div>
    );
})

export default Caterogy;