$.ajax({
  type: "GET",
  url: "https://the-one-api.dev/v2/book",
  dataType: 'json',
  headers: {
    "Authorization": "Bearer vfSSlo3EYHKB5s0VEep4"
  },
  success: function (result){
      console.log(result);
      var book1 = result.docs[0].name;
      var book2 = result.docs[1].name;
      var book3 = result.docs[2].name;
      $("#book1").html(book1);
      $("#book2").html(book2);
      $("#book3").html(book3);
  }
});