window.onload = () => {
  let glimpseButton = document.querySelector(".marketing-callout > h3");

  if (glimpseButton) {
    glimpseButton.addEventListener("click", () => {
      let header = document.querySelector("header");
      header.querySelector(".marketing-callout").classList.toggle("opacity-zero");
      header.querySelector(".marketing-callout").classList.toggle("height-zero");
      header.classList.toggle("height-zero");
      header.querySelector(".marketing-callout").classList.toggle("display-none");
      header.querySelector(".header-menu").classList.toggle("opacity-zero");
      header.querySelector(".header-menu").classList.toggle("height-zero");
      header.querySelector(".header-menu").classList.toggle("display-none");

      let dotifyGlimpseSection = document.querySelector(".dotify-glimpse");
      dotifyGlimpseSection.classList.toggle("height-zero");
      dotifyGlimpseSection.classList.toggle("opacity-zero");
    });
  }
};
