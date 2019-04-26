# Mensagem secreta
Este programa usa o sistema de comunicação sem fio do Micro:bit para enviar uma mensagem para outro Micro:bit. 

## Como funciona
O programa começa definindo um grupo de rádio.

```blocks
radio.setGroup(1)
```
Todos os Micro:bits configurados no ```||radio:definir grupo do rádio (1)||``` vão receber o conteúdo das mensagens enviadas.

Ao pressionar o botão A do Micro:bit o texto "Mensagem A" é enviado para todos os Micro:bits configurados no ```||radio:grupo de rádio (1)||```.
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("Mensagem A")
    basic.showString("A")
})
```

Ao pressionar o botão B do Micro:bit o texto "Mensagem B" é enviado para todos os Micro:bits configurados no ```||radio:grupo do rádio (1)||```.

```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendString("Mensagem B")
    basic.showString("B")
})
```

## Como enviar a mensagem secreta
Para enviar uma mensagem "secreta" é preciso que você e o receptor da mensagem estejam no mesmo canal de comunicação, ou seja, no mesmo grupo de rádio. 

Você pode escolher um valor de 0 a 255. Então, primeiro defina com o grupo que você vai enviar mensagens qual será o código do grupo de comunicação.

Por exemplo, se vocês combinarem que o grupo vai ter o número 43, altere o ```||radio:definir grupo do rádio||``` de 1 para 43.

```blocks
radio.setGroup(43)
```

Depois disso, basta você incluir o texto da mensagem que será enviada. Você pode colocar uma mensagem para o botão A ou botão B do Micro:bit. 

Por exemplo, para colocar uma nova mensagem no botão A você deverá alterar o comando ```||radio:envia cadeia de caracteres||```

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("Mensagem secreta A")
    basic.showString("A")
})
```

## Transfira o programa para o Micro:bit
Agora que o programa está pronto, transfira ele para a placa do Micro:bit.
1. Baixe o programa no seu computador.
1. Conecte o Micro:bit e copie o arquivo HEX.
1. Ao término da transferência, o programa iniciará automaticamente em seu Micro:bit.
1. Pressione o botão A ou B. Verifique na placa do outro grupo a mensagem enviada.

## Créditos
Esta atividade foi criada pelo [CRIATIVIDADE.digital](https://criatividade.digital).
