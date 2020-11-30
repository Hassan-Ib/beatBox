// # TODO: setup the eventListener;
// # TODO: map the keys to the audios

let beats = {
  a: { beat: "./src/assets/Piano Chord 331.mp3", color: "#00fffe" },
  s: { beat: "./src/assets/Piano Chord 209.mp3", color: "#00fffe" },
  d: { beat: "./src/assets/Piano Chord 208.mp3", color: "#00fffe" },
  f: { beat: "./src/assets/Drum Sticks Hit 3.mp3", color: "#ff00ff" },
  g: { beat: "./src/assets/Drum Snare Roll.mp3", color: "#ff00ff" },
  h: { beat: "./src/assets/PREL Musical 57.mp3", color: "#ff00ff" },
  j: { beat: "./src/assets/Cymbal Suspended 2.mp3", color: "#ff00ff" },
  k: { beat: "./src/assets/Musical Compos 33.mp3", color: "#ffffff" },
  l: { beat: "./src/assets/Musical Orches 4.mp3", color: "#ffffff" },
};
// 1,2,3 #00fffe
// 4,5,6,7 #ff00ff
// #ffffff

window.addEventListener("load", init);

function init() {
  const setColors = () => {
    for (let keys in beats) {
      let { color } = beats[keys];
      let element = document.querySelector(`#${keys}`);
      element.style.borderColor = color;
      element.addEventListener("transitionend", () => {
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = `none`;
      });
    }
  };
  setColors();

  const onBtnPress = (key) => {
    let btn = document.getElementById(key);
    if (!btn) return;
    btn.style.backgroundColor = beats[key].color;
    btn.style.boxShadow = `0px 0px 17px 0px ${beats[key].color}`;
  };
  const playBeat = (key) => {
    let audioSrc = beats[key]?.beat || "";
    if (!audioSrc) return;
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
  };

  let beatBox = document.querySelector(".beatbox");

  beatBox.addEventListener("click", (e) => {
    let element = e.target;
    const id = element.id;
    if (!id) return;
    playEffects(id);
  });

  document.addEventListener("keydown", (e) => {
    playEffects(e.key);
  });

  function playEffects(key) {
    playBeat(key);
    onBtnPress(key);
  }
}

init();
