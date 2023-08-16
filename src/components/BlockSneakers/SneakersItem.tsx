import React from 'react';
import {Sneakers} from "../../redux/sneakers/types.ts";

const SneakersItem: React.FC<Sneakers> = ({id, imageName, title, brand, price, rating, body, sizes}) => {
    return (
        <div className="card">
            <div>
                <img src={`/img/sneakers/${imageName}`} alt={title}/>
                <p className="title">{title}</p>
            </div>
            <div>
                <p>
                    <strong>Цена: </strong>
                    <span className="price">{price} руб.</span>
                </p>
            </div>
        </div>
    );
}

export default SneakersItem;