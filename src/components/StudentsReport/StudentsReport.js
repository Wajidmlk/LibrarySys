
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { SERVER_CREDENTIALS } from '../../ext/dependencies/CONSTANTS';
import Edit from './../Edit/Edit';


class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      projects: []
    };
  }
  
  editbutton( param ) {
    ReactDOM.render(
      <Edit paramFirstName = { param } />,
      document.getElementById('ReportsID')
      );
    console.log('Pressed: ',param);
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
            {project.map((proj, i) => {
              return (
                <div key={ i } className="data_row_reports">
                  <div>{proj.firstName}</div>
                  <div>{proj.lastName} <div style={{float:'right'}}><button onClick={() => this.editbutton(proj.firstName)}>Edit</button></div></div>
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
    const report = [
      {
        firstName: "SPIDER-MAN",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "SPIDER-GWEN",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "KID ARACHNID",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "SPIDER-GIRL",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "SPIDER-MAN PROTO SUIT",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "SPIDER-MAN SYMBIOTE SUIT",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "SPIDER-MAN 2099",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "IRON SPIDER",
        lastName:
          "wajidmlk@gmail.com",
        category: "spider"
      },
      {
        firstName: "GREEN GOBLIN",
        lastName:
          "wajidmlk@gmail.com",
        category: "goblin"
      },
      {
        firstName: "VENOM",
        lastName:
          "wajidmlk@gmail.com",
        category: "snake"
      },
      {
        firstName: "CARNAGE",
        lastName:
          "wajidmlk@gmail.com",
        category: "snake"
      }
    ];
    return (
      <div id="ReportsID" className="Reports">
        <h3><center>Students List</center></h3>
        {project && this.renderproject(report)}
      </div>
    );
  }
}
export default Reports;