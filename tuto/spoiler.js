const spoilers = document.querySelectorAll(".spoiler");

spoilers.forEach((spoiler) => {
  spoiler.addEventListener("click", function() {
    this.style.backgroundColor = "white";
    this.style.color = "black";

    console.log("item clicked");
  });
});
