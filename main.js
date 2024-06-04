function validate() {
 let x = document.forms["myForm"]["name"].value;
 let y = document.forms["myForm"]["code"].value;
 if (x == "" || y == ""){
  alert("Your input cannot be empty!")
  return false;
 } else {
   alert("Your form has been submitted successfully!")
 }
}