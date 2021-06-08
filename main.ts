input.onButtonPressed(Button.A, function () {
    contador += 1
    basic.showNumber(contador)
    if (contador == 11) {
        contador = 0
        basic.showNumber(contador)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    contador = 0
})
input.onButtonPressed(Button.B, function () {
    if (contador > 7) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let contador = 0
contador = 0
