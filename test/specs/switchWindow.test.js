const internetPage = require('../pages/internet.page')

/**
 * This implementation seems to work with chrome and safari 
 * BUT NOT WITH FIREFOX
 * Posted a question about it in stackoverflow: 
 * https://stackoverflow.com/questions/74178210/how-to-make-webdriverio-switchwindow-to-work-with-firefox
 */
describe('Manage multiple windows', function () {
    it('should switch to another tab', async () => {
        await browser.url('/windows')
        await internetPage.clickHereLink()
        await browser.switchWindow('/windows/new')
        await expect(browser).toHaveTitle('New Window')
        await expect(await internetPage.h3Header).toHaveText('New Window')
    })
})