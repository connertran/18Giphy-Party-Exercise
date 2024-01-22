console.log("Let's get this party started!");
const submitBtn= document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const memesArea = document.querySelector('.div-for-memes');
const deleteBtn = document.querySelector('.delete-btn');

// using axios to connect with giphy api
// getting the url of the image
async function getGIF(searchGif){ 
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params:{q:searchGif, api_key: 'F1dZfKez84ShwyjlOFdL9vgxn8STXAEy'}});
  let randomIdx = Math.floor(Math.random() * Object.keys(res.data.data).length);
  console.log(res)
  console.log(res.data.data[randomIdx].url);
  appendNewMeme(res.data.data[randomIdx].images.original.url);
}

function appendNewMeme(url){
  const newIMG = document.createElement('img');
  newIMG.src = url;
  memesArea.append(newIMG);
}

const submitForm = function(e){
  const wordInsideTheSearchBar = searchBar.value;
  // empty the search bar after the word is searched
  searchBar.value= "";
  e.preventDefault();
  getGIF(wordInsideTheSearchBar);
};

const deleteAllGifs = (e)=> {
  e.preventDefault()
  memesArea.innerHTML= "";}

submitBtn.addEventListener('click', submitForm);
deleteBtn.addEventListener('click', deleteAllGifs);


