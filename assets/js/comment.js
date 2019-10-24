const addComment = e => {
    e.preventDefault()
    const name = document.getElementById("firstName2").value;
    const comment = document.getElementById("comment-area").value;
    let time = new Date();
    let timestamp = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()} - ${time.getHours()}:${time.getMinutes()}`;
    let comments = document.getElementById("comments")
    comments.innerHTML =
     `<div class="comment">
      <p class="name">${name}</p> 
      <p class="time">${timestamp}</p>    
      <p class="comment-text">${comment}</p>
      <br>
      </div> <br>` + comments.innerHTML
  };

  document.getElementById("server-button2").addEventListener("click", addComment);