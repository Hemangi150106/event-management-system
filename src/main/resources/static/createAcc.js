document.getElementById("signUp").addEventListener("click",function(e){
      e.preventDefault();

      const student = { 
            name: document.getElementById("inputName").value.trim(), 
            email: document.getElementById("inputEmail3").value, 
            password: document.getElementById("inputPassword3").value.trim(), 
      }; 
            
      fetch("http://localhost:8090/student/insert",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
      })

      .then(res => {
        if(!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then(data => {
            alert("signUp Successful!!");
            console.log(data);
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Failed to SignUp");
      });

      document.getElementById("inputName").value="";
      document.getElementById("inputEmail3").value=""; 
      document.getElementById("inputPassword3").value=""; 
      

      
}); 