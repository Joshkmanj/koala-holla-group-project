console.log( 'js' );

let readyForTransfer = false;

let gender;

$( document ).ready( function(){
  console.log( 'JQ' );

    // Establish Click Listeners
    $( '#addButton' ).on( 'click', handleSubmit);
    $('.readyButton').on('click', determineReady);
    $('.genderButton').on('click', determineGender)
    // load existing koalas on page load
    getKoalas();
}); // end doc ready


function determineGender(){
  console.log('in determineReady');
  
  let genderValue = $(this).data().gender;
  
  if (genderValue === 'M') {
    gender = 'M';
  } else if (genderValue === 'F') {
    gender = 'F';
  }  
} // end determineReady

function determineReady(){
  console.log('in determineReady');
  
  let ready = $(this).data().ready;
  console.log('ready', ready);
  
  if (ready === true) {
    readyForTransfer = true;
  } else if (ready === false) {
    readyForTransfer = false;
  }

  console.log('readyForTransfer', readyForTransfer);
  
} // end determineReady


function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: "GET",
    url: "/koalas"
  }).then(function(response){
    console.log('response', response);
    renderKoala(response); // calls renderKoala function 

  }).catch(function(error){
    console.log('You done messed up, boi');
    
  })
} // end getKoalas


function handleSubmit(){
  console.log('Submit button was clicked');
  
  // create object that takes in input values
  let koala = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: gender,
    transfer: readyForTransfer,
    notes: $('#notesIn').val()
  }
  
  // call postKoala with new object
  postKoala(koala);

} // in handleSubmit

function postKoala( koala ){
  console.log( 'in saveKoala', koala );
  // ajax call to server to get koalas
 
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koala
  }).then(function(response){
    console.log('Response from server', response);
    
    getKoalas();
  }).catch(function(error){
    console.log('Error in POST', error);
  })
}
// this function will append the current koala from the database to DOM
function renderKoala(response) {
  console.log('Koala has been rendered');
  for (let i = 0; i < response.length; i++) {
    $('thead').append(`
    <tr data-id=${response[i].id}>
      <td>${response[i].name}</td>
      <td>${response[i].age}</td>
      <td>${response[i].gender}</td>
      <td>${response[i].ready_to_transfer}</td>
      <td>${response[i].notes}</td>
      <button class="btn-delete" data-id=${response[i].id}>DELETE</button>
      </td>
    `)
  } // end of for loop
}; // end of function


