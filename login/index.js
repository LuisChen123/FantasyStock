$(document).ready(function() {

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $("#register-submit").on("click", function(event) {
    event.preventDefault();

    var userNames = $("#new-username").val().trim();
    var emailAdress = $("#new-email").val().trim();
    var password = $("#new-password").val().trim();
    var comfoPassword = $("#confirm-password").val().trim();
    var passportNotSame = false;

    if (password !== comfoPassword) {
      passportNotSame = false;
      alert("The password you entry is not same!!please try again!!")
    } else {
      passportNotSame = true;
    }

    if (userNames == null || emailAdress == null || password == null || comfoPassword == null || passportNotSame == false) {
      alert("You must fillout everying!!!!")
      return;
    }

    var newUser = {
      userName: userNames,
      email: emailAdress,
      password: password
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
    event.preventDefault();
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
