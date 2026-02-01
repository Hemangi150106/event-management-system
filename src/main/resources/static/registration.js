document.getElementById("submit").addEventListener("click",function(e){
      e.preventDefault();

      const student = { 
            
            name: document.getElementById("text").value.trim(), 
            email: document.getElementById("inputEmail3").value, 
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
            alert("Registered Successfully");
            console.log(data);
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Failed to save event");
      });

      document.getElementById("text").value="";
      document.getElementById("inputEmail3").value=""; 
      

      
}); 