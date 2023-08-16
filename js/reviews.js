const { reviewData } = window;

document.addEventListener("DOMContentLoaded", function () {
  // Container for all cards
  const cardContainer = document.querySelector(".card-container");
  
  function createCard(review) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const name = document.createElement("h2");
    name.textContent = review.name;
  
    const date = document.createElement("time");
    date.textContent = review.date;

    const stars = document.createElement("div");
    /*stars.classList.add("stars");*/

    const emptyStar = document.createElement("img");
    emptyStar.src = "../media/e-star.png"

    const fullStar = document.createElement("img");
    fullStar.src = "../media/f-star.png"

    const content = document.createElement("p");
    content.textContent = review.content;

    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(stars);
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("img");
      star.src = i < parseInt(review.rating) ? fullStar.src : emptyStar.src;
      /*star.style.width = '100px';
      star.style.height = '100px';*/
      stars.appendChild(star);
  }
    card.appendChild(content);
    cardContainer.appendChild(card);
  }

  function displayAllReviews() {
    cardContainer.innerHTML = "";
    reviewData.forEach(createCard);
  }

  displayAllReviews();

  const form = document.getElementById('review');
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name-input").value;
    const date = new Date();
    const rating = document.getElementById("rating-input").value;
    const content = document.getElementById("content-input").value;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;

    if(rating < 1 || rating > 5) {
      alert("Insert a valid rating value.");
      return;
    }

    const newReview = {
      name: name,
      date: currentDate,
      rating: rating,
      content: content
    };

    reviewData.push(newReview);
    createCard(newReview);

    form.reset();
  });
});