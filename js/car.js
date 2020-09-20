
  var randomNumber = Math.ceil(Math.random()*50);
  console.log(randomNumber);

async function addImageToDOM() {
  
  let url = `https://api.unsplash.com/search/photos/?client_id=92NZFIvM1iy3iWidpjahP7POR7_sC-AEav3mH4sDNUs&query=car&page=${randomNumber}&per_page=30`;

     fetch(url)
      .then(function(response){
           return response.json();
      })
      .then(function(data){
          //  console.log(data);
           data.results.forEach(function(photo){
           let result = photo.urls.regular;
           const imageDiv = document.createElement('div');
           imageDiv.className = 'one-fourth';
           const imgElement = document.createElement('img');
           imgElement.src = generateImageLinks();
           imageDiv.append(imgElement);
           document.querySelector('.container').append(imageDiv);
           function generateImageLinks() {
            return result;
          }
           });

      })

     }

function fetchRandomImages(number) {
  for (var i = 0; i < number; i++) {
    addImageToDOM();
  }
}

fetchRandomImages(30);

window.addEventListener('scroll', function() {
  if(window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
    fetchRandomImages(50);
    
  }
})




