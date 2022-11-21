const internetPage = require('../pages/internet.page')
const loginData = require('../data/logindata.js')


describe('Test element actions', function () {
    // it('should click element', async () => {
    //     await browser.url('/')
    //     await internetPage.clickOnLink()
    //     await expect(browser).toHaveUrl('http://the-internet.herokuapp.com/abtest')
    // })
    // it('should get Text', async () => {
    //     await browser.url('/')
    //     await expect(await internetPage.getSpecificElementText(1)).toBe('A/B Testing')
    // })
    // it('should click checkbox', async () => {
    //     await internetPage.clickLink(6)
    //     await internetPage.clickCheckbox(1)
    //     await expect(internetPage.checkboxes(1)).toBeSelected()
    // })
    // it('should uncheck checkox', async () => {
    //     await internetPage.clickCheckbox(1)
    //     await expect(internetPage.checkboxes(1)).not.toBeSelected()
    // })
    it('should enter username + password', async () => {
        await browser.url('/login')
        await internetPage.enterUsername(loginData.userName)
        await expect(internetPage.username).toHaveValue(loginData.userName)
        // await browser.debug()
        await internetPage.enterPassword(loginData.password)
        await expect(internetPage.password).toHaveValue(loginData.password)
    })

    // it('should enter password', async () => {
    //     await browser.url('/login')
    //     await internetPage.enterPassword(loginData.password)
    //     await expect(internetPage.password).toHaveValue(loginData.password)
    // })

    it('should clear Value', async () => {
        await internetPage.username.click()
        await internetPage.username.clearValue()
        await expect(internetPage.username).toHaveValue('')
        await internetPage.password.click()
        await internetPage.password.clearValue()
        await expect(internetPage.password).toHaveValue('')
    })
})