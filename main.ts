let SoinuLimitea = 125
basic.forever(function () {
    if (SoinuLimitea < input.soundLevel()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
    basic.pause(500)
})
