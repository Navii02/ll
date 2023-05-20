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

  
  