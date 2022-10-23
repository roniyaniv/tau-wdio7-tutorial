const internetPage = require('../pages/internet.page')

describe('Scroll to Element', function () {
    it('should scroll to the footer', async () => {
        await browser.url('/')
        await internetPage.pageHeader.waitForDisplayed()
        // await internetPage.pageFooter.scrollIntoView()
        await internetPage.scrollToPageFooter()
        await expect(internetPage.pageFooter.isDisplayedInViewport())
        await browser.pause(5000)
    })
    // it('should scroll into view', () => {
    //     browser.url('/')
    //     internetPage.pageFooter.scrollIntoView()
    //     assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    // })
})