document.getElementById("savebtn").addEventListener("click",function(e){
      e.preventDefault();

      const idValue = document.getElementById("eventId").value;

      if(idValue === ""){
        alert("Please enter Event ID");
        return;
      }

      const event = { 
            eventId: parseInt(idValue),
            eventname: document.getElementById("eventname").value.trim(), 
            date: document.getElementById("date").value, 
            description: document.getElementById("description").value.trim(), 
      }; 
            
      fetch("http://localhost:8090/event/insert",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(event)
      })

      .then(res => {
        if(!res.ok) throw new Error("Server error");
        return res.json();
      })
      .then(data => {
            alert("Event Saved Successfully");
            console.log(data);
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Failed to save event");
      });

      document.getElementById("eventId").value="";
      document.getElementById("eventname").value=""; 
      document.getElementById("date").value=""; 
      document.getElementById("description").value=""; 

      
}); 
            
            
document.getElementById("cancelbtn").addEventListener("click", function(){
      document.getElementById("eventname").value=" "; 
      document.getElementById("date").value=" "; 
      document.getElementById("description").value=" "; 
                  
})