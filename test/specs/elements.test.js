const internetPage = require("../pages/internet.page")

describe("Interacting with elements", function () {
    // it("Get text for element", async () => {
    //     await browser.url('/')
    //     let text = await $("//*[@id='page-footer']").getText() //xpath
    //     console.log(text)
    //     console.log(await internetPage.getLiText())
    //     console.log(await internetPage.getSpecificElementText(3))
    // })
    it("Is footer Displayed", async () => {
        await browser.url('/')
        console.log(await internetPage.pageFooter.isDisplayed())
    })
    it("Does the header exist?", async () => {
        await browser.url('/')
        console.log(await internetPage.pageHeader.isExisting())
    })
    it("Is footer in viewport?", async () => {
        await expect(await internetPage.pageFooter).not.toBeDisplayedInViewport()
        // console.log(await internetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is Header in viewport", async () => {
        await expect(await internetPage.pageHeader).toBeDisplayedInViewport()
        // expect(await internetPage.pageHeader).to.not.isDisplayedInViewport())
    })
    it("Is subheader enabled?", async () => {
        await expect(await internetPage.subHeading).toBeEnabled()
    })

    it("Click Element", async () => {
        await internetPage.clickOnLink()
        await browser.pause(5000)
    })
})