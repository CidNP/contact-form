function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "abhibyanjankar@gmail.com",
    Password : "admin9090",
    To : '2011009_abhishek@kusom.edu.np',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}