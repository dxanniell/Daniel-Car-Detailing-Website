function changeText(){
  document.getElementById("demo").innerHTML="Hi"
}
function printToConsole(input) {
    window.alert(input);
}
const person = {
  firstName:"Daniel",
  lastName:"Mal"
  favoriteColor:"Green"
  age:"20"
};
let nameOfElement;

let date1 = new Date("9/11/23");
let date2 = new Date();

// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = 
	Math.round(Difference_In_Time / (1000 * 3600 * 24));


// To display the final no. of days (result)

function Days() {
// To display the final no. of days (result)
window.alert ("It's been " +  Difference_In_Days + " days");
}
