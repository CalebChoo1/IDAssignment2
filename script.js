$.ajax({
  type: "GET",
  url: "https://the-one-api.dev/v2/book",
  dataType: 'json',
  headers: {
    "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
  },
  success: function (result){
      var book1 = result.docs[0].name;
      var book2 = result.docs[1].name;
      var book3 = result.docs[2].name;
      $("#book1").html(book1);
      $("#book2").html(book2);
      $("#book3").html(book3);
  }
});

var button = document.querySelector("#btn1");
var movName = document.querySelector("#movname");
var runtime = document.querySelector("#runtime");
var budget = document.querySelector("#budget");
var revenue = document.querySelector("#revenue");
var nominations = document.querySelector("#nominations");
var wins = document.querySelector("#wins")
var rotten = document.querySelector("#rotten");

button.addEventListener("click", function(){
  fetch("https://the-one-api.dev/v2/movie", {
    headers: {
      "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
    }
  })
  .then(response => response.json()) 
  .then(function(data){
    var movieName = document.getElementById("searchTxt").value;
    for (let i = 0; i < data.docs.length; i++){
      if (movieName.toUpperCase() === data.docs[i].name.toUpperCase()){
        movName.innerText = data.docs[i].name;
        runtime.innerText = data.docs[i].runtimeInMinutes;
        budget.innerText = data.docs[i].budgetInMillions;
        revenue.innerText = data.docs[i].boxOfficeRevenueInMillions;
        nominations.innerText = data.docs[i].academyAwardNominations;
        wins.innerText = data.docs[i].academyAwardWins;
        rotten.innerText = data.docs[i].rottenTomatesScore;
      }
    }
  });
})

var button2 = document.querySelector("#btn2");
var listOfMov = document.querySelector("#movName");
var movieList = [];

button2.addEventListener("click", function(){
  fetch("https://the-one-api.dev/v2/movie", {
    headers: {
      "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
    }
  })
  .then(response => response.json()) 
  .then(function(data){
    for (let i = 0; i < data.docs.length; i++){
      var element = document.createElement("li");
      element.innerHTML = data.docs[i].name;
      $("#movieList").append(element);
    }
  });
})

document.getElementById("btn2").onclick = function(){
  this.disabled = true;
}

var button3 = document.querySelector("#btn3");
var cName = document.querySelector("#charName");
var cHeight = document.querySelector("#charHeight");
var cRace = document.querySelector("#charRace");
var cGender = document.querySelector("#charGender");
var cBirth = document.querySelector("#charBirth");
var cSpouse = document.querySelector("#charSpouse");
var cDeath = document.querySelector("#charDeath");
var cRealm = document.querySelector("#charRealm");
var cHair = document.querySelector("#charHair");
var cWiki = document.querySelector("#charWiki")

button3.addEventListener("click", function(){
  fetch("https://the-one-api.dev/v2/character", {
    headers: {
      "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
    }
  })
  .then(response => response.json()) 
  .then(function(data){
    var charName = document.getElementById("searchChar").value;
    for (let i = 0; i < data.docs.length; i++){
      if (charName.toUpperCase() === data.docs[i].name.toUpperCase()){
        cName.innerText = data.docs[i].name;
        cHeight.innerText = data.docs[i].height;
        cRace.innerText = data.docs[i].race;
        cGender.innerText = data.docs[i].gender;
        cBirth.innerText = data.docs[i].birth;
        cSpouse.innerText = data.docs[i].spouse;
        cDeath.innerText = data.docs[i].death;
        cRealm.innerText = data.docs[i].realm;
        cHair.innerText = data.docs[i].hair;
        cWiki.innerText = data.docs[i].wikiUrl;
        if (cHeight.innerText === "")
        {
          cHeight.innerText = "Null";
        }
        if (cRace.innerText === "")
        {
          cRace.innerText = "Null";
        }
        if (cGender.innerText === "")
        {
          cGender.innerText = "Null";
        }
        if (cBirth.innerText === "")
        {
          cBirth.innerText = "Null";
        }
        if (cSpouse.innerText === "")
        {
          cSpouse.innerText = "Null";
        }
        if (cDeath.innerText === "")
        {
          cDeath.innerText = "Null";
        }
        if (cRealm.innerText === "")
        {
          cRealm.innerText = "Null";
        }
        if (cHair.innerText === "")
        {
          cHair.innerText = "Null";
        }

      }
    }
  });
})