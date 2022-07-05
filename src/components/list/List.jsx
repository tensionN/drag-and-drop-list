import React, {useState} from 'react';
import Item from "../item/Item";
import {sortItem} from "../../utils/utils";

const List = () => {
    const [data, setData] = useState([
        {id: 1, order: 1, title: 'Sometimes life is scary and dark', author: 'Jake'},
        {id: 2, order: 2, title: 'Hello world', author: 'Rahim'},
        {id: 3, order: 3, title: 'What is love', author: 'Vlad'},
        {id: 4, order: 4, title: 'Oh baby, don\'t hurt me', author: 'Vlad'},
    ])
    const [currentItem, setCurrentItem] = useState(null);

    function dragStartHandler(e, item) {
        setCurrentItem(item)
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e, item) {
        e.preventDefault();
        setData(data.map(c => {
            if(c.id === item.id) {
                return {...c, order: currentItem.order};
            }
            if(c.id === currentItem.id) {
                return {...c, order: item.order};
            }
            return c;
        }))
    }

    return (
        <div>
            {
                data.sort(sortItem).map(item =>
                    <div
                        key={item.id}
                        draggable={true}
                        onDragStart={(e) => dragStartHandler(e, item)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, item)}
                    >
                        <Item
                            id={item.id}
                            title={item.title}
                            author={item.author}
                        />
                    </div>)
            }
        </div>
    );
};

export default List;