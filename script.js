document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("overlay");
  const mainContent = document.getElementById("main-content");
  const youtubeVideo = document.getElementById('youtubeVideo');

  if (!window.youtubeLinks) {
    window.youtubeLinks = [
      "https://www.youtube.com/embed/zIwaiK1IXTc?autoplay=1&mute=1",
      "https://www.youtube.com/embed/DBhfYWOWR_k?autoplay=1&mute=1",
      "https://www.youtube.com/embed/BQPSDWKURuE?autoplay=1&mute=1",
      "https://www.youtube.com/embed/a5TO9CAT-Eo?autoplay=1&mute=1",
      "https://www.youtube.com/embed/05ZLIDR4sz8?autoplay=1&mute=1",
      "https://www.youtube.com/embed/gzYGiPuCBqk?autoplay=1&mute=1",
      "https://www.youtube.com/embed/tJJiIn-JBVI?autoplay=1&mute=1",
      "https://www.youtube.com/embed/ZEfTNcM-HY0?autoplay=1&mute=1"
    ];
  }

  const randomLink = window.youtubeLinks[Math.floor(Math.random() * window.youtubeLinks.length)];
  youtubeVideo.src = randomLink;

  if (overlay) {
    overlay.addEventListener('click', function() {
      overlay.style.display = 'none';
      if (mainContent) {
        mainContent.style.display = 'block';
      }

      if (youtubeVideo) {
        const videoSrc = youtubeVideo.src;
        const unmuteSrc = videoSrc.replace('mute=1', 'mute=0');
        youtubeVideo.src = unmuteSrc;
        youtubeVideo.style.width = "560px";
        youtubeVideo.style.height = "315px";
        youtubeVideo.style.position = "relative";
      }
    });
  }
});
