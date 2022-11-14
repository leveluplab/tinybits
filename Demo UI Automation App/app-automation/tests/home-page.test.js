const each = require('jest-each');
const B = require('cruller'); // replace B with project-specific name
const permutations = require('cruller').cartesian;

describe.each(permutations)('App %s %s', (banner, breakpoint) => {    
    let app;
    beforeAll(async () => {
        app = new B;
        await app.startUp({banner: banner, breakpoint: breakpoint});
    }, 80000);

    afterAll(async () => {
        await app.page.screenshot({path: 'sum.png', fullPage: true});
        await app.browser.close();
    });
    
    test('Test homepage', async () => {
        await expect(app.page).toHaveElement(app.homePage.pageEl);
        await app.homePage.fillFormAndSum();
        const sumElement = await app.page.$(app.homePage.sum);
        const sumText = await app.page.evaluate((el) => el.textContent, sumElement);
        await expect(sumText).toBe('15');
        await app.page.click(app.homePage.linktoCompletion);
        await expect(app.page).toHaveElement(app.donePage.pageEl);
    }, 80000);
});
