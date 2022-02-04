let submitBtn = document.querySelector(".submit-btn"),
  firstinput = document.querySelector(".email-input"),
  secondinput = document.querySelector(".pass-input");

submitBtn.addEventListener("click", (_) => {
  if (firstinput.value.length > 0 && secondinput.value.length > 0) {
    playVideo();
  }
});

function playVideo() {
  let container = document.querySelector(".container");
  container.remove();
  let vid = document.createElement("video");
  vid.className = "video";
  vid.src = "./vids/video.mp4";
  vid.style.width = "100%";
  vid.play();
  document.body.appendChild(vid);
  let text = document.createElement("h1");
  text.className = "bullshit-text";
  text.innerHTML = "عنوان الخيرية: شارع الجيش الملكي عمارة 12"
  document.body.appendChild(text)
}
