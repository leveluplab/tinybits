const stampit = require('@stamp/it');

const homeBase = stampit({
    props: {
        path: '/',
        pageEl: '[data-auid="home-page"]',
        inputA: '[data-auid="input-a"]',
        inputB: '[data-auid="input-b"]',
        sumButton: '[data-auid="sum-button"]',
        sum: '[data-auid="sum"]',
        linktoCompletion: '[data-auid="link-to-completion"] a',
    },

    methods: {

        async fillFormAndSum() {
            await this.puppeteerPage.waitForSelector(this.pageEl, {visible: true});
            await this.puppeteerPage.type(this.inputA, '7', {delay: 20});
            await this.puppeteerPage.type(this.inputB, '8', {delay: 20});
            await this.puppeteerPage.click(this.sumButton);
        }
    }
});

const homeTablet = stampit({
    props: {
        homeProp: 'used for tablet'
    },

    methods: {
    }
});

const homeMobile = stampit({
    props: {
        homeProp: 'used for mobile'
    },

    methods: {

    }
});

module.exports = { homeBase, homeTablet, homeMobile };