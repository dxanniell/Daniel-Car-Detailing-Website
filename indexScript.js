function changetext(){
document.getElementById("demo").innerHTML="Hi"
}
let person = {
  firstName:"Daniel",
  age: 38,
  favoriteColor: "Green"
};
function birthday(){
	person.age=person.age+1;
	window.alert(person.age);
}
