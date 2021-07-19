let seconds = 00;
let msseconds = 00;

window.onload=function(){
    let appendSeconds =  document.getElementById('seconds');
    let appendMsSeconds = document.getElementById('msseconds');

    let resetButton = document.getElementById('reset');
    let startButton = document.getElementById('start');
    let stopButton = document.getElementById('stop');

    let interval; 

    //start button
    function startWatch() {
        interval = setInterval(startTimer, 10);
    }

    function startTimer() {
        msseconds ++;
        if(msseconds <= 9){
            appendMsSeconds.innerHTML = '0' + msseconds;
        }
        if(msseconds > 9){
            appendMsSeconds.innerHTML = msseconds;
        }
        if(msseconds >= 100){
            appendMsSeconds.innerHTML = '00';
            msseconds = 00;
            seconds ++;
            appendSeconds.innerHTML = '0' + seconds;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
    startButton.addEventListener("click", startWatch);

    //reset button
    function resetWatch(){
        seconds = 00;
        msseconds = 00;
        appendMsSeconds.innerHTML = '00';
        appendSeconds.innerHTML = '00';
    }
    resetButton.addEventListener('click', resetWatch);
    
    //stop button
    function stopWatch(){
        clearInterval(interval)
    }
    stopButton.addEventListener('click', stopWatch);
}

