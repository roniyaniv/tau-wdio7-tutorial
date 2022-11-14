const internetPage = require('../pages/internet.page')

describe('Drag and drop', function () {
    it.skip('should drag and drop', async () => {
        await browser.url('/drag_and_drop')
        await internetPage.dragColumnAToColumnB()
        await browser.pause(5000)
        // elemText = await internetPage.columnBHeader.getText()
        // console.log('DEBUG: column b content = ' + elemText)
        await expect(await internetPage.columnBHeader).toHaveText('A')
    })
    it('should drag and drop', async () => {
        await browser.url('http://crossbrowsertesting.github.io/drag-and-drop.html')
        const draggableElement = await $('#draggable')
        const droppableElement = await $('#droppable')
        await draggableElement.dragAndDrop(droppableElement)
        await browser.pause(5000)
        await expect(await droppableElement.$('p')).toHaveText('Dropped!')
    })
    it('should drag and drop with abstracted functions', async () => {
        await browser.url('http://crossbrowsertesting.github.io/drag-and-drop.html')
        await internetPage.dragDraggableToDroppable()
        await browser.pause(5000)
        await expect(await internetPage.droppableParagraph).toHaveText('Dropped!')
    })

})