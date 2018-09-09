var AngularHomePage = function() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    this.get = async function() {
        browser.get('https://www.angularjs.org');
    };

    this.setName = async function(name) {
        nameInput.sendKeys(name);
    };

    this.getGreetingText = async function() {
        return greeting.getText();
    };
};

module.exports = new AngularHomePage();