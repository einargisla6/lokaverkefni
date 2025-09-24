function getData(){
  var texti = document.getElementById("leit").value

  axios.get("https://www.theaudiodb.com/api/v1/json" + texti)
      .then(function (response) {
        var artist = response.data;
        var app = document.getElementById("app")
        for (var i = 0; i < artist.length; i++) {
            var div = document.createElement("div")
            var h1 = document.createElement("h1")
            var img = document.createElement("img")
            var h2 = document.createElement("h2")
            var p = document.createElement("p")
            var ahtml = document.createElement("a")
            var p2 = document.createElement("p")
            var p1 = document.createElement("p")
            var p3 = document.createElement("p")
        }
      })
      .catch(error => {
        console.error("Error fetching:", error);
      });
}
