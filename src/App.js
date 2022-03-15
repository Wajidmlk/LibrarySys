import React, { useState, useEffect } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { ADMIN_PANEL } from './ext/dependencies/CONSTANTS.js'; /* using locale for configuration strings  */
import 'react-tabs/style/react-tabs.css';
import { Tabs, TabPanel } from 'react-tabs';
import './App.css';
import Books from './components/BooksReport/BooksReport';
import Students from './components/StudentsReport/StudentsReport';
import DetailPage from './components/DetailPage/DetailPage';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function App() {
  const [ tab, setTab ] = useState( localStorage.getItem( ADMIN_PANEL.TABS._TABS_NAME ) | 0 );
  return (
    <div className="App">
      <div className='admincss'>
        <SideNav  className='SideNav' expanded ={ true }
        onSelect = { selected => {
            // We are storing current tab in Local Storage to remember last opened tab
            localStorage.setItem( ADMIN_PANEL.TABS._TABS_NAME, selected  );
            //this.setTabStatus( Number.parseInt( selected ) );
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
        
        <NavItem eventKey='2'>
        <NavIcon>
        <i className='fa fa-users' style={{ fontSize: '1.75em', color:'#fff', cursor:'pointer'  }} />
        </NavIcon>
        <NavText style={{ fontFamily: 'Century Gothic' }}>Details</NavText>
        </NavItem>
        </SideNav.Nav>
        </SideNav>
        <Tabs selectedIndex = { tab } className='Tabs'>
        <TabPanel>
          <Students />
        </TabPanel>
        <TabPanel>
          <Books />
        </TabPanel>
        <TabPanel>
          <DetailPage />
        </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
