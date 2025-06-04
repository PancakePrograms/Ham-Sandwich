const daysRoot = document.querySelector('.daysRoot')
const timeRoot = document.querySelector('.timeRoot')

var days = parseInt(localStorage.getItem('days'))


function update() {
    localStorage.setItem('days', ++days)
    console.log(days)
}
setInterval(update, 1000)

