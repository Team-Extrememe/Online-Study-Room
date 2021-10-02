$(document).ready(function(){

    $(".create").click(function(){
        openDialog();
    });

    $(".join").click(function(){
        openDialog2();
    });

    $(".close_button").click(function(){
        closeDialog();
    })

    $(".close_button2").click(function(){
        closeDialog2();
    })

    $(".close_guide_button").click(function(){
        closeBubble();
    });

    $(".next").click(function(){
        closeBubble();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light4').style.display='block';
        $(".rabbit2").css("display", "block");
    });

    $(".next2").click(function(){
        closeBubble2();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light5').style.display='block';
        $(".rabbit3").css("display", "block");
    });

    $(".next3").click(function(){
        closeBubble3();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light6').style.display='block';
        $(".rabbit4").css("display", "block");
    });

    $(".next4").click(function(){
        closeBubble4();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light7').style.display='block';
        $(".rabbit5").css("display", "block");
    });

    $(".close_guide_button2").click(function(){
        closeBubble2();
    });

    $(".close_guide_button3").click(function(){
        closeBubble3();
    });

    $(".close_guide_button4").click(function(){
        closeBubble4();
    });

    $(".end").click(function(){
        closeBubble5();
    });

    $(".back").click(function(){
        closeBubble2();
        openBubble();
    });

    $('.back2').click(function(){
        closeBubble3();
        openBubble2();
    });

    $('.back3').click(function(){
        closeBubble4();
        openBubble3();
    });

    $('.repeat').click(function(){
        closeBubble5();
        openBubble();
    });

    function openDialog(){
        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block';
    }

    function openDialog2(){
        document.getElementById('light2').style.display='block';
        document.getElementById('fade').style.display='block';
    }

    function closeDialog(){
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none';
    }

    function closeDialog2(){
        document.getElementById('light2').style.display='none';
        document.getElementById('fade').style.display='none';
    }

    function openBubble(){
        document.getElementById('light3').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit").css("display", "block");
    }

    function openBubble2(){
        document.getElementById('light4').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit2").css("display", "block");
    }

    function openBubble3(){
        document.getElementById('light5').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit3").css("display", "block");
    }


    function closeBubble(){
        document.getElementById('light3').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit").css("display", "none");
    }

    function closeBubble2(){
        document.getElementById('light4').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit2").css("display", "none");
    }

    function closeBubble3(){
        document.getElementById('light5').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit3").css("display", "none");
    }

    function closeBubble4(){
        document.getElementById('light6').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit4").css("display", "none");
    }

    function closeBubble5(){
        document.getElementById('light7').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit5").css("display", "none");
    }

    $('.confirm_create').click(function(){
        var time = $('#time').val();
        localStorage.setItem("time", time);
    });

    if(localStorage.getItem("time") != null){
        var selected_time = localStorage.getItem("time");
        console.log(selected_time);
        $(".selected_time").html(selected_time);
    }

    var countDownTime = localStorage.getItem("time");
    var interval = setInterval(function(){

        var timer = countDownTime.split(':');
        var hours = parseInt(timer[0], 10);
        var minutes = parseInt(timer[1], 10);
        var seconds = parseInt(timer[2], 10);
        --seconds;
        hourse = (minutes < 0) ? --hours : hours;
        minutes = (seconds < 0) ? --minutes : minutes;
        if(minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10)? '0' + seconds : seconds;
        $(".selected_time").html(hours + ':' + minutes + ':' + seconds);
        countDownTime = hours + ":" + minutes + ":" + seconds;
        localStorage.setItem("time", countDownTime);
    }, 1000);
});