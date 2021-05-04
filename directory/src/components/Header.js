import React, {Component} from 'react';
import "../styles/Header.css";

export default class Header extends Component{

    render(){
        return (
            <div className = "Header">
                <h1> User Directory</h1>
                <p> Click on Name to filter the users alphabetically or use the search box to narrow down your search results</p>
            </div>
        )
    }
}