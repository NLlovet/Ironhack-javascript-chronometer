var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    //when not running
    if(btnLeft.classList.contains('btn start')) {
        console.log("works")
        //left button
        btnLeft.innerText = "STOP";
        btnLeft.removeAttribute('class');
        btnLeft.setAttribute('class', 'btn stop');
        
        //right button
        btnRight.innerText = "SPLIT";
        btnRight.removeAttribute('class');
        btnRight.setAttribute('class', 'btn reset');
    }

    if(btnLeft.classList.contains('btn stop')) {
        btnLeft.innerText;
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
