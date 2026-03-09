document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    "videos/about/clip1.mp4",
    "videos/about/clip2.mp4"
  ];

  let index = 0;
  const slideshow = document.getElementById("slideshow");

  function fadeToNextVideo() {
    slideshow.style.opacity = 0;

    setTimeout(() => {
      slideshow.src = videos[index];
      slideshow.play();
      slideshow.style.opacity = 1;

      index = (index + 1) % videos.length;
    }, 500);
  }

  slideshow.addEventListener("ended", fadeToNextVideo);
  fadeToNextVideo();
});
