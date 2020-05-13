import React, {useEffect, useState} from 'react'
import Recipe from './Recipe';
import Header from './Header';
import "./App.css";
import { Button, Grid } from '@material-ui/core';


const App = () => {
    const APP_ID = "898003c0";
    const APP_KEY = "21f93fe34aba867f8d5838ec8cc97750";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchRecipes();
    }, [query]);

    const fetchRecipes = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
       setRecipes(data.hits);
       console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const fetchSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <Grid container direction="column">
            <Grid item>
                <Header/> 
                <form onSubmit={fetchSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <Button color="primary" variant= "contained" type="submit">
                        Search
                    </Button>  
                </form>  
            </Grid>
            <div className="recipes">
                {recipes.map(recipe =>(
                <Recipe className="recipe-card" key={recipe.recipe.label} 
                title={recipe.recipe.label} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
                link={recipe.recipe.url}/>
                ))}
            </div>
        </Grid>
    );
};


export default App

