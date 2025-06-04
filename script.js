const daysRoot = document.querySelector('.daysRoot')
const timeRoot = document.querySelector('.timeRoot')


let day = 0
let hour = 0
let minute = 0
let second = 0

function update() {
    daysRoot.innerHTML = `${day} Days`
    timeRoot.innerHTML = `${hour}:${minute} ${second}`
}
function timePass() {
    second += 1;

    if(second === 60) {
        second = 0;
        minute += 1;
    }
    if(minute === 60) {
        minute = 0;
        hour += 1;
    }
    if (hour === 24) {
        hour = 0;
        day += 1;
    }
    update()
}

setInterval(timePass, 1000);

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    second = 0;
    minute = 0;
    hour = 0;
    day = 0;
    update()
})