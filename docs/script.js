document.querySelectorAll("video[data-force-muted]").forEach((video) => {
  const forceMuted = () => {
    video.muted = true;
    video.volume = 0;
  };

  forceMuted();
  video.addEventListener("loadedmetadata", forceMuted);
  video.addEventListener("volumechange", forceMuted);
  video.addEventListener("play", forceMuted);
});
