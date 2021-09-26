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

    $(".close_guide_button2").click(function(){
        closeBubble2();
    });

    $(".back").click(function(){
        closeBubble2();
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
});