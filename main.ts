let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    Y = 4
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        led.plot(X, Y)
        Y += -1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        led.plot(X, Y)
        X += 1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        led.plot(X, Y)
        Y += 1
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        led.plot(X, Y)
        X += -1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
