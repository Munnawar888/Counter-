(function () {
    var hour = document.querySelector('.hour');
    var min = document.querySelector('.min');
    var sec = document.querySelector('.sec');
    var start = document.querySelector('.start');
    var stop = document.querySelector('.stop');
    var reset = document.querySelector('.reset');
    var countdownTimer = null;

    start.addEventListener('click',function() {
        if(hour.value == 0 && min.value == 0 && sec.value == 0) return;

        function startInterval(){
            start.style.display = "none";
            stop.style.display = "initial";
           

            countdownTimer = setInterval(() => {
                timer();
            }, 1000);
        }

        startInterval()
    });

    function stopInterval(state) {
        start.innerHTML = state === "pause" ? "Continue" : "Start";

        start.style.display = "initial";
        stop.style.display = "none";
        clearInterval(countdownTimer);
    }

    function timer() {
        if(sec.value>60){
            min.value++;
            sec.value = parseInt(sec.value) - 59;
        }
        if(min.value>60){
            hour.value++;
            min.value = parseInt(min.value) - 59;
        }
        if(hour.value === Number.NEGATIVE_INFINITY && min.value === Number.NEGATIVE_INFINITY && sec.value === Number.NEGATIVE_INFINITY){
            hour.value = "";
            min.value = "";
            sec.value = "";
        }
        if (hour.value == 0 && min.value == 0 && sec.value == 0){
            hour.value = "";
            min.value = "";
            sec.value = "";
            stopInterval()
        }else if(sec.value!=0){
            sec.value = `${sec.value <=10 ? "0": ""}${sec.value-1}`
        }else if(min.value!=0 && sec.value==0){
            sec.value = 59
            min.value = `${min.value <=10 ? "0": ""}${min.value-1}`
        }else if(hour.value!=0 && min.value==0){
            min.value = 60
            hour.value = `${hour.value <=10 ? "0": ""}${hour.value-1}`
        }
    }

    stop.addEventListener('click',function(){
        stopInterval("pause")
    })

    reset.addEventListener("click", function () {
        hour.value = "";
        min.value = "";
        sec.value = "";
        stopInterval()
    })
}) (); 