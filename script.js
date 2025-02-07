// Movie Object
const Movie = {
  title: "Wanted",
  director: "Timur Bekmambetov",
  releaseDate: "September 25, 2009",
  genre: "Action",
  rating: 5
};

// DOM Elements
const movieTitle = document.getElementById("movieTitle");
const movieDirector = document.getElementById("movieDirector");
const movieReleaseDate = document.getElementById("movieReleaseDate");
const movieGenre = document.getElementById("movieGenre");
const movieRating = document.getElementById("movieRating");

// Input Fields
const movieInput = document.getElementById("movieInput");
const directorInput = document.getElementById("directorInput");
const releaseDateInput = document.getElementById("releaseDateInput");
const genreInput = document.getElementById("genreInput");
const ratingInput = document.getElementById("ratingInput");

// Buttons
const updateMovieButton = document.getElementById("updateMovieButton");
const updateDirectorButton = document.getElementById("updateDirectorButton");
const updateReleaseDateButton = document.getElementById("updateReleaseDateButton");
const updateGenreButton = document.getElementById("updateGenreButton");
const updateRatingButton = document.getElementById("updateRatingButton");

// Function to Validate Input
function validateInput(input) {
  const value = input.value.trim();
  if (value === "") {
    alert("Please fill in this field.");
    input.focus();
    return false;
  };
  return true;
}


// Save Movie to Local Storage
function saveMovieToLocalStorage() {
  console.log("Saving Movie to Local Storage...", Movie);
  localStorage.setItem("movie", JSON.stringify(Movie));
}

// Load Movie from Local Storage
function loadMovieFromLocalStorage() {
  const savedMovie = localStorage.getItem("movie");
  if (savedMovie) {
    console.log("Loading Movie from Local Storage...");
    Object.assign(Movie, JSON.parse(savedMovie)); // Update Movie object
  } else {
    console.log("No movie found in Local Storage, using default.");
  }
}

// Unified Update Function
function infoUpdate(input, property, textElement, displayText) {
  const selectedDate = input.valueAsDate
  console.log("🚀 ~ infoUpdate ~ selectedDate:", selectedDate)

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
const dateString = new Intl.DateTimeFormat('en-US', options).format(selectedDate);
console.log("🚀 ~ infoUpdate ~ dateString:", dateString)

  if (validateInput(input)) {
    if (property === "releaseDate") {
      Movie[property] = dateString; // Update the movie object
      textElement.textContent = `${displayText} ${Movie[property]}`; // Update the DOM
      saveMovieToLocalStorage(); // Save the updated object to local storage
      input.value = ""; // Clear the input field // Outputs date in the user's locale format
    }else {
          Movie[property] = input.value.trim(); // Update the movie object
    textElement.textContent = `${displayText} ${Movie[property]}`; // Update the DOM
    saveMovieToLocalStorage(); // Save the updated object to local storage
    input.value = ""; // Clear the input field
    }



  }
}

// Add Event Listeners for All Buttons
updateMovieButton.addEventListener("click", () => {
  infoUpdate(movieInput, "title", movieTitle, "This is my favorite movie:");
});

updateDirectorButton.addEventListener("click", () => {
  infoUpdate(directorInput, "director", movieDirector, "The director of my favorite movie is:");
});

updateReleaseDateButton.addEventListener("click", () => {
  infoUpdate(releaseDateInput, "releaseDate", movieReleaseDate, "The release date of my favorite movie is:");
});

updateGenreButton.addEventListener("click", () => {
  infoUpdate(genreInput, "genre", movieGenre, "The genre of my favorite movie is:");
});

updateRatingButton.addEventListener("click", () => {
  infoUpdate(ratingInput, "rating", movieRating, "The rating of my favorite movie is:");
});

// Load Movie from Local Storage on Page Load
loadMovieFromLocalStorage();

// Initial Rendering
movieTitle.textContent = `This is my favorite movie: ${Movie.title}`;
movieDirector.textContent = `The director of my favorite movie is: ${Movie.director}`;
movieReleaseDate.textContent = `The release date of my favorite movie is: ${Movie.releaseDate}`;
movieGenre.textContent = `The genre of my favorite movie is: ${Movie.genre}`;
movieRating.textContent = `The rating of my favorite movie is: ${Movie.rating}`;

