
    const circle = {
        radius : 1 ,
    }

    circle.color = "red";
    circle.draw = function(){

    }
    // circle = {//error

    // }
    // circle = "vrfvfv"//error
    delete circle.radius;
    delete circle.draw;

    console.log(circle);