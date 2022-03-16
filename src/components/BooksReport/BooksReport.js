
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { SERVER_CREDENTIALS } from '../../ext/dependencies/CONSTANTS';
import Edit from './../Edit/Edit';

import "./BooksReport.css";

const Reports = ( { studentsList } ) => {
  
  const [ BookList, setBookList ] = useState( [] );

  /*
  * Fetching Book records here.
  */
  useEffect(() => { 

    fetch( SERVER_CREDENTIALS.GET_BOOKS._API )
    .then( response => response.json() )
    .then( responseJson => setBookList( responseJson ) );
  }, []);


  const editbutton = ( param ) => {
    ReactDOM.render(
      <Edit param = { param } />,
      document.getElementById('ReportsID')
      );
  }
  
  /**
   * this function extracts name of student
   */
  const getName = ( param ) =>{
    let value = '--';
    studentsList.forEach( record => {
      if( record.user_id == param ){
        value = record.firstname +' '+ record.lastname;
      }
    });
    return value;
  }

  /*
   * Rendering project table
   */
  const renderproject = ( ) => {
    
    return (
      <div>
        <div className="header-book-reports">
          <div>Title</div>
          <div>Author</div>
          <div>Issued To</div>
          <div>Date of Issue</div>
          <div>Return Date</div>
        </div>
      
        <div className="data_table-reports">
          
          <div className="body_User_report">
            { BookList && BookList.map((proj, i) => {
              return (
                <div key={ i } className="data_books_row_reports">
                  <div>{proj.title}</div>
                  <div>{proj.author}</div>
                  <div>{ getName( proj.issueto ) }</div>
                  <div>{( proj.issueto == 0 ) ? '--' : proj.issuedate}</div>
                  <div>{( proj.issueto == 0 ) ? '--' : proj.returndate}<div style={{float:'right'}}><button onClick={() => editbutton( proj ) }>Edit</button></div></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="ReportsID" className="Reports">
      <h3><center>Books List</center></h3>
      { renderproject() }
    </div>
  );
}
export default Reports;