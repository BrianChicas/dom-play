const spans = document.querySelectorAll("div#play span");

for (const mySpan of spans) {
  mySpan.addEventListener("click", function () {
    let myActor = mySpan.dataset.actor;
    highlightActor(myActor);
  });
}

function highlightActor(myActor) {
  for (const mySpan of spans) {
    if (mySpan.dataset.actor === myActor) {
      mySpan.style.backgroundColor = "orange";
      mySpan.style.fontWeight = "bold";
    } else {
      mySpan.style.backgroundColor = "white";
      mySpan.style.fontWeight = "normal";
    }
  }
}