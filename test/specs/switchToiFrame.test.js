const internetPage = require('../pages/internet.page')

describe('Switch to iFrame', function () {
    it('should switch to iframe', async () => {
        await browser.url('/iframe')
        await internetPage.h3Header.waitForDisplayed()
        await internetPage.iframe.waitForDisplayed()
        await browser.switchToFrame(await internetPage.iframe)
        await internetPage.sendTextToBody('This is the text in the iframe')
        await expect(internetPage.iframeBody).toHaveText('This is the text in the iframe')
    })
})