expect.extend({
    async toHaveElement(puppeteerPage, expectedElement) {
        await puppeteerPage.waitForSelector(expectedElement, {visible: true}); 
        const pass = await puppeteerPage.$(expectedElement) !== null;
        if (pass) {
            return {
                message: () =>
                    `expected ${puppeteerPage.url()} not to contain the element ${expectedElement}`,
                pass: true,
            }; 
        } else {
            return {
                message: () =>
                    `expected ${puppeteerPage.url()} to contain the element ${expectedElement}`,                    
                pass: false,
            };
        }
    }
});