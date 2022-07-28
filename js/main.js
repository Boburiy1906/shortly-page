const elUrlShortener = document.querySelector(".url-shortener");
const elUrlShortenerForm = document.querySelector(".js-url-shortener-form");
const elUrlsShortenerResults = document.querySelector(".url-shortener__results")
const elCopyShortLinkButton = document.querySelector(".js-copy-short-link-button");
const elChangeCopyButtonCopied = document.querySelector(".");

if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    elUrlsShortenerResults.classList.add("url-shortener__results--open")
  });
}

if (elUrlShortener) {
  elUrlShortener.addEventListener("click", function (evt) {
    if (evt.target.matches(".js-copy-short-link-button")) {
      //Change button text
      evt.target.textContent = "Copied!"
    }

  });
}
// setTimeout(function(){
//   evt.classList.add('change-copy-button--copied');
// },3000);