const stampit = require('@stamp/it');

const homeBase = stampit({
    props: {
        path: '/',
        page: '[data-auid="home-page"]',
        inputA: '[data-auid="input-a"]',
        inputB: '[data-auid="input-b"]',
        sumButton: '[data-auid="sum-button"]',
        sum: '[data-auid="sum"]',
    },

    methods: {
        async validatePage() {
            await this.puppeteerPage.waitForSelector(this.page, {visible: true});
            // await this.puppeteerPage.type(this.searchBar, 'cruller npm', {delay: 20});
            // await this.puppeteerPage.keyboard.press('Enter');
        },

        async fillFormAndSum() {
            await this.puppeteerPage.type(this.inputA, '7', {delay: 20});
            await this.puppeteerPage.type(this.inputB, '8', {delay: 20});
            await this.puppeteerPage.click(this.sumButton);
        }
    }
});

const homeYahoo = stampit({
    props: {
        searchBar: '#uh-search-form'
    }
});

const homeBing = stampit({
    props: {
        searchBar: '#sb_form_q'
    }
});

const homeTablet = stampit({
    props: {
        homeProp: 'used for tablet'
    },

    methods: {
        async homeMethod() {
            console.log('perform extra tablet step');
            console.log('tablet: ' + this.homeProp);
            return(this.homeProp);
        }
    }
});

const homeMobile = stampit({
    props: {
        homeProp: 'used for mobile'
    },

    methods: {
        async homeMethod() {
            console.log('perform extra mobile step');
            console.log('mobile: ' + this.homeProp);
            return(this.homeProp);
        }
    }
});

module.exports = { homeBase, homeYahoo, homeBing, homeTablet, homeMobile };