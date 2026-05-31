const emailInput = document.getElementById("email");
const passwordlInput = document.getElementById("password");
const loginButtonlInput = document.getElementById("loginBtn");
const passwordPattern = /^[A-Za-z](?=.*\d)(?=.*[@#$%&]).*$/

loginButtonlInput.addEventListener("click", function(){
  const email = emailInput.value;
  const password = passwordlInput.value;

  if (email === "") {
    alert("Please enter your email");
  }
  else if (!email.endsWith("@gmail.com")) {
    alert("Invalid Email!");
  }
  else if (password === "") {
    alert("Please enter your Password");
  }
  else if (!passwordPattern.test(password)) {
    alert("Must contain @#$%&");
  }
  else if (password.length <= 7) {
    alert("Atleast 8 character");
  }
  else{
    alert("Login Successful");
  }
});

