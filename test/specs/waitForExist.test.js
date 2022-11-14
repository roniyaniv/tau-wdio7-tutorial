const internetPage = require('../pages/internet.page')

describe("Wait For Exist", function () {
    it('should wait for the Delete button to exist', async () => {
        await browser.url('/add_remove_elements/')
        await internetPage.clickExampleButton()
        await internetPage.deleteButton(1).waitForExist()
        await expect(await internetPage.deleteButton(1)).toExist()
        // await browser.debug()
    }),
    it('should wait for the Delete button to be deleted', async () => {
        await internetPage.clickDeleteButton(1)
        await internetPage.deleteButton(1).waitForExist({reverse: true})
        await expect(await internetPage.deleteButton(1)).not.toExist()
        // await browser.debug()
    })
})