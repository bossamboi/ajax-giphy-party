console.log("Let's get this party started!");

// create a search input box that takes type=text

// two buttons
// one button to start AJAX request - searchGiphy
// one botton to delete all gifs (clear page) - removeImages

// DATA FUNCTION: create AJAX request that checks GIPHY api for data/url
async function searchGiphy() {
  let searchTerm = $("input").val();
  console.log("searchTerm=", searchTerm);

  let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchTerm, api_key: "vOTSwQwR5j9zIAJmNn7NG2FqZotgdPrL" },
  });
  console.log("searchGiphy response data =", response);

  console.log(response.data.data["0"].images.original.url);
  appendGif(response.data.data["0"].images.original.url);
}

$("#search").on("click", searchGiphy);

$("#remove").on("click", clearGifs);

// DOM FUNCTION: takes the data/url from DATA FUNCTIOn and append gif to the page

function appendGif(url) {
  let $results = $("#results");
  let $image = $(`<img src="${url}"> `);

  console.log("$image=", $image);

  $results.append($image);
}

function clearGifs() {
  $("#results").empty();
}
