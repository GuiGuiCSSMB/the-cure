input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        music.play(music.stringPlayable("E - E D - D C - ", 360), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B - B A - A G - ", 360), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("F - F - E F E D ", 360), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("- D D C - C D - ", 360), music.PlaybackMode.UntilDone)
    }
    music.play(music.stringPlayable("E - E F - F G - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A - A B - B C5 - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D - D E - E F - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G - G F - F F - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E - E D - D C - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B - B A - A G - ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F - F - E F E D ", 360), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- D D C - C D - ", 360), music.PlaybackMode.UntilDone)
})
control.inBackground(function () {
    basic.showString("THE CURE")
})
