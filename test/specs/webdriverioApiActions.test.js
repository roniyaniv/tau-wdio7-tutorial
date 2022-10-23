const internetPage = require('../pages/internet.page')

describe('WebdriverIO API Actions', function () {
    // it('should hover on figure 1', async () => {
    //     await browser.url('/hovers')
    //     await internetPage.hoverOnFigure(3)
    //     await expect(await internetPage.getFigureDetailsText(3)).toBe('name: user1')
    // })

    // it('should hover on figure 2', async () => {
    //     await browser.url('/hovers')
    //     await internetPage.hoverOnFigure(4)
    //     await expect(await internetPage.getFigureDetailsText(4)).toBe('name: user2')
    // })
    // it('should hover on figure 3', async () => {
    //     await browser.url('/hovers')
    //     await internetPage.hoverOnFigure(5)
    //     await expect(await internetPage.getFigureDetailsText(5)).toBe('name: user3')
    // })


    it('should send keyboard value BackSpace', async () => {
        await browser.url('/key_presses')
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Backspace")
        await expect(await internetPage.getResultText()).toBe("You entered: BACK_SPACE")
    })

    it('should send keyboard value Tab', async () => {
        await browser.url('/key_presses')
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Tab")
        await expect(await internetPage.getResultText()).toBe("You entered: TAB")
    })

    it('should send keyboard value Shift', async () => {
        await browser.url('/key_presses')
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget("Shift")
        await expect(await internetPage.getResultText()).toBe("You entered: SHIFT")
    })
})