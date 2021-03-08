import React from 'react';
import {Link} from 'react-router-dom';

import './card.css';

const CardItem = ({ path, label, src, alt, text }) => {
    return (
        <>
          <div className="card-item">
            <Link to={path} className="card-item-link">
                <figure data-category={label} className="card-item-img-wrap">
                    <img src={src} alt={alt} className="card-item-img"/>
                </figure>
                <div className="card-item-info">
                    <h5 className="card-item-text">{text}</h5>
                </div>
            </Link>
          </div>  
        </>
    )
}

export default CardItem
