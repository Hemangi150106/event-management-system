document.getElementById("adminLogin").addEventListener("click",function(e){
    e.preventDefault();

    const admin = {  
        username: document.getElementById("username").value, 
        password: document.getElementById("password").value, 
    }; 
            
    fetch("http://localhost:8090/admin/login",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(admin)
    })

    .then(res => {
        if (!res.ok) throw new Error("Invalid credentials");
        return res.text();
    })
    .then(msg => {
        alert(msg);
        window.location.href = "admin.html"; // redirect if login successful
    })
    .catch(err => {
        alert(err.message);
    });
 });

      

    
