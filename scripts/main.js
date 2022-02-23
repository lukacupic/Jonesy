var phrases;

/**
 * Generates a new SW phrase. Might include some easter eggs.
 */
function generate() {
    var hiddenPhrases = ["Azsech", "Plexius", "Mos Croatia Spaceport"];
    var phrase = getRandomElement(Math.random() > 0.999 ? hiddenPhrases : phrases);

    document.getElementById("phrase").innerHTML = phrase;
}

/**
 * Updates phrase contents and button text after the user has clicked
 * the button for the first time.
 */
function changeContent() {
    var phrase = document.getElementById("phrase");
    phrase.classList.remove("cursor");
}

/**
 * Returns a random element from the given array.
 * @param {the array from which a random element will be returned} array
 */
function getRandomElement(array) {
    var max = array.length - 1;
    var index = Math.round(Math.random() * max);
    return array[index];
}

/**
 * Loads the file containing SW phrases.
 * Called only on the first page load.
 */
function loadFile() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            phrases = parseLines(this.responseText);
        }
    }

    xhttp.open("GET", "resources/data.txt", true);
    xhttp.send();
}

/**
 * Splits the given text into an array of lines and returns the array.
 * @param {the original unparsed text} text 
 */
function parseLines(text) {
    return text.split(/\r\n|\r|\n/);
}