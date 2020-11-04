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
function createAlert () {
  
  const rootDiv = document.getElementById("alert-field");
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("class", "alert alert-primary alert-dismissible fade show");
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = `<strong>Dziękuję za wiadomość!</strong> Skontaktuję się z Tobą wkrótce.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`
  rootDiv.appendChild(alertDiv);

  return 
}
    
    //allows to set a timer to display alert
function displayAlert () {
  createAlert();
};

//scripts:
submitBtn.addEventListener("click", () => {
  addMessage();
  clearInput();
  displayAlert();
})


