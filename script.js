// Botão de rolagem para o topo
const scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "⬆️";
scrollTopButton.className = "scroll-top";
scrollTopButton.style.display = "none";
document.body.appendChild(scrollTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});