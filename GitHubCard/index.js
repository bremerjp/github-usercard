const cards = document.querySelector('.cards');
const followersArray = ["eralpkor","tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

axios.get("https://api.github.com/users/bremerjp").then(response => {
  console.log(response)  
  const newCard = createCard(response.data);
    cards.appendChild(newCard);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

followersArray.forEach(element => {
  const userName = element;
  axios.get(`https://api.github.com/users/${element}`).then(response => {
  console.log(response)  
  const newCard = createCard(response.data);
    cards.appendChild(newCard);
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
});

const createCard = (userObj) => {
  const card = document.createElement('div'),
    image = document.createElement('img'),
    cardInfo = document.createElement('div'),
    name = document.createElement('h3'),
    username = document.createElement('p'),
    userLocation = document.createElement('p'),
    profile = document.createElement('p'),
    link = document.createElement('a'),
    userFollowers = document.createElement('p'),
    userFollowing = document.createElement('p'),
    userBio = document.createElement('p');
    

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  card.appendChild(image);
  card.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  image.src = userObj.avatar_url;
  name.textContent = userObj.name;
  username.textContent = userObj.login;
  userLocation.textContent = `Location ${userObj.location}`;
  profile.textContent = 'Profile: ';
  link.href = userObj.html_url;
  link.textContent = userObj.html_url;
  userFollowers.textContent = `Followers: ${userObj.followers}`;
  userFollowing.textContent = `Following: ${userObj.following}`;
  profile.appendChild(link);
  userBio.textContent = `Bio: ${userObj.bio}`;
  console.log(card);
  return card;
}

/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:<a href={address to users github page}>{address to users github page}</a></p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

// Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/