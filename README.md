# Seu Nome no Micro:bit
Este programa faz com que o Micro:bit apresente no seu painel de LEDs as letras do seu nome. 

## ~avatar

Qualquer dúvida na construção, use o **link (texto azul)** para abrir o vídeo que apresenta como realizar aquele passo. Para acessar o vídeo com o tutorial completo, use [**este link**](https://youtu.be/3d71vvRIwuY).

## ~

## Como funciona
1. [Baixe o programa](https://youtu.be/3d71vvRIwuY?t=1m16s) no seu computador.
1. [Conecte](https://youtu.be/3d71vvRIwuY?t=2m12s) o Micro:bit e [transfira] o arquivo HEX.
1. Ao término da transferência, o programa iniciará automaticamente em seu Micro:bit.

## Como incluir o seu nome
[O programa funciona](https://youtu.be/3d71vvRIwuY?t=5m21s) por meio de um *loop* (ou repetição) infinito chamado ```||basic:sempre||``` em que o bloco  ```||basic:mostrar string||``` define qual o texto que será apresentado no painel de LEDs do Micro:bit. 

1. [Para alterar o texto](https://youtu.be/3d71vvRIwuY?t=5m58s) apresentado pelo Micro:bit altere o texto (*string*) presente no bloco ```||basic:mostrar string||```.

Após a alteração [confira o resultado no simulador](https://youtu.be/3d71vvRIwuY?t=6m21s) ou baixando a nova versão do código no seu Micro:bit.

## Mostrando dois nomes
É possível fazer com que o programa [apresente mais de um nome](https://youtu.be/3d71vvRIwuY?t=7m10s) de cada vez. Veja abaixo:
1. Vá até o grupo ```||basic:Básico||``` e arraste mais um bloco ``||basic:mostrar string||`` logo abaixo do primeiro nome. Você pode repetir este processo e incluir quantos nomes quiser.

```blocks
basic.forever(function () {
    basic.showString("Nome 1")
    basic.showString("Nome 2")
})
```
Após a alteração [confira o resultado no simulador](https://youtu.be/3d71vvRIwuY?t=8m20s) ou baixando a nova versão do código no seu Micro:bit.

## Incluindo imagens
Também é possível [incluir imagens para separar cada nome](https://youtu.be/3d71vvRIwuY?t=8m51s). Veja abaixo como fazer.
1. Usando o grupo ```||basic:Básico||``` [arraste o bloco](https://youtu.be/3d71vvRIwuY?t=8m57s) ```||basic:mostrar ícone||``` entre o primeiro e o segundo nome.
1. [Escolha um ícone](https://youtu.be/3d71vvRIwuY?t=9m25s) na lista.
1. Ainda usando o grupo ```||basic:Básico||``` [arraste o bloco](https://youtu.be/3d71vvRIwuY?t=9m49s) ```||basic:mostrar leds||``` logo abaixo do bloco com o ícone. Deixando o conteúdo do ```||basic:mostrar leds||``` vazio o Micro:bit vai desligar os LEDs evitando que o segundo nome se misture com os LEDs do ícone.

```blocks
basic.forever(function () {
    basic.showString("Nome 1")
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Nome 2")
})
```
Pronto! Agora que você já viu como incluir nomes e ícones [experimente outras modificações](https://youtu.be/3d71vvRIwuY?t=11m46s) no programa como, por exemplo, acrescente outros nomes, mude a [ordem de apresentação dos ícones](https://youtu.be/3d71vvRIwuY?t=12m03s) e transfira o resultado final [para o hardware do Micro:bit](https://youtu.be/3d71vvRIwuY?t=14m00s).

## Créditos
Esta atividade foi criada pelo [CRIATIVIDADE.digital](https://criatividade.digital)

