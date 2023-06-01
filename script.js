const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [],
audio = new Audio(`tunes/a.wav`); // by default, audio src is "a" tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
}
/*function test(hijaz) {
   //on utilise notre fonction pour recuperer un tableau de tous les elements contenant la class souhaiter
  var classes = getElementsByClassName(hijaz);
     
   //on modifie les elements recuperer dans le tableau
   for(var i=0, len = classes.length; i < len; i++){
       classes[i].style.background = "red";
   }
    };*/
    function hijaz() {
        var elements = document.getElementsByClassName("hijaz");
        for (var i = 0; i < elements.length; i++) {
         elements[i].style.background = "blue";
        }
        
        };
        function nahawand() {
            var elements = document.getElementsByClassName("nahawand");
            for (var i = 0; i < elements.length; i++) {
             elements[i].style.background = " rgb(2,0,36)";
            }
        };
        function kurd() {
            var elements = document.getElementsByClassName("kurd");
            for (var i = 0; i < elements.length; i++) {
             elements[i].style.background = " green";
            }
        };
        function ajam() {
            var elements = document.getElementsByClassName("ajam");
            for (var i = 0; i < elements.length; i++) {
             elements[i].style.background = " linear-gradient(red, yellow)";
            }
        };
        function hide() {
            var elements = document.getElementsByClassName("black");
            for (var i = 0; i < elements.length; i++) {
             elements[i].style.background = "linear-gradient(#333, #000)";
            }
            var elements = document.getElementsByClassName("white");
            for (var i = 0; i < elements.length; i++) {
             elements[i].style.background = "linear-gradient(#fff 96%, #eee 4%)";
            }
            };
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);