document.addEventListener("DOMContentLoaded", function() {
  const glimpseButton = document.querySelector(".marketing-callout > h3");
  glimpseButton.addEventListener("click", hideMarketingCallout);

  const activityFeed = document.querySelector(".activity-feed .crawl");
  activityFeed.addEventListener("animationend", handleAnimationEnd);
});

function handleAnimationEnd() {
  const activityFeed = document.querySelector(".activity-feed");
  activityFeed.classList.add("opacity-zero");
  
  const header = document.querySelector("header");
  setTimeout(() => {
    activityFeed.classList.add("display-none");
    header.classList.remove("display-none");
  }, 500);

  setTimeout(() => {
    header.classList.add("visible");
  }, 1000);
}

function hideMarketingCallout() {
  const header = document.querySelector("header");
  header.classList.remove("visible");
  header.classList.add("display-none");

  const dotifyGlimpseSection = document.querySelector(".dotify-glimpse");
  const audioPlayer = document.querySelector(".audio-player");
  const footer = document.querySelector("footer");
  setTimeout(() => {
    dotifyGlimpseSection.classList.remove("display-none");
    audioPlayer.classList.remove("display-none");
    footer.classList.remove("display-none");
  }, 500);
  
  setTimeout(() => {
    dotifyGlimpseSection.classList.add("visible");
    audioPlayer.classList.add("visible");
    footer.classList.add("visible");
  }, 1000);
}
