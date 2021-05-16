import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Recipe from './components/Recipe';
import Alert from './components/Alert';
require('dotenv').config({ path: '../../.env' });

const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const API_ID = process.env.REACT_APP_ID;
    const API_KEY = process.env.REACT_APP_KEY;

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get('https://api.edamam.com/search', {
                params: {
                    q: `${query}`,
                    app_key: API_KEY,
                    app_id: API_ID,
                    origin: '*',
                    format: 'json'
                }
            });
            if(!result.data.more){
                return setAlert("No food with such name");
            }
            setRecipes(result.data.hits)
            console.log(result)
            setAlert("");
            setQuery("");
        } else {
            setAlert('Please fill the form')
        }
    };

    const onChange = (e) => {
        //console.log(e.target.value);
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <div className="App">
            <h1 onClick={getData}>Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert}/>}
                <input
                    type="text"
                    placeholder="Search Food"
                    autoComplete="off"
                    onChange={onChange}
                    value={query}
                />
                <input type="submit" value="search" />
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    );
}

export default App;