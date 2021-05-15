import React, { useState } from 'react';
import Api from " ../utils/Api";
const Search = () => { 
const state = useState(Api);
    return (
     <div className = "searchbox">
         <div className = "input-group">
         <div className = "input-group-prepend">
            <span className = "input-group-text" id = "">Search</span>
         </div>
         <input className = "form-control mr-sm-2" type = "search" placeholder = "Employee Name" aria-label = "Search"
         onChange={e => state.handleSearchChange(e)}/>
            </div>
        </div>
    );
}
export default Search;