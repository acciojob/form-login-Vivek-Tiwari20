function  getFormvalue(){
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");

        fname = document.getElementById("fname").value;
         lname = document.getElementById("lname").value;

        let submit = document.getElementById("submit");

        alert(fname+" "+lname);


 }


     submit.addEventListener("click",getFormvalue);

         