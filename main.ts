/**
* Some utilities
*/
//% weight=50 color=#ff9900 icon="\uf12e" block="Utilities"
//% advanced=true
namespace utilities {
    /**
     * Draws a little boot animation
     */
    //% block
    export function BootAnimation(): void {
        led.enable(true)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
    }

    /**
     * Draws a compass on the micro:bit screen
     * (has 12 animation stages)
     */
    //% block
    export function Compass() {
        if (input.compassHeading() >= 352.5 || input.compassHeading() < 7.5) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 7.5 && input.compassHeading() < 22.5) {
            basic.showLeds(`
                . # . . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 22.5 && input.compassHeading() < 37.5) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 37.5 && input.compassHeading() < 52.5) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 52.5 && input.compassHeading() < 67.5) {
            basic.showLeds(`
                . . . . .
                # # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 67.5 && input.compassHeading() < 82.5) {
            basic.showLeds(`
                . . . . .
                # . . . .
                . # # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 82.5 && input.compassHeading() < 97.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 97.5 && input.compassHeading() < 112.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . .
                # . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 112.5 && input.compassHeading() < 127.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                # # . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 127.5 && input.compassHeading() < 142.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else if (input.compassHeading() >= 142.5 && input.compassHeading() < 157.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                . # . . .
                `)
        } else if (input.compassHeading() >= 157.5 && input.compassHeading() < 172.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . # . . .
                `)
        } else if (input.compassHeading() >= 172.5 && input.compassHeading() < 187.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (input.compassHeading() >= 187.5 && input.compassHeading() < 202.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . . # .
                `)
        } else if (input.compassHeading() >= 202.5 && input.compassHeading() < 217.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . # .
                `)
        } else if (input.compassHeading() >= 217.5 && input.compassHeading() < 232.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . . #
                `)
        } else if (input.compassHeading() >= 232.5 && input.compassHeading() < 247.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # #
                . . . . .
                `)
        } else if (input.compassHeading() >= 247.5 && input.compassHeading() < 262.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # .
                . . . . #
                . . . . .
                `)
        } else if (input.compassHeading() >= 262.5 && input.compassHeading() < 277.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 277.5 && input.compassHeading() < 292.5) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . # # .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 292.5 && input.compassHeading() < 307.5) {
            basic.showLeds(`
                . . . . .
                . . . # #
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 307.5 && input.compassHeading() < 322.5) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 322.5 && input.compassHeading() < 337.5) {
            basic.showLeds(`
                . . . # .
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (input.compassHeading() >= 337.5 && input.compassHeading() < 352.5) {
            basic.showLeds(`
                . . . # .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
}