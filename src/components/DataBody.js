import React from 'react';


function DataBody ({users}){
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [day, month, year].join("-");
        return formattedDate;
    }
return (
    <tbody>
        {users[0] !== undefined && users[0].name !== undefined ? 
        (
            users.map(({ login,picture, name,dob, email,phone}) => { 
return (
<tr key = {login.uuid}>
    <td data-th ="image" className = "align-middle">
     <img src = {picture.medium} alt = {"profile image for" + name.first + " " + name.last}
     className = "img-responsive rounded"/>
    </td>
     <td data-th ="name" className = "name-cell align-middle">
      {name.first} {name.last}
    </td>
    <td data-th="dob" className="align-middle">
   {formatDate(dob.date)}
   </td>
    <td data-th="phone" className = "align-middle">
      {phone}
     </td>
      <td data-th = "email" className = "align-middle">
<a href = {"mailto:" + email} target = "blank">
              {email}
          </a>
      </td>
    </tr>
    );
})
) : (
<></>
)}
</tbody>
);
}
export default DataBody;