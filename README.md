[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Food App
<img src="https://github.com/thraddash/food/blob/master/src/images/mockup.png" width="600" title="Mockup">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#initial-setup">Initial Setup</a></li>
        <li><a href="#cors-issues">has been blocked by CORS: policy</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#starting-the-app">Starting the App</a></li>

  </ol>
</details>

## About the Project
- Search recipes using http://edamam.com api 
- onClick URL, navigates user to new browser tab  
- onClick ingredients button, shows additional details about the recipe  
- trigger an Alert message if the search item cannot be found or is empty  

#### modules used
- axios  
- uuid  
- dotenv  

## Initial Setup
npm install dotenv  
#### create a .env file, look at .env.sample for reference  
The .env file will house your edamam api_id and api_key.  
Note: .env is added to .gitignore   

```node
REACT_APP_ID = ENTER_YOUR_API_ID
REACT_APP_KEY = ENTER_YOUR_API_KEY
```

## CORS Issues
- used params to set origin with wildcard   
the value tells the browser to allow requesting code from any origin to access the resource  

```node
require('dotenv').config({ path: '../../.env' });

const API_ID = process.env.REACT_APP_ID;
const API_KEY = process.env.REACT_APP_KEY;

const result = await Axios.get('https://api.edamam.com/search', {
  params: {
    q: `${query}`,
    app_key: API_KEY,
    app_id: API_ID,
    origin: '*',
    format: 'json'
  }
});
```
</details>

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.

### Prerequisites
1. node v14.15.5 installed
2. npm 6.14.11 installed
3. npm install uuid dotenv axios --save
 
### Starting the App

1. Clone the repo
   ```sh
   git clone https://github.com/thraddash/widgets.git
   ```
2. npm install
   ```
   install npm modules from package.json
   ```
3. npm start
   ```
   Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   ``` 
  
<!-- MARKDOWN LINKS & IMAGES -->
[node-shield]: https://img.shields.io/badge/node-v14.15.5-blue
[node-url]: https://nodejs.org/
[npm-shield]: https://img.shields.io/badge/npm-v6.14.11-orange
[npm-url]: https://www.npmjs.com/package/npm-install
[commits-shield]: https://img.shields.io/badge/commits-10-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/food
[product-screenshot]: /src/images/
