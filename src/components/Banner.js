import React, {Component} from 'react';
import background from '../styles/background.jpg' ; // Tell webpack this JS file uses this image

console.log(background); // /background.jpg

export default class Banner extends Component{

    render(){
        return (
            <div className = "header">
                <img src={background} alt="City scene at night" />
                <h1> User Directory</h1>
                <p> Click on Name to filter the users alphabetically or use the search box to narrow down your search results</p>
            </div>
        )
    }
}





