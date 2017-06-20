$(document).ready(function() {


  $("#register-submit").on("click", function(event) {

    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var passWord = $("#password").val().trim();
    var emailAddress = $("#EmailAdress").val().trim();
    var age = $("#Age").val().trim();
    var grade = $("#Grade").val().trim();
    var userName = $("#userName").val().trim();

    var newUser = {
      FirstName: firstName,
      LastName: lastName,
      PassWord: passWord,
      EmailAddress:emailAddress,
      Age:parseInt(age),
      Grade:parseInt(grade),
      UserName:userName
    }
    console.log(newUser);
    $.post("/signUp", newUser).done(function(data) {
       // event.preventDefault();
      console.log(data)
      if (data.name == "SequelizeValidationError")  
        alert("Please enter correct information!") 
      }
    );
  });

  $("#login-submit").on("click", function(event) {
    event.preventDefault();
 
    var loginUserName = $("#loginUserName").val().trim();
    var loginPassword = $("#loginPassword").val().trim();

    var returnUser = {
      UserName: loginUserName,
      PassWord: loginPassword
    }
    console.log(returnUser);
    
    $.post("/logIn", returnUser).then(function(data){

      window.location = data;
      
    })



  })
});
