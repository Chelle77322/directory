import React from 'react';
import background from '../styles/background.jpg' ; // Tell webpack this JS file uses this image
import "../styles/Banner.css";

console.log(background); // /background.jpg



   function Banner () {
        return (
            <div className = "header">
                <img src={background} alt="City scene at night" />
                <h1> User Directory</h1>
                <p> Click on Name to filter the users alphabetically or use the search box to narrow down your search results</p>
            </div>
        )
    }






