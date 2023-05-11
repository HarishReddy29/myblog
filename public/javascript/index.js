
var heading = document.getElementsByClassName("heading");
var index;
for (index = 0; index < heading.length; index++) {
heading[index].addEventListener("click", function() {
    this.classList.toggle("active");
    var nextElement = this.nextElementSibling;
    if (nextElement.style.display === "block") {
    nextElement.style.display = "none";
    } else {
    nextElement.style.display = "block";
    }
});
}


clicker1.addEventListener("click", () => {
    document.getElementById("text").textContent ="Welcome to button1";
  });

clicker2.addEventListener("click", () => {
document.getElementById("text").textContent ="Welcome to button2";
});

clicker3.addEventListener("click", () => {
document.getElementById("text").textContent ="Welcome to button3";
});

function isEmpty() {
    const text = document.getElementById('anyText').value
    const error = document.getElementById('errorText')
    if (text == "") {
      error.style.display = 'block';
      return false;
    } else {
        error.style.display = 'none';
        return true;
    }
  }