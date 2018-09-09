var angularHomepage = require('./AngularHomepage');

describe('angularjs homepage', function() {
    it('should greet the name user', function() {
        angularHomepage.get();

        angularHomepage.setName('Rodrigo');

        expect(angularHomepage.getGreetingText()).toEqual('Hello Rodrigo!');
    });
});