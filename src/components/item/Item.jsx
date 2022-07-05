import React from 'react';
import style from './item.module.css';
import ava_jake from '../../assets/jake.png';

const Item = ({id, title, author}) => {
    return (
        <div className={style.item}>
            <div className={style.ava}>
                <img className={style.ava} src={ava_jake} alt="ava"/>
            </div>
            <div className={style.intro}>
                <h3>{title}</h3>
                <span>(id: {id})</span>
            </div>
            <div className={style.authorname}>
                {author}
            </div>
        </div>
    );
};

export default Item;