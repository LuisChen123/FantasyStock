$(document).ready(function() {


  $("#register-submit").on("click", function(event) {

    var firstName = $("#firstName").val().trim();
    var lastName = $("#lastName").val().trim();
    var passWord = $("#password").val().trim();
    var emailAdress = $("#EmailAdress").val().trim();
    var age = $("#Age").val().trim();
    var grade = $("#Gassword").val().trim();
    var userName = $("#userName").val().trim();

    // if (registerUserName == null || emailAdress == null || password == null || comfoPassword == null || passportNotSame == false) {
    //   alert("You must fillout everying!!!!")
    //   return;
    // }

    var newUser = {
      FirstName: firstName,
      LastName: lastName,
      PassWord: passWord,
      EmailAdress:emailAdress,
      Age:age,
      Grade:grade,
      UserName:userName
    }

    // $.post("/api/allUser", newUser).done(function(data) {
    //     console.log(data)
    //   })
    $.post("/api/Users", newUser).done(function(data) {
      console.log(data)
      if (data.name == "SequelizeValidationError")  
        alert("Please enter correct information!")
      
      }
    });

  });

  $("#login-submit").on("click", function(event) {
 
    var loginUserName = $("#login-userName").val().trim();
    var loginPassword = $("#login-password").val().trim();

    var returnUser = {
      UserName: loginUserName,
      PassWord: loginPassword
    }
    $.post("/login", returnUser).done(function(data) {
      console.log(data)
      if (data === null) {
        alert("No such user or password is not a match!!!")
      } else {
        alert("welcome come back " + data.userName)
        
        localStorage.setItem("returnUserID", returnUserID);
        console.log(localStorage.getItem("returnUserID"));
      }
    });


  })

  

});
