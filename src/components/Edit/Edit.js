import React, { useState, useEffect } from "react";
import "./Edit.css";
import {
  SERVER_CREDENTIALS,
} from "../../ext/dependencies/CONSTANTS";

const Profile = ( { paramFirstName, paramBookTitle } ) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("f");
  const [type, setType] = useState("dev");
  const [image, setImage] = useState(null);

  const getUserProfile = (tempEmail) => {
    fetch(SERVER_CREDENTIALS.GET_USER._API, {
      method: SERVER_CREDENTIALS.GET_USER._METHOD,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      }),
    })
    .then( response => response.json() )
    .then( responseJson => {
      if( responseJson !== null && responseJson.data !== null ){
      }
    });
  }
  useEffect(() => {

    getUserProfile(localStorage.getItem("USER_CREDENTIALS.INFO._USER_EMAIL"));
  }, []);

  /**
   * updateProfile(...)
   *
   *      this function is used to hit Login Api and Set User
   *
   *      @param { email, password } userInputs
   *
   *      @returns { response } from Api as true or false
   *
   */
  const updateProfile = () => {
    if ( true ) {
      //  making requestt to backend for login
      fetch(SERVER_CREDENTIALS.EDIT_USER._API, {
        method: SERVER_CREDENTIALS.EDIT_USER._METHOD,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success) {
          } else {
            //  pop will popout to tell about Failed login
            //responseMessage("Oh no!", "Something went wrong, Please Try Again");
          }
        });
    } else {
      //  pop will tells about empty fields
     // responseMessage("Info", "Please fill name atleast");
    }
  };

  const goBack = () => {
    window.location.reload();
  }

  return (
    <div className="Profile-page">
      <div className='profile-page-center'>
        <div className='info-box'>
          <h3>Edit Menu</h3>
          {
            ( paramFirstName != null && paramFirstName != "" ) ? 
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
             : ( paramBookTitle != null && paramBookTitle != "" ) ? 
             <>
             <h6>Book Details</h6>
              <label>
                Title
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
              <label>
                Title
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
              <label>
                Title
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
              <label>
                Title
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
              <label>
                Title
                <input type="text" value = { title } onChange={ ( event ) => { setTitle( event.target.value ) } } />
              </label>
             </> : 
             <>
              Something went wrong please press Back Button and try again!
             </>
          }
          <input style={{width:'250px', 'margin-left':'35%', 'margin-top':'2%'}} type="button" onClick={ updateProfile } value="Submit" />
          <input style={{width:'250px', 'margin-left':'35%', 'margin-top':'2%'}} type="button" onClick={ goBack } value="Back" />
        </div>

              
      </div>
    </div>
    )
  }
  
  export default Profile;
  
