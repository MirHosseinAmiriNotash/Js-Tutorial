function ball1(callback) {
    setTimeout(() => {

        callback(true);

    }, 2000);
}
function ball2(callback) {
    setTimeout(() => {
        callback(false);
    }, 1000);
}
function ball3() {
    setTimeout(() => {
        console.log('the ball three reached the end of the hill');
    }, 3000);
}

ball1((res) => {
    try {
        if (res) {
            console.log('the ball one reached the end of the hill');
            ball2((res) => {
                try {
                    if (res) {
                        console.log('the ball two reached the end of the hill');
                        ball3();

                    } else {
                        throw new Error('The ball2 Failed');
                    }
                } catch (error) {
                    console.log(error);

                }

            });

        }
        else {
            throw new Error('The ball1 Failed');
        }
    } catch (error) {
        console.log(error);


    }
});