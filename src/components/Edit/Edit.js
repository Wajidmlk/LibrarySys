import React, { useState, useEffect } from "react";
import "./Edit.css";
import {
  SERVER_CREDENTIALS,
} from "../../ext/dependencies/CONSTANTS";

const Profile = ( { param } ) => {
  const [scope, setScope] = useState('NaN');
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [issueto, setIssueTo] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [returndate, setReturnDate] = useState("");

  //  constants
  const SCOPE_STD = 'std';
  const SCOPE_BOOK = 'book';

  useEffect(() => { 
    if( param != null && param != "") {
      if( param.firstname != null ){
        setScope( SCOPE_STD );
        setFirstName( param.firstname );
        setLastName( param.lastname );
      } else if( param.title != null ){
        setScope( SCOPE_BOOK );
        setTitle( param.title );
        setAuthor( param.author );
        setIssueTo( param.issueto );
        setReturnDate( param.returndate );
        setIssueDate( param.issuedate );
      }
    }
  }, []);


  const goBack = () => {
    window.location.reload();
  }

  const saveData = () => {
    if( scope == SCOPE_STD ){
      fetch( SERVER_CREDENTIALS.SET_STUDENT._API, {
        method: SERVER_CREDENTIALS.SET_STUDENT._METHOD,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( 
          { 
            user_id: param.user_id,
            firstname: firstName,
            lastname: lastName
          }
        ) 
      } );
    }else if( scope == SCOPE_BOOK ){
      fetch( SERVER_CREDENTIALS.SET_BOOK._API, {
        method: SERVER_CREDENTIALS.SET_BOOK._METHOD,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( 
          { 
            user_id: param.user_id,
            author: author,
            title: title,
            issueto: issueto,
            issuedate: issuedate,
            returndate: returndate
          }
        ) 
      } );
    }
     
    goBack();
  }
  
  return (
    <div className="Profile-page">
      <div className='profile-page-center'>
        <div className='info-box'>
          <h3>Edit Menu</h3>
          {
            ( scope == SCOPE_STD ) ? 
            <>
            <h6>Student Details</h6>
              <label>
                First Name
                <input type="text" value = { firstName } onChange={ ( event ) => { setFirstName( event.target.value ) } } />
              </label>
              <label>
                Last Name 
                <input type="text" value = { lastName } onChange={ ( event ) => { setLastName( event.target.value ) } }/>
              </label>
            </>    
             : ( scope == SCOPE_BOOK ) ? 
             <>
             <h6>Book Details</h6>
             Title<label>
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
              Author<label>
                <input type="text" value = { author } onChange={ ( event ) => { setAuthor( event.target.value ) } } />
              </label>
              Issued To<label>
                <input type="text" value = { issueto } onChange={ ( event ) => { setIssueTo( event.target.value ) } } />
              </label>
              Issue Date<label>
                <input type="date" value = { issuedate } onChange={ ( event ) => { setIssueDate( event.target.value ) } } />
              </label>
              Return Date<label>
                <input type="date" value = { returndate } onChange={ ( event ) => { setReturnDate( event.target.value ) } } />
              </label>
             </> : 
             <>
              Something went wrong please press Back Button and try again!
             </>
          }
          <input style={{width:'250px', 'margin-left':'35%', 'margin-top':'2%'}} type="button" onClick={ saveData } value="Submit" />
          <input style={{width:'250px', 'margin-left':'35%', 'margin-top':'2%'}} type="button" onClick={ goBack } value="Back" />
        </div>

              
      </div>
    </div>
    )
  }
  
  export default Profile;
  
