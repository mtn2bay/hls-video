
var video = document.getElementById('video');
var button = document.getElementById('load');
var videoURL = document.getElementById('video-url');

button.addEventListener('click', function(event) {
  event.preventDefault();
  var src = videoURL.value;
  videoURL.value = '';
  loadStream(src);
})


function loadStream(src) {
  if(Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }
}
