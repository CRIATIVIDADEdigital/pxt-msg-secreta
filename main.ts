input.onButtonPressed(Button.A, function () {
    radio.sendString("Botão A")
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Botão B")
    basic.showString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
