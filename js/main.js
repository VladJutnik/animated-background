const parentDiv = document.querySelector('.babbles'),
    arr = [10, 12, 13, 14, 16, 18, 20, 22, 25]

function createAnimateSpan (numSpan) {
    for (i = 0; i <= numSpan; i++){
        let rand = arr[Math.floor(Math.random() * arr.length)]
        elem = document.createElement('span')
        elem.setAttribute('style', '--i:'+rand);
        parentDiv.appendChild(elem);
    }
}
createAnimateSpan(55)