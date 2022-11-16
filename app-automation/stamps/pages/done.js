const stampit = require('@stamp/it');

const doneBase = stampit({
    props: {
        path: '/done',
        pageEl: '[data-auid="done-page"]',
        doneMsg: '[data-auid="done-msg"]',
    },

    methods: {

        async navigateToDone() {
            await this.puppeteerPage.goto(`${process.env.HOST}${this.path}`);
        }
    }
});


const doneTablet = stampit({
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

const doneMobile = stampit({
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

module.exports = { doneBase, doneTablet, doneMobile };