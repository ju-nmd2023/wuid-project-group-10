const dropDownArrow = document.getElementsByClassName("drop-down-button")[0];
const dropDownContent = document.getElementById("drop-down-content");

dropDownArrow.addEventListener("click", function (event) {
  if (dropDownContent.style.display === "block") {
    dropDownContent.style.display = "none";
  } else {
    dropDownContent.style.display = "block";
  }
});
