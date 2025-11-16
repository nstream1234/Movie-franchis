const posters = [
  {
    img: "Posters/2515dd145f54adaf8a5a0da1a88eed76.jpg",  // 27x40 inch ratio image
    link: "https://trustanyone321.github.io/Fast-Five/"
  },
  {
    img: "Posters/2fbf02248319c6e9152b079234b63fa4.jpg",
    link: "https://trustanyone321.github.io/Avengers-Infinity-War/"
  },
  {
    img: "Posters/769f51d079c66c1a9317b6f5df4859b5.jpg",
    link: "https://trustanyone321.github.io/The-Hobbit-An-Unexpected-Journey/"
  },
  {
    img: "Posters/e2684303944f4e2649ec09504b95e512.jpg",
    link: "https://trustanyone321.github.io/Superman/"
  },
  {
    img: "Posters/f29e81c4527a8d05f00e6a2f13d2b510.jpg",
    link: "https://trustanyone321.github.io/Transformers-Rise-of-the-Beasts/"
  }
];

// Inject into grid
const grid = document.getElementById("posterGrid");

posters.forEach(p => {
  const card = document.createElement("a");
  card.href = p.link;
  card.classList.add("poster-card");

  card.innerHTML = `<img src="${p.img}" alt="Poster">`;

  grid.appendChild(card);
});