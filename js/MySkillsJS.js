let repeatingTextScroller = document.querySelector('.repeatingTextScroller > span')
repeatingTextScroller.innerHTML = '&nbsp;' + repeatingTextScroller.textContent
let scrollingText = repeatingTextScroller.textContent
let originalWidth = repeatingTextScroller.offsetWidth
let margin = 0

generateScrollerText()
setInterval(animateScrollerText, 20)


function generateScrollerText() {
    while (repeatingTextScroller.offsetWidth <= 3840) {
        repeatingTextScroller.textContent += scrollingText
    }
}


function animateScrollerText() {
    margin++
    if (margin === originalWidth) {
        margin = 0
    } else {
        repeatingTextScroller.style.marginLeft = '-' + margin + 'px'
    }
}