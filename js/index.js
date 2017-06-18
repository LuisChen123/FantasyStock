$(document).ready(function() {


  $("#register-submit").on("click", function(event) {

    alert("hello")
    var registerUserName = $("#registerUserName").val().trim();
    var registerPassword = $("#registerPassword").val().trim();
    var registerEmailAdress = $("#registerEmailAdress").val().trim();

    var loginUserName = $("#loginUserName").val().trim();
    var loginPassword = $("#loginPassword").val().trim();;


    if (registerUserName == null || emailAdress == null || password == null || comfoPassword == null || passportNotSame == false) {
      alert("You must fillout everying!!!!")
      return;
    }

    var newUser = {
      userName: registerUserName,
      email: registerEmailAdress,
      password: registerPassword
    }


    $.post("/api/allUser", newUser).done(function(data) {
        console.log(data)
      })
    $.post("/api/Users", newUser).done(function(data) {
      console.log(data)
      if (data.name == "SequelizeValidationError") {
        alert("Please enter correct information!")
      } else {
        alert("You registerion is sucessfully!!!!")
        window.location.href = "index.html";
      }
    });

  });

  $("#login-submit").on("click", function(event) {
 
    var loginUserName = $("#login-userName").val().trim();
    var loginPassword = $("#login-password").val().trim();

    var returnUser = {
      userName: loginUserName,
      password: loginPassword
    }
    $.post("/api/returnUsers", returnUser).done(function(data) {
      console.log(data)
      if (data === null) {
        alert("No such user or password is not a match!!!")
      } else {
        alert("welcome come back " + data.userName)
        window.location.href = "dashboard.html";
        localStorage.setItem("returnUserID", returnUserID);
        console.log(localStorage.getItem("returnUserID"));
      }
    });


  })

  

});
