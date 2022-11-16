const each = require('jest-each');
const B = require('cruller'); // replace B with project-specific name
const permutations = require('cruller').cartesian;

describe.each(permutations)('Done %s %s', (banner, breakpoint) => {    
    let app;
    beforeAll(async () => {
        app = new B;
        await app.startUp({banner: banner, breakpoint: breakpoint});
        await app.donePage.navigateToDone();
    }, 80000);

    afterAll(async () => {
        await app.page.screenshot({path: 'done.png', fullPage: true});
        await app.browser.close();
    });
    
    test('Test done page', async () => {
        await expect(app.page).toHaveElement(app.donePage.pageEl);
        const summaryElement = await app.page.$(app.donePage.doneMsg);
        const summaryText = await app.page.evaluate((el) => el.textContent, summaryElement);
        await expect(summaryText).toBe('This math exercise has been finished');
    }, 80000);
});
