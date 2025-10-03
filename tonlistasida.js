function getData(){
  var texti = document.getElementById("leit").value

  axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=" +texti)
      .then(function (response) {
        var artists = response.data.artists;
        var app = document.getElementById("app")
        for (var i = 0; i < artists.length; i++) {
            var div = document.createElement("div")
            var h1 = document.createElement("h1")
            var img = document.createElement("img")
            var h2 = document.createElement("h2")
            var p = document.createElement("p")
            var p2 = document.createElement("p")
            var p1 = document.createElement("p")
            var p3 = document.createElement("p")
            if (parseInt(artists[i].intMembers) > 1) {
              h1.innerHTML = artists[i].strArtist + " - " + "Band";
              img.src = artists[i].strArtistCutout
              h2.innerHTML = artists[i].strGenre
              p.innerHTML = artists[i].strBiographyEN
              div.append(h1)
              div.append(img)
              div.append(h2)
              div.append(p)
              app.append(div)
            }
            else {
              h1.innerHTML = artists[i].strArtist;
              img.src = artists[i].strArtistCutout
              h2.innerHTML = artists[i].strGenre
              p.innerHTML = artists[i].strBiographyEN
              div.append(h1)
              div.append(img)
              div.append(h2)
              div.append(p)
              app.append(div)
            }
        }
      })
      .catch(error => {
        console.error("Error fetching:", error);
      });
}
//strArtist, strStyle, strGenre, strBiographyEN, strArtistCutout