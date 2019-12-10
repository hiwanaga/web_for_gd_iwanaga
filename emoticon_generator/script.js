document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["19-Sep-82 11:44. Scott E Fahlman :-)", "From: Scott E  Fahlman &lt; Fahlman at Cmu-20c &gt;.", "I propose that the following character sequence for joke markers: :-)", "Read it sideways.", "Actually, it is probably more economical to mark things that are NOT jokes, given current tread. For this use: :-("];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h5
            document.querySelector("h5").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function(event) {
    // array with texts to type in typewriter
    var dataText = ["ジツハ、100バンメノ アーティクルヲ ネラッテタ ノデスガ、ナナイロ カメンサン ニ トラレテ シマイマシタ。", "ホンニン モ ソレトハ キヅカナイ デ トッテ シマッタ ヨウデス ネ。", "200 バンメ ヲ ネラウゾ! ", "By ナゼカ サイキン カルク ナッタ ワカンasc10441　　 (^_^)"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h6
            document.querySelector("h6").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});

function copy() {
    var copyText =
        document.getElementById("ownGenerator");
    copyText.select();
    document.execCommand("copy");
    alter("Copied!");
}

function reset() {
    document.getElementById("ownGenerator").reset();
}