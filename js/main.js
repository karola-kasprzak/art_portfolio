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

function clearInput() {
  document.querySelector('#name').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#message').value = "";
};

function displayAlert () {

};

//scripts:
submitBtn.addEventListener("click", () => {
  addMessage();
  clearInput();
  displayAlert();
})


