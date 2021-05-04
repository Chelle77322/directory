import React from 'react';
import "../styles/SearchBox.css";

function SearchBox ({ handleSearchChange})
{
    return(
        <div className = "searchBox">
            <form className = "form-inline">
                <input className = "form-control"
                type = "search"
                placeholder = "Search for User"
                aria-label = "User Search"
                onChange = {e => handleSearchChange(e)}/>
            </form>
        </div>
    );
}
export default SearchBox;