// Libraries
import React from 'react';

const Photo = (props) => {
    return (
        <picture key={props.key ? props.key : 1} className={`flex start ${props.class === 'icon' ? "icon" : ""}`}>
            <img src={props.img} alt={props.desc} />
        </picture>
    );
}
export default Photo;
