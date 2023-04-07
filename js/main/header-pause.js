// headerPause
let btnPlayHeader = document.getElementsByClassName('btn-play');
let activeHeader = document.getElementsByClassName('active-pause');
for (i = 0; btnPlayHeader.length > i; i++) {
  btnPlayHeader[i].onclick = function() {
    let currentActive = activeHeader[0];
    if (currentActive)
      currentActive.classList.remove('active-pause');

    if (currentActive !== this)
      this.classList.add('active-pause');
  };
};