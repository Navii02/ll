import React from "react";
import './Home.css';

import {Link } from "react-router-dom";

function HomePage(){
  return (
  
      <div className="body">
       <div className="bg"></div>
       <h1>Welcome to the Office</h1>
       <p>Who are You?</p>
       <div className="container">
         <div className="tabs">
           <button id="userTab" className="tab"> <Link to="/login">Student</Link></button>
           <button id="adminTab" className="tab"> <Link to="/admin">Officer</Link></button>
         </div>
       </div>
     </div>
       );
     }
// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the tab elements
  var userTab = document.getElementById('userTab');
  var adminTab = document.getElementById('adminTab');
  /*var userContent = document.getElementById('userContent');
  var adminContent = document.getElementById('adminContent');*/

  // Add event listeners to the tabs
  userTab.addEventListener('click', function() {
    userTab.classList.add('active');
    adminTab.classList.remove('active');
   /* userContent.style.display = 'block';
    adminContent.style.display = 'none';*/
  });

  adminTab.addEventListener('click', function() {
    adminTab.classList.add('active');
    userTab.classList.remove('active');
   /* adminContent.style.display = 'block';
    userContent.style.display = 'none';*/
  });
});

  
  
export default HomePage;

