
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { SERVER_CREDENTIALS } from '../../ext/dependencies/CONSTANTS';
import Edit from './../Edit/Edit';

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

  editbutton( param ) {
    ReactDOM.render(
      <Edit paramBookTitle = { param } />,
      document.getElementById('ReportsID')
      );
    console.log('Pressed: ',param);
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
            {project.map((proj, i) => {
              return (
                <div key={ i } className="data_books_row_reports">
                  <div>{proj.title}</div>
                  <div>{proj.author}</div>
                  <div>{proj.issuedTo}</div>
                  <div>{proj.issueDate}</div>
                  <div>{proj.returnDate}<div style={{float:'right'}}><button onClick={() => this.editbutton(proj.author)}>Edit</button></div></div>
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
        title: "SPIDER-MAN",
        author:
"wajidmlk",
          issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider",
          returnDate: "spider"
      },
      {
        title: "SPIDER-GWEN",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "KID ARACHNID",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "SPIDER-GIRL",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "SPIDER-MAN PROTO SUIT",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "SPIDER-MAN SYMBIOTE SUIT",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "SPIDER-MAN 2099",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "IRON SPIDER",
        author:
          "wajidmlk",
        issuedTo: "spider",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "GREEN GOBLIN",
        author:
          "wajidmlk",
        issuedTo: "goblin",
          issueDate: "spider",
          returnDate: "spider"
      },
      {
        title: "VENOM",
        author:
          "wajidmlk",
        issuedTo: "snake"
,
          issueDate: "spider",
          returnDate: "spider"      },
      {
        title: "CARNAGE",
        author:
          "wajidmlk",
        issuedTo: "snake"
,
          issueDate: "spider",
          returnDate: "spider"      }
    ];
    return (
      <div id="ReportsID" className="Reports">
        <h3><center>Books List</center></h3>
        {project && this.renderproject(report)}
      </div>
    );
  }
}
export default Reports;