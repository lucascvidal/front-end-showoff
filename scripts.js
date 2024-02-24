document.addEventListener("DOMContentLoaded", function() {
  const glimpseButton = document.querySelector(".marketing-callout > h3");
  glimpseButton.addEventListener("click", hideMarketingCallout);

  const activityFeed = document.querySelector('.activity-feed .crawl');
  activityFeed.addEventListener('animationend', handleAnimationEnd);
});

function handleAnimationEnd() {
  document.querySelector('.activity-feed').style.display = 'none';

  const header = document.querySelector("header");
  header.classList.toggle("display-none");
}

function hideMarketingCallout() {
  const header = document.querySelector("header");
  header.querySelector(".marketing-callout").classList.toggle("opacity-zero");
  header.querySelector(".marketing-callout").classList.toggle("height-zero");
  header.classList.toggle("height-zero");
  header.querySelector(".marketing-callout").classList.toggle("display-none");
  header.querySelector(".header-menu").classList.toggle("opacity-zero");
  header.querySelector(".header-menu").classList.toggle("height-zero");
  header.querySelector(".header-menu").classList.toggle("display-none");

  const dotifyGlimpseSection = document.querySelector(".dotify-glimpse");
  dotifyGlimpseSection.classList.toggle("height-zero");
  dotifyGlimpseSection.classList.toggle("opacity-zero");

  const audioPlayer = document.querySelector(".audio-player");
  audioPlayer.classList.toggle("height-zero");
  audioPlayer.classList.toggle("opacity-zero");
}
