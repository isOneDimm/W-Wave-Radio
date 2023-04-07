// podcastsPause
let btnPlayPodcasts = document.getElementsByClassName('podcasts__play');
let activePodcasts = document.getElementsByClassName('active-pause');
for (i = 0; btnPlayPodcasts.length > i; i++) {
  btnPlayPodcasts[i].onclick = function() {
    let currentActive = activePodcasts[0];
    if (currentActive)
      currentActive.classList.remove('active-pause');
    if (currentActive !== this)
      this.classList.add('active-pause');
  };
};
