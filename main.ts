input.onButtonPressed(Button.A, function () {
    pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
    control.waitMicros(1000)
    serial.writeLine("012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
	
})
