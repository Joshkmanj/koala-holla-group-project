console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  // setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

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

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
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


