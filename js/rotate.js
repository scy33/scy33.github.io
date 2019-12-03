$(window).mousemove(getMousePosition);

var mouseX;

var mouseY;

var imageTop;

var imageBottom;

var imageLeft;

var imageRight;



$(window).load(init);



function init(){

    mouseX = 0;

    mouseY = 0;



	imageTop = $(".head-image").offset().top;

	imageBottom = imageTop + $(".head-image").height;

	imageLeft = $(".head-image").offset().left;

	imageRight = imageLeft + $(".head-image").width();

}

function getMousePosition(event){

    mouseX = event.pageX;

    mouseY = event.pageY;



    $(".head-image").css("z-index","0");

    if(mouseX >imageLeft && mouseX <imageRight && mouseY <imageTop){

        $(".up").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY <imageTop){

        $(".up-left").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY >imageTop && mouseY <imageBottom){

        $(".left").css("z-index","1");

    } else if(mouseX <imageLeft && mouseY >imageBottom){

        $(".down-left").css("z-index","1");

    } else if(mouseX >imageLeft && mouseX <imageRight && mouseY >imageBottom){

        $(".down").css("z-index","1");

    } else if(mouseX >imageRight && mouseY >imageBottom){

        $(".down-right").css("z-index","1");

    } else if(mouseX >imageRight && mouseY >imageTop && mouseY <imageBottom){

        $(".right").css("z-index","1");

    } else if(mouseX >imageRight && mouseY <imageTop){

        $(".up-right").css("z-index","1");

    } else{

        $(".front").css("z-index","1");

    }

}
