
let choice = [];//array to store choice of food
let len;//to calculate length of length

//get table id and store it in table variable
let table = document.getElementById("table");

//The below addData function will get executed when submit button is pressed
function addData() {
  //get firstname from input field with id first-name
  var firstName = document.getElementById("first-name").value;
  //get lastname from input field with id last-name
  var lastName = document.getElementById("last-name").value;
  //get address from input field with id address
  var address = document.getElementById("address").value;
  //get pincode from input field with id pincode
  var pincode = document.getElementById("pincode").value;
  //get state from input field with id state
  var state = document.getElementById("state").value;
  //get country from input field with id country
  var country = document.getElementById("country").value;
  //get food choices from checkboxes with id food
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  //get gender choices from checkboxes with id gender
  var gender = document.querySelector('input[name = "gender"]:checked').value;

  console.log(firstName, lastName, address, pincode, gender, state, country);

  //since we need 2 food choices will insert selected items in choice array
  for (var i = 0; i < checkboxes.length; i++) {
    choice.push(checkboxes[i].value);
  }

  //find length of the choice array
  len=choice.length;

  //check firstname is empty or not, if empty give an alert message
  if(firstName == "")
  {
    window.alert("Please enter your first name.");
    firstName.focus();
    return false;
  }

    //check lastname is empty or not, if empty give an alert message
  if(lastName == "")
  {
    window.alert("Please enter your last name.");
    lastName.focus();
    return false;
  }

    //check address is empty or not, if empty give an alert message
  if(address == "")
  {
    window.alert("Please enter your address.");
    address.focus();
    return false;
  }

    //check pincode is empty or not, if empty give an alert message
  if(pincode == "")
  {
    window.alert("Please enter your pincode.");
    pincode.focus();
    return false;
  }

    //check state is empty or not, if empty give an alert message
  if(state == "")
  {
    window.alert("Please enter state.");
    state.focus();
    return false;
  }

    //check country is empty or not, if empty give an alert message
  if(country == "")
  {
    window.alert("Please enter country.");
    country.focus();
    return false;
  }


  console.log(len);
  //if food choice length is not equal to 2, then provide an alert message and choice array null
  if(len !== 2){
    len=0;
    choice=[];//make choice array null
    window.alert("Please select exactly 2 choices.");
    country.focus();
    return false;
  }

  //if all the conditions are true then add it to the table
 table.innerHTML += `
 <tr>
 <td>${firstName}</td>
 <td>${lastName}</td>
 <td>${address}</td>
 <td>${pincode}</td>
 <td>${gender}</td>
 <td>${choice[0]}, ${choice[1]}</td>
 <td>${state}</td>
 <td>${country}</td>
 </tr>`;

 //Make all the fields null after submit button is pressed
 document.getElementById("first-name").value ="";
 document.getElementById("last-name").value ="";
 document.getElementById("address").value ="";
 document.getElementById("pincode").value ="";
 document.getElementById("country").value ="";
 document.getElementById("state").value ="";
 choice=[];//make choice array null after submit button is pressed

//  document.getElementById("food").value ="";
//  document.querySelector('input[name = "gender"]:checked').value="";
//  document.querySelector('input[name = "food"]:checked').value="";

}
