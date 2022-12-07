console.log('this is project on clock');

function updateClock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinutes = (currentHour < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentHour < 10 ? "0" : "") + currentSeconds;

    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;
    let timeofDay = (currentHour < 12) ? "AM" : "PM";

    let currentTimeStr = currentHour + ":" + currentMinutes +
        ":" + currentSeconds + " " + timeofDay;

    document.getElementById("clock").innerHTML = currentTimeStr;

}


const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

//eventlistener for dragable element img box startdrag and enddrag
imgBox.addEventListener('dragstart', (e) => {
    console.log('Dragstart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0);


});
imgBox.addEventListener('dragend', (e) => {
    console.log('dragend has been triggered');
    e.target.className = 'imgBox';
});

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover has been triggered');

    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter has been triggered');
        e.target.className += ' dashed';

    });

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave has been triggered');
        // e.target.className += 'whiteBox';
        e.target.className = 'whiteBox';

    });

    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggered');
        e.target.append(imgBox);

    });
}