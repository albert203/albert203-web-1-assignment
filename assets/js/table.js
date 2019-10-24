var table = document.getElementById('table-heading');

var xhr = new XMLHttpRequest();
xhr.open("GET", "songs.json");
console.log("hello")

xhr.onload = () =>{
  console.log("test")
  console.log(xhr.status)
  if (xhr.status === 200) {
    console.log("hi")
    var songs = JSON.parse(xhr.responseText);
    console.log(songs);
    
    for(var i in songs) {
        table.innerHTML +=
        `<tr class="header">
            <td class="id-data">${songs[i].id}</td>
            <td class="artist-data">${songs[i].artist}</td>
            <td class="name-data">${songs[i].name}</td>
            <td class="releasedate-data">${songs[i].releasedate}</td>
            <td class="album-data">${songs[i].album}</td>
            <td class="genre-data">${songs[i].genre}</td>
				
          </tr>
          </thead>` 
          
        ;
    };
  } 
  else if (xhr.status === 404) {
    console.log("err, not found");
  }
  xhr.onerror = function(){
    console.log('Request Error...');
  }
}
xhr.send();

document.querySelector('#rating').addEventListener('click', function (e) {
  let action = 'add';
  for (const span of this.children) {
      span.classList[action]('active');
      if (span === e.target) action = 'remove';
  }
});

document.querySelector('#rating2').addEventListener('click', function (e) {
  let action = 'add';
  for (const span of this.children) {
      span.classList[action]('active');
      if (span === e.target) action = 'remove';
  }
});

document.querySelector('#rating3').addEventListener('click', function (e) {
  let action = 'add';
  for (const span of this.children) {
      span.classList[action]('active');
      if (span === e.target) action = 'remove';
  }
});

document.querySelector('#rating4').addEventListener('click', function (e) {
  let action = 'add';
  for (const span of this.children) {
      span.classList[action]('active');
      if (span === e.target) action = 'remove';
  }
});
