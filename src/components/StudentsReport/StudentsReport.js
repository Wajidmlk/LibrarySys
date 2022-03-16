
import React from "react";
import ReactDOM from 'react-dom';
import Edit from './../Edit/Edit';

const Reports = ( { studentsList } ) => {
 
  /**
   * This function renders Update Record Component
   */  
  const editbutton = ( param ) => {
    ReactDOM.render(
      <Edit param = { param } />,
      document.getElementById('ReportsID')
      );
  }
  
  /*
   * Rendering project table
   */
  const renderproject = ( data )=> {
    
    return (
      <div>
        <div className="header-reports">
          <div>First Name</div>
          <div>Last Name</div>
        </div>
      
        <div className="data_table-reports">
          
          <div className="body_User_report">
            {data.map((proj, i) => {
              return (
                <div key={ i } className="data_row_reports">
                  <div>{proj.firstname}</div>
                  <div>{proj.lastname} <div style={{float:'right'}}><button onClick={() => editbutton( proj ) }>Edit</button></div></div>
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
      <h3><center>Students List</center></h3>
      { studentsList && renderproject( studentsList ) }
    </div>
  );
}
export default Reports;