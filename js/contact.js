
// Start Form Validation

// Username Validation from StackOverFlow
/* ^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$
 └─────┬────┘└───┬──┘└─────┬─────┘└─────┬─────┘ └───┬───┘
       │         │         │            │           no _ or . at the end
       │         │         │            │
       │         │         │            allowed characters
       │         │         │
       │         │         no __ or _. or ._ or .. inside
       │         │
       │         no _ or . at the beginning
       │
       username is 8-20 characters long */
let userValid = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/ig;

// it should have no signs at the begining and should have wodr and could have a 1 to 3 numbers and @ then word then dot(.) at the end word from 2 or more characters
let emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

let form = document.getElementById("form");

form.addEventListener("submit", function(e) {

    e.preventDefault()
    
    function check() {
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        
        // check UserName && email && password validation
        if (username.match(userValid) && email.match(emailValid) && password.match(passwordValid)) {

            window.location.reload();
            alert("thank you for your Msg");
            
        } else {
            e.preventDefault()
            alert("Please enter correct Infos").style.color = "red";
        }
    }
    check();
});
// End Form Validatin