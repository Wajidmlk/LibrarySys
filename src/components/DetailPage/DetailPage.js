
import React, { useState, useEffect } from "react";
import './DetailPage.css';
import { SERVER_CREDENTIALS } from '../../ext/dependencies/CONSTANTS';

const records = [
  {
    name: "Mohsan",
    email: "mohsan@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Hadi",
    email: "hadi@gmail.com",
    date: 'Mon Nov 2021'
  }, 
  {
    name: "Mohsan Ali",
    email: "mohsanali@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Ahsan",
    email: "ahsan@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Hadi Rehman",
    email: "hadi.r@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Yousif",
    email: "yousif@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "M. Mohsan",
    email: "m.mohasan@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Malik Ahsan",
    email: "malik@gmail.com",
    date: 'Mon Nov 2021'
  },
  {
    name: "Mehdi",
    email: "m.mehdi@gmail.com",
    date: 'Mon Nov 2021'
  }
];
const Reports = () =>  {
  
  const [ projects, setProjects ] = useState( [] );
  const [ newUsersList, setNewUsersList ] = useState([]);
  
  const getAllProjects = () => {
  
    fetch( SERVER_CREDENTIALS.GET_PROJECTS._API )
    .then( response => response.json() )
    .then( responseJson => {
      if( responseJson !== null && responseJson.length > 0 ){
        setProjects( responseJson );
      }
    });
  }
  
  useEffect(() => {  
    fetch( SERVER_CREDENTIALS.GET_USER_PROFILES._API )
    .then( response => response.json() )
    .then( responseJson => {
      if( responseJson !== null && responseJson.length > 0 ){
         setNewUsersList( responseJson );
      }
  });
  }, []);

  const allNewUsers = records.map( ( msg, i ) => {
    return <div key={ msg.date + i } className="Users">
      <p><b>{msg.name}</b><br />{msg.email}<br /><i>{msg.date}</i></p>
    </div>
  } );

  return (
    <div className="details">
    <h3>New Users</h3>

        {allNewUsers}
      
 
    </div>

  );
}
export default Reports;