const internetPage = require('../pages/internet.page')

describe('Dropdown Menu', function () {
    it('should select option 1', async () => {
        await browser.url('/dropdown')
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption1()
        await expect(await internetPage.dropdownMenuOption1).isSelected
    }),
    it('should select option 2', async () => {
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption2()
        await expect(await internetPage.dropdownMenuOption2).isSelected
    })

})