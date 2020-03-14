var start = document.getElementById("start");
var clear = document.getElementById("clear");
var list = document.getElementsByTagName("p");
var msPaused = 0;
var initTime;
var pausedTime;
var readTime = ' ';


function PrefInt(number, len) {
    return (Array(len).join('0') + number).slice(-len);
}

function tStart(){ 
    if(start.innerText == "Pause"){
        currentTime = new Date();
        var t = currentTime.getTime() - initTime.getTime() - msPaused;

        var ms = t % 1000;
        var s = Math.floor(t/1000) % 60;
        var m = Math.floor(t/1000/60) % 60;
        var h = Math.floor(t/1000/60/60) % 24;

        readTime = PrefInt(h,2) + ':' + PrefInt(m,2) + ':' + PrefInt(s,2) + ':' + PrefInt(ms, 3);

        document.MyForm.time.value = readTime;
    }
    setTimeout(tStart, 1);
}

start.addEventListener('click', function(){ 
    if(start.innerText == "Start"){
        initTime = new Date();
        tStart();
        start.innerText = "Pause";
    } else
        if (start.innerText == "Pause"){
            start.innerText = "Continue";
            pausedTime = new Date();
        } else {
            start.innerText = "Pause";
            msPaused = msPaused + (new Date() - pausedTime);
        }
    event.stopPropagation();
});

clear.addEventListener('click', function(){
    start.innerText = "Start";
    document.MyForm.time.value = "00:00:00:000";
    msPaused = 0;
    event.stopPropagation();
})

circle.addEventListener('click', function(){
    console.log(document.MyForm.time.value);
    initTime = new Date();
    msPaused = 0;
    document.MyForm.time.value = "00:00:00:000";
    pausedTime = new Date();
    event.stopPropagation();
})