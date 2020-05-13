import React from 'react';
import { Button} from '@material-ui/core';
import "./App.css";

const Recipe = ({title, image, ingredients, link}) => {
    return (
    <div className="recipe">
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <ul className="ul-list">
                {ingredients.map(ingredients => (
                <li className="li-list">{ingredients.text}</li>
                ))}
            </ul>
            <Button color="primary" variant="contained">
            <a href={link}>Recipe Directions</a> 
            </Button>
    </div>
    );
};

export default Recipe;
