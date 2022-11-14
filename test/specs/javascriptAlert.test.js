const internetPage = require('../pages/internet.page')

describe('Javascript Alert', function () {
    it('should get text', async () => {
        await browser.url('/javascript_alerts')
        await internetPage.clickJavascriptAlertButton(1)
        let text = await browser.getAlertText()
        console.log("DEBUG: alert text = " + text)
        await expect(await browser.getAlertText()).toBe("I am a JS Alert")
        // await expect(text).toBe("I am a JS Alert")
    }),
    it('Should accept alert', async () => {
        await browser.acceptAlert()
        await expect(await internetPage.getResultText()).toBe('You successfully clicked an alert')
    }),
    it('Should dismiss alert', async () => {
        await internetPage.clickJavascriptAlertButton(2)
        await browser.dismissAlert()
        await expect(await internetPage.getResultText()).toBe('You clicked: Cancel')
    }),
    it('Should ipnut some text into alert', async () => {
        await internetPage.clickJavascriptAlertButton(3)
        await browser.sendAlertText('this is my text')
        await browser.acceptAlert()
        await expect(await internetPage.getResultText()).toBe('You entered: this is my text')
    })

})