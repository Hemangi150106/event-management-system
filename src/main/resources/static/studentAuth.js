document.getElementById("login").addEventListener("click",function(e){
      e.preventDefault();

      const studentLogin = {  
            email: document.getElementById("inputEmail3").value, 
            password: document.getElementById("inputPassword3").value.trim(), 
      }; 
            
      fetch("http://localhost:8090/student/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(studentLogin)
      })

      .then(res => {
            if (!res.ok) throw new Error("Invalid credentials");
            return res.text();
        })
        .then(msg => {
            alert(msg);
            window.location.href = "student.html"; // redirect if login successful
        })
        .catch(err => {
            alert(err.message);
        });
 });

      

    
