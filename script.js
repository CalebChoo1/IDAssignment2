$(document).ready(function(){
  //function to retreive book names and display them on html
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

  //variables for searching movie details
  var button = document.querySelector("#srchMovBtn");
  var movName = document.querySelector("#movname");
  var runtime = document.querySelector("#runtime");
  var budget = document.querySelector("#budget");
  var revenue = document.querySelector("#revenue");
  var nominations = document.querySelector("#nominations");
  var wins = document.querySelector("#wins");
  var rotten = document.querySelector("#rotten");

  //function to search and display movie details when button is clicked
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

  //variable for display movie button
  var button2 = document.querySelector("#displayMovBtn");

  //function to display all movies when button is clicked
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
  });

  //function to disable display movies button after one click to prevent repitition
  document.getElementById("displayMovBtn").onclick = function(){
    this.disabled = true;
  };

  //variables for searching character details
  var button3 = document.querySelector("#srchCharBtn");
  var cName = document.querySelector("#charName");
  var cHeight = document.querySelector("#charHeight");
  var cRace = document.querySelector("#charRace");
  var cGender = document.querySelector("#charGender");
  var cBirth = document.querySelector("#charBirth");
  var cSpouse = document.querySelector("#charSpouse");
  var cDeath = document.querySelector("#charDeath");
  var cRealm = document.querySelector("#charRealm");
  var cHair = document.querySelector("#charHair");
  var cWiki = document.querySelector("#charWiki");

  //function to search and display character details when button is clicked
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
  });

  //variables for generating random quote and checking which movie and character it is from
  var button4 = document.querySelector("#randomQuote");
  var rQuote = document.querySelector("#userQuote");
  var coQuote = document.querySelector("#charOfQuote");
  var moQuote = document.querySelector("#movOfQuote");

  //function to check which character the quote is from
  function checkChar(charID) {
    $.ajax({
      type: "GET",
      url: "https://the-one-api.dev/v2/character",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
      },
      success: function (result){
        for (let i = 0; i < result.docs.length; i++){
          if (charID === result.docs[i]._id){
            coQuote.innerHTML = '-' + result.docs[i].name;
          }
        }
      }
    });
  }

  //function to check which movie the quote is from
  function checkMov(movID) {
    $.ajax({
      type: "GET",
      url: "https://the-one-api.dev/v2/movie",
      dataType: 'json',
      headers: {
        "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
      },
      success: function (result){
        for (let i = 0; i < result.docs.length; i++){
          if (movID === result.docs[i]._id){
            moQuote.innerHTML = 'From the movie: ' + result.docs[i].name;
          }
        }
      }
    });
  }

  //function to generate and display random quote along with which character and movie it is from 
  button4.addEventListener("click", function(){
    fetch("https://the-one-api.dev/v2/quote", {
      headers: {
        "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
      }
    })
    .then(response => response.json()) 
    .then(function(data){
      var randomNum = Math.floor(Math.random() * (data.docs.length));
      var ranQuote = data.docs[randomNum].dialog;
      rQuote.innerHTML = '"' + ranQuote + '"';
      for (let i = 0; i < data.docs.length; i++){
        if (ranQuote === data.docs[i].dialog) {
          var charID = data.docs[i].character;
          var movID = data.docs[i].movie;
          checkChar(charID);
          checkMov(movID);
        }
      }
    });
  });
});
