var button = document.getElementById('button');
var body = document.querySelector('body');

var one = 'red';
var two = 'blue';
var three = 'yellow';
var four = 'purple';
var five = 'green';



function trocarBackground(){
    if (body.style.backgroundColor === one) {
        body.style.backgroundColor = two;

    } else if (body.style.backgroundColor === two) {
        body.style.backgroundColor = three;
    }

    else if (body.style.backgroundColor === three) {
        body.style.backgroundColor = four;
    }

    else if (body.style.backgroundColor === four) {
        body.style.backgroundColor = five;
    }
    else {
        body.style.backgroundColor = one;
    }

}

button.addEventListener('click', function() {
    trocarBackground();
});