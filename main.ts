// checks if the screen is fully lit. if so then is flashes. otherwise it will remove and add a random value from the off array and add to the on array as the last element.
input.onButtonPressed(Button.A, function () {
    if (On.length == 25) {
        for (let value of On) {
            led.unplot(value % 5, value / 5)
        }
        basic.pause(100)
        for (let value of On) {
            led.plot(value % 5, value / 5)
        }
    } else {
        filler = randint(0, Off.length - 1)
        filler = Off.removeAt(filler)
        led.plot(filler % 5, filler / 5)
        On.push(filler)
    }
})
// resets the arrays to orginal amounts and turns off all the leds on the screen. Shows "RESET"
input.onButtonPressed(Button.AB, function () {
    Off = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    On = []
    for (let value of LED_List) {
        led.unplot(value % 5, value / 5)
    }
    basic.showString("RESET")
})
// checks if the screen is blank. if so then it flashes if not then is removes the last led that was turned on (last item stored in the "On" array/list
input.onButtonPressed(Button.B, function () {
    if (On.length == 0) {
        for (let value of LED_List) {
            led.plot(value % 5, value / 5)
        }
        basic.pause(100)
        for (let value of LED_List) {
            led.unplot(value % 5, value / 5)
        }
    } else {
        filler = On.pop()
        led.unplot(filler % 5, filler / 5)
        Off.push(filler)
    }
})
// Initial value of all the variables and arrays
let filler = 0
let LED_List: number[] = []
let On: number[] = []
let Off: number[] = []
Off = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
On = []
LED_List = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
basic.forever(function () {
	
})
