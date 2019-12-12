var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    
    let minDecT = Math.floor((chronometer.getMinutes() /10) % 10);
    let minUniT = chronometer.getMinutes() % 10;
    
    minDec.innerText = minDecT;
    minUni.innerText = minUniT;
    
}

function printSeconds() {
    var time = chronometer.getSeconds();
    var secDecT = Math.floor((chronometer.getSeconds() /10) % 10);;
    
    var secUniT = time % 10;
     
    secDec.innerText = secDecT;
    secUni.innerText = secUniT;
    
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
    console.log("works")

    var going;
    
    if (btnLeft.classList.contains('start')) {
        //left button
        
        btnLeft.innerText = "STOP";
        btnLeft.removeAttribute('class');
        btnLeft.setAttribute('class', 'btn stop');
        
        //right button
        btnRight.innerText = "SPLIT";
        btnRight.removeAttribute('class');
        btnRight.setAttribute('class', 'btn split');
        
        chronometer.startClick();
        going = setInterval(printTime, 1000);
    }
    else {
        //left button
        
        btnLeft.innerText = "START";
        btnLeft.removeAttribute('class');
        btnLeft.setAttribute('class', 'btn start');
        
        btnRight.innerText = "RESET";
        btnRight.removeAttribute('class');
        btnRight.setAttribute('class', 'btn reset');
        
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnLeft.classList.contains('start')) {
        chronometer.resetClick();
        document.getElementById('minDec').innerText = 0;
        document.getElementById('minUni').innerText = 0;
        document.getElementById('secDec').innerText = 0;
        document.getElementById('secUni').innerText = 0;

        //deletes all li's
        var ul = document.getElementById('splits');
        while (ul.firstChild) ul.removeChild(ul.firstChild);

    }
    else{

        
        //makes the new element
        let newLi = document.createElement('li');
        var insert = document.getElementById("splits");
        
        //add context to element
        newLi.innerText = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}`;
        
        //adds to body
        insert.appendChild(newLi);
    }
});


