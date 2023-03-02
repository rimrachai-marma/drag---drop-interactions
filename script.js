const king = document.querySelector(".chess-piece");

const squares = document.querySelectorAll(".square");

const info = document.querySelector("#info");

let beingDragged;

king.addEventListener("dragstart", (event) => {
  beingDragged = event.target;
});

king.addEventListener("drag", (event) => {
  info.textContent = `You are dragging ${event.target.id}`;
});

squares.forEach((square) => {
  square.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  square.addEventListener("dragenter", (event) => {
    event.target.classList.add("high-light");
  });

  square.addEventListener("dragleave", (event) => {
    event.target.classList.remove("high-light");
  });

  square.addEventListener("drop", (event) => {
    event.target.append(beingDragged);
    event.target.classList.remove("high-light");
  });

  square.addEventListener("dragend", (event) => {
    event.target.classList.add("target");

    setTimeout(() => {
      event.target.classList.remove("target");
    }, 150);

    info.textContent = "";
  });
});
