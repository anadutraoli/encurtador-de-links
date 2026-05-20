let userLongLink = document.querySelector("#userLongLink");
let shortLinkResult = document.querySelector(".short-link-result");
let shortLinkTitle = document.querySelector('.short-link-title')
let longLinkForm = document.querySelector(".long-link-form");

longLinkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  randomCode();
});

function randomCode() {
  const letters = "abcdefghijklmnopqrstuvwxyz0123456789";

  let codigo = "";

  for (let i = 0; i < 8; i++) {
    const indiceAleatrorio = Math.floor(Math.random() * letters.length);
    codigo += letters[indiceAleatrorio];
  }
  shortLinkResult.href = `${userLongLink.value}`;
  shortLinkTitle.innerHTML = "<strong>Sua URL encurtada</strong>"
  return (shortLinkResult.textContent = `https://www.localhost.com/${codigo}`);
}
