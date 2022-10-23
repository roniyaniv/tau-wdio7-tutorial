const InternetPage = require('../pages/internet.page')

describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        await InternetPage.enableButton.waitForDisplayed()
        await InternetPage.clickEnableButton()
        await InternetPage.inputEnabledField.waitForEnabled({ timeout: 4000})
        await expect(InternetPage.inputEnabledField).toBeEnabled()
        await expect(InternetPage.inputEnabledField).not.toBeDisabled() // same as above
        await expect(InternetPage.enableButton).toHaveAttributeContaining('autocomplete', 'off')
        // await browser.debug()
    })
    // it('should wait for the input field to be disabled', () => {
    //     internetPage.clickEnableButton()
    //     internetPage.inputEnabledField.waitForEnabled({timeout:4000, reverse:true})
    //     assert.equal(false, internetPage.inputEnabledField.isEnabled())
    // })
})