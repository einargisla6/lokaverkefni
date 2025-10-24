function getData(){
  var texti = document.getElementById("leit").value
  document.getElementById("leit").value = ""
  axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=" +texti)
      .then(function (response) {
        var artists = response.data.artists;
        var app = document.getElementById("app")
        for (var i = 0; i < artists.length; i++) {
            var div = document.createElement("div")
            div.classList.add("artist-card")
            var h1 = document.createElement("h1")
            var img = document.createElement("img")
            var h2 = document.createElement("h2")
            var p = document.createElement("p")
            var button = document.createElement("button");
            var favBtn = document.createElement("button");
            if (parseInt(artists[i].intMembers) > 1) {
              h1.innerHTML = artists[i].strArtist;
              img.src = artists[i].strArtistCutout
              h2.innerHTML = artists[i].strGenre
              button.textContent = "More info";
              favBtn.innerHTML = "★";
              favBtn.classList.add("favorite-btn");
              button.onclick = (function(artist) {
                return function() {
                  document.getElementById("modal-name").textContent = artist.strArtist;
                  document.getElementById("modal-img").src = artist.strArtistCutout || "fallback.jpg";
                  document.getElementById("modal-genre").textContent = artist.strGenre || "Unknown genre";
                  document.getElementById("modal-bio").textContent = artist.strBiographyEN || "No biography available.";

                  document.getElementById("artistModal").style.display = "block";
            };
              })(artists[i]);
              //p.innerHTML = artists[i].strBiographyEN
              div.append(h1)
              div.append(img)
              div.append(h2)
              div.append(button)
              div.append(favBtn)
              //div.append(p)
              app.append(div)
            }
            
            else {
              h1.innerHTML = artists[i].strArtist;
              img.src = artists[i].strArtistCutout
              h2.innerHTML = artists[i].strGenre
              favBtn.innerHTML = "★";
              favBtn.classList.add("favorite-btn");
              //p.innerHTML = artists[i].strBiographyEN
              div.append(h1)
              div.append(img)
              div.append(h2)
              div.append(button)
              div.append(favBtn)
              //div.append(p)
              app.append(div)
              button.textContent = "More info";
              button.onclick = (function(artist) {
                return function() {
                  document.getElementById("modal-name").textContent = artist.strArtist;
                  document.getElementById("modal-img").src = artist.strArtistCutout || "fallback.jpg";
                  document.getElementById("modal-genre").textContent = artist.strGenre || "Unknown genre";
                  document.getElementById("modal-bio").textContent = artist.strBiographyEN || "No biography available.";

                  document.getElementById("artistModal").style.display = "block";
                };
              })(artists[i]);
            }
            document.querySelector(".close").onclick = function() {
            document.getElementById("artistModal").style.display = "none";
            };

// Close modal when clicking outside
            window.onclick = function(event) {
              if (event.target === document.getElementById("artistModal")) {
                document.getElementById("artistModal").style.display = "none";
              }
            };
            favBtn.onclick = (function (artist, btn) {
              console.log(artist)
              var artistId = artist.idArtist
                let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                if (favorites.includes(artistId)) {
                  // fjarlægja
                  favorites = favorites.filter(id => id !== artistId);
                  btn.classList.remove("active");
                  alert("fjarlæga")
                } else {
                  // bæta við
                  favorites.push(artistId);
                  btn.classList.add("active");
                  alert("bæta við")
                }

                localStorage.setItem("favorites", JSON.stringify(favorites));
              })(artists[i],favBtn);
            
        }
      })
      .catch(error => {
        console.error("Error fetching:", error);
      });
}
//strArtist, strStyle, strGenre, strBiographyEN, strArtistCutout
// spyrja chat um MODAL