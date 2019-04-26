input.onButtonPressed(Button.A, function () {
    radio.sendString("Mensagem do botão A")
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Mensagem do botão B")
    basic.showString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
