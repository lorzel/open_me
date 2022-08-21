function coordinatesFunc(event) {
    let x = event.clientX;
    let y = event.clientY;

    let window_x = window.innerWidth;
    let window_y = window.innerHeight;

    let center = window_x / 2;

    let x_from_center = center - x;

    let picklock_element = document.getElementById('picklock');

    document.getElementById('x-pos').innerText = x;
    document.getElementById('y-pos').innerText = y;
    document.getElementById('window-x-pos').innerText = window_x;
    document.getElementById('window-y-pos').innerText = x_from_center;

    if (x > center && -x_from_center < 100) {
        picklock_element.style.transform = `translateX(-50%) rotate(calc(${-x_from_center} * 1deg))`;
    }
    else if (x < center && x_from_center < 100) {
        picklock_element.style.transform = `translateX(-50%) rotate(calc(${-x_from_center} * 1deg))`;
    }

}


window.addEventListener("keydown", function (event) {
    let rotation = 0;
    if (event.key == "a") {
        document.getElementsByClassName('helper').style.transform = `translateX(-50%) rotate(calc(${rotation} * 1deg))`;
        rotation++;
    }
});

