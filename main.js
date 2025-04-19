function changeVideo(videoSrc) {
  const video = document.getElementById("videoPlayer");
  video.src = videoSrc;
  video.load();
  video.play();
}
