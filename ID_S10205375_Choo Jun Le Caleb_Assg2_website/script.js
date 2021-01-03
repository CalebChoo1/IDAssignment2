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

document.getElementById("btn2").onclick = function () {
  this.disabled = true;
}