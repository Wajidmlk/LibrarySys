import React, { useState, useEffect } from 'react';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Tabs, TabPanel } from 'react-tabs';
import Books from './components/BooksReport/BooksReport';
import Students from './components/StudentsReport/StudentsReport';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { ADMIN_PANEL, SERVER_CREDENTIALS } from './ext/dependencies/CONSTANTS.js'; /* using locale for configuration strings  */

function App() {
  
  const [ studentsList, setStudentList ] = useState( [] );

  const [ tab, setTab ] = useState( localStorage.getItem( ADMIN_PANEL.TABS._TABS_NAME ) | 0 );

  /*
  * Fetching Students records here.
  */
  useEffect(() => { 

    fetch( SERVER_CREDENTIALS.GET_STUDENTS._API )
    .then( response => response.json() )
    .then( responseJson => setStudentList( responseJson ) );
  }, []);


  return (
    <div className="App">
      <div className='admincss'>
        <SideNav  className='SideNav' expanded ={ true }
        onSelect = { selected => {
            // We are storing current tab in Local Storage to remember last opened tab
            localStorage.setItem( ADMIN_PANEL.TABS._TABS_NAME, selected  );
            setTab( Number.parseInt( selected ) );
          }
        }
        >
        <h3 style={{ color:'#fff' }}>LibrarySYS</h3>
        <SideNav.Nav >
        <NavItem eventKey='0'>
        <NavIcon>
        <i className='fa fa-fw fa-home' style={{ fontSize: '1.75em', color:'#fff', cursor:'pointer'}} />
        </NavIcon>
        <NavText style={{ fontFamily: 'Century Gothic' }}>Students</NavText>
        </NavItem>
        
        <NavItem eventKey='1'>
        <NavIcon>
        <i className='fa fa-fw fa-telegram' style={{ fontSize: '1.75em', color:'#fff', cursor:'pointer'  }} />
        </NavIcon>
        <NavText style={{ fontFamily: 'Century Gothic' }}>Books</NavText>
        </NavItem>
        
        </SideNav.Nav>
        </SideNav>
        <Tabs selectedIndex = { tab } className='Tabs'>
        <TabPanel>
          <Students studentsList = { studentsList } />
        </TabPanel>
        <TabPanel>
          <Books studentsList = { studentsList } />
        </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
