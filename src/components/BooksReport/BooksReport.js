
import React, { Component } from "react";
import { SERVER_CREDENTIALS } from './../../ext/dependencies/CONSTANTS';
import "./BooksReport.css";


class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      projects: []
    };
  }
  
  
  componentDidMount() {
    fetch( SERVER_CREDENTIALS.GET_PROJECTS._API )
    .then( response => response.json() )
    .then( responseJson => {
      if( responseJson !== null && responseJson.length > 0 ){
        this.setState( { projects: responseJson } );
        this.setState({ project: this.state.projects });
      }
    });
    /*
     * Fetching project data here. You can replace this with your GET request
     */
  }


  /*
   * Rendering project table
   */
  renderproject(project) {
    
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
            {this.state.project.map((proj, i) => {
              return (
                <div key={ i } className="data_row_reports">
                  <div>{proj.title}</div>
                  <div>{proj.author}</div>
                  <div>{proj.issuedTo}</div>
                  <div>{proj.issueDate}</div>
                  <div>{proj.returnDate}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { project } = this.state;

    return (
      <div className="Reports">
        <h3><center>Books List</center></h3>
        {project && this.renderproject(project)}
      </div>
    );
  }
}
export default Reports;