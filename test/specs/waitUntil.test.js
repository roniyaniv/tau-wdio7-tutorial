const internetPage = require('../pages/internet.page')

describe("Wait Until", function () {
    it('should wait until the button text changes', async () => {
        await browser.url('/dynamic_controls')
        await internetPage.clickPageButton()
        await browser.waitUntil( 
            async () => (await internetPage.pageButton.getText()) === 'Add',
            {timeout: 5000, timeoutMsg: 'Expect button text to change'}
            )
        // await browser.debug()
    })
})