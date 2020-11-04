//global variables:
const allMessages = [];
const submitBtn = document.querySelector('#submit');

//classes:
class Message {
  constructor(name, email, message, date) {
    this.name = name,
      this.email = email,
      this.message = message,
      this.date = date
  }
};


// function declarations:

    //read input and add new object to allMessages table
function addMessage () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let date = new Date();
  let newMsg = new Message(name,email,message,date);
  allMessages.push(newMsg);
  console.log("addMessage -> allMessages", allMessages);
  return; 
}

    //clears input fields
function clearInput() {
  document.querySelector('#name').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#message').value = "";
};

    //creates an Alert div in DOM
function createAlert (alertType, alertMessage) {
  
  const rootDiv = document.getElementById("alert-field");
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("class", `alert ${alertType} alert-dismissible fade show`);
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = `${alertMessage}<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`
  rootDiv.appendChild(alertDiv);

  return 
}
    
    //removes an alert in DOM
function removeAlert () {
  mydiv = document.getElementById("alert-field");
while (mydiv.firstChild) {
  mydiv.removeChild(mydiv.firstChild);
  }
}

    //timeout function to remove alert after 5 s
function clearAlert () {    
    setTimeout(removeAlert, 5000);
};

    //Input fields validation
function validateInput () {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
    createAlert("alert-danger", "Musisz uzupełnić wszystkie pola")
  } else {
    addMessage();
    clearInput();
    createAlert("alert-primary","<strong>Dziękuję za wiadomość!</strong> Skontaktuję się z Tobą wkrótce.");
    clearAlert();
  }
};

//scripts:
submitBtn.addEventListener("click", () => {
  removeAlert();
  validateInput(); 
})


