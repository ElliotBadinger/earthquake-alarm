input.onButtonPressed(Button.A, function () {
    radio.sendString("Earthquake ")
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Earthquake ")
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
radio.setGroup(1)
basic.forever(function () {
	
})
