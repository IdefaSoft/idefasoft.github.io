let topButton = document.getElementById("topBtn");

window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function goToTop() {
  document.body.scroll({
    top: 0,
    behavior: "smooth"
  });
}