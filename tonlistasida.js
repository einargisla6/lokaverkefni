function getData(){
  axios.get("https://www.theaudiodb.com/api/v1/json")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching:", error);
      });
}
