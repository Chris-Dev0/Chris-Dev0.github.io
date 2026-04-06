document.addEventListener("DOMContentLoaded", () => {
  fetch("page_components/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("page_components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("page_components/head_content.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("head").innerHTML += data;
    });
});
