// playlistsPause
let btnPlayPlaylists = document.getElementsByClassName('playlists__item');
let activePlaylists = document.getElementsByClassName('active-pause');
for (i = 0; btnPlayPlaylists.length > i; i++) {
  btnPlayPlaylists[i].onclick = function() {
    let currentActive = activePlaylists[0];
    if (currentActive)
      currentActive.classList.remove('active-pause');

    if (currentActive !== this)
      this.classList.add('active-pause');
  };
};