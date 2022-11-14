const internetPage = require('../pages/internet.page')

describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', async () => {
        await browser.url('/dynamic_controls')
        await internetPage.clickEnableButton()
        await internetPage.inputField.waitForEnabled()
        await expect(internetPage.inputField).toBeEnabled()
        await expect(internetPage.inputField).not.toBeDisabled() // same as above
        // await browser.debug()
    }),
    it('should wait for the input field to be disabled', async () => {
        await internetPage.clickEnableButton()
        await internetPage.inputField.waitForEnabled({reverse: true})
        await expect(internetPage.inputField).toBeDisabled()
        // await browser.debug()
    })

})