const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEL = document.getElementById('size')
const colorEL = document.getElementById('color')
const clear = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let size = 10
isPressed = false
let color = 'black'
let x
let y

// pressing mouse
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

// releasing mouse
canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined

})

// moving mouse
canvas.addEventListener('mousemove', (e) => {
if(isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
}

    console.log(isPressed, x, y)
})

// circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}


// line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// color change
colorEL.addEventListener('change', (e) => color = e.target.value)