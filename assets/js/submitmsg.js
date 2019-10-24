const submitMessage = () => {
    const name = document.getElementById("firstName").value
    window.alert(`Thank you for your message ${name}`) 
  }

document.getElementById("server-button").addEventListener("click", submitMessage);