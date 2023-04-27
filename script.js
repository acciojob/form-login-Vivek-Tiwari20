 let fName = document.getElementById("fname");
 let lName = document.getElementById("lname");

 let form = document.getElementById("form1");

 let submit = document.getElementById("submit");

 submit.addEventListener("click",btnfun);

 function btnfun(){
        fName = document.getElementById("fname").value;
      lName = document.getElementById("lname").value;

     let firstName = document.createElement("p");
      firstName.innerText = fName;

      let lastName = document.createElement("p");
      lastName.innerText = lName;

      alert(fName+" "+lName)
 }