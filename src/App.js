import React from 'react';
import Axios from 'axios';
import './App.css';
require('dotenv').config({ path: '../.env' });

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


const App = () => {    
    return (
        <div className="App">
            <h1>Food Searching App</h1>
        </div>
    )
}

export default App;