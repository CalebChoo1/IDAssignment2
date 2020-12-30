var username="s10205375@connect.np.edu.sg";
var password="19V483382v03";
$.ajax({
  type: "GET",
  url: "https://the-one-api.dev/v2/book",
  dataType: 'json',
  headers: {
    "Authorization": "Basic " + btoa(username + ":" + password)
  },
  success: function (result){
      console.log(result)
  }
});