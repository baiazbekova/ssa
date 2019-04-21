var HomePage = require ('../Pages/HomePage.page.js'); 


describe ('Home', ()=> {
    beforeEach(function(){
        browser.waitForAngularEnabled(false); 
        browser.get('https://www.ssa.gov/'); 
        
    }); 

    it('should have correct page title', ()=> {
        expect(browser.getTitle()).toEqual('The United States Social Security Administration'); 
    }); 

    it('should have correct url of the page', ()=> {
        browser.getCurrentUrl().then(function(url){
            console.log(url);
        });
    });

    it('should display the navigation bar', ()=> {
       expect(HomePage.navigationBar.isDisplayed()).toBeTruthy(); 
    }); 

    it('sign up button should be clickable', ()=> {
        HomePage.signUpButton.isDisplayed().then(function(isVisible){
            if(isVisible){
                console.log("sign up button is displayed");
            }else{
                console.log("sign up button is NOT displayed");
            }
        })
    });
});