basic.forever(function () {
    if (input.soundLevel() < 150) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
