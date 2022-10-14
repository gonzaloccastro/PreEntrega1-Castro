import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {

    return (
        <div className="itemListStyle d-flex flex-row flex-wrap mt-2 flex-evenly justify-content-evenly">
            {items.map((prod)=>{
                return <Item prod={prod} key={prod.id}/>;
            })}
        </div>
    );
}
export default ItemList;