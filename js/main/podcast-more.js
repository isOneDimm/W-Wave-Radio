// podcast
let btnPodcast = document.querySelector('.podcasts__more-btn');
let podcastItem = document.querySelectorAll('.podcasts__item ');

btnPodcast.addEventListener('click', function () {
  btnPodcast.classList.add('active');
});

podcastItem.forEach(function(hiddenList) {
  btnPodcast.addEventListener('click', function() {
    hiddenList.classList.add("active")
  })
}) 

