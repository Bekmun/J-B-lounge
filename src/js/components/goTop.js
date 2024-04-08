const goTopBtn = document.querySelector(".go-top");
const videos = document.querySelectorAll(".interiors__video");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -95);
    setTimeout(goTop, 0);
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    videos.forEach((item) => {
      item.pause();
    })
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  console.log(rect.bottom);
  return (
    rect.top + el.clientHeight >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) +
        el.clientHeight
  );
}

videos.forEach((video) => {
  video.addEventListener('play', () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
    video.scrollIntoView({ behavior: "smooth", block: "center" });
    document.addEventListener('scroll', () => {
      if (!isElementInViewport(video)) video.pause()
    })
  })


});
