
import React, { Component } from "react";
import { SERVER_CREDENTIALS } from '../../ext/dependencies/CONSTANTS';


class ProjectsReport extends Component {
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
        <div className="header-reports">
          <div>First Name</div>
          <div>Last Name</div>
        </div>
      
        <div className="data_table-reports">
          
          <div className="body_User_report">
            {this.state.project.map((proj, i) => {
              return (
                <div key={ i } className="data_row_reports">
                  <div>{proj.firstName}</div>
                  <div>{proj.lastName}</div>
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
      <div className="ProjectsReport">
        <h3><center>Students List</center></h3>
        {project && this.renderproject(project)}
      </div>
    );
  }
}
export default ProjectsReport;