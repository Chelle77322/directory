import React, { useContext } from 'react';
import DataBody from './DataBody';
import "../styles/DataTable.css";
import Context from "../utils/Context"

const DataTable = () => {
    const state = useContext(Context);
    return (
   <div className = "datatable mt-5">
     <table id = "table" className = "table table-striped table-hover table-condensed">
        <thead>
           <tr>
             {state.developerState.headings.map(({name, width}) => {
            return(
                 <th className = "col" key={name}
                  style = {{width}}
                   onClick={() => {
                    
                     state.handleSort(name.toLowerCase());
                     }}
                     >
                    {name}
                    <span className = "pointer"></span>
                    </th>
                            );
                        })}
                    </tr>
                </thead>
                <DataBody />
            </table>
        </div>
    );
}
export default DataTable;