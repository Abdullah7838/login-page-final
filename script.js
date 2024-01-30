function bros(){
	var user = document.getElementById('username').value;
    var pass1 = document.getElementById('pass').value;
    var alert = document.getElementById('alert');
         
          if(user === "Abdullah" || user==="abdullah" 
          	&& pass1 === "12345678"){
                window.open("https://learningig.blogspot.com/", "_blank");
          }else{
            	alert.innerText = "Incorrect Details";
              }
}
