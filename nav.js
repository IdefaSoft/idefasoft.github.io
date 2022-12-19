const hamburger = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const button = () => {
    hamburger.classList.toggle("open");
    const aria = hamburger.getAttribute("aria-expanded") === "true" ? "false": "true";
    hamburger.setAttribute("aria-expanded", aria);
    navLinksContainer.classList.toggle("open");
}
hamburger.addEventListener("click", button);

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 800){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    }else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)