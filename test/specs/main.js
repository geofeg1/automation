const LoginPage = require('../pageobjects/login.page');
const Account = require('../pageobjects/account.page');
const Elements = require('../pageobjects/elements');
const FilterPrice = require('../pageobjects/filterprice');
const AddToCard = require('../pageobjects/addToCard');


describe('My madison island application', () => {
    
    it('should not login with in valid credentials, show alert', async () => {

        await LoginPage.open();
        browser.maximizeWindow();
        await Account.reachLoginPage();
        await LoginPage.login('test@test.com', 'ThisIs@T3st');//login with wrong credentials
        await expect(Elements.flashAlert).toBeExisting();
        console.log("Cannot login with those credentials");

});

    it('should not login with empty credentials, show error provider', async () => {  

         await Account.reachLoginPage();
         await LoginPage.login('', '');//login with empty credentials
         await expect(Elements.emptyuser).toBeExisting();
         await expect(Elements.emptypass).toBeExisting();
         console.log("Cannot login with empty credentials");
        
    });

    it('add an item to a card', async () => {
     
        await AddToCard.additemtocard();
        await expect(Elements.cardaddedmsg).toHaveTextContaining('Slim fit Dobby Oxford Shirt was added to your shopping cart.');
        console.log("shirt added successfuly");

    });

    it('execute filter', async () => {
        const Sale=$('//a[contains(text(),"Sale")]');
        await (await Sale).moveTo(); //hover over Sale
        const ViewSale=$('//*[@id="nav"]/ol/li[5]/ul/li[1]/a');//click on the view all sale tab
        await (await ViewSale).click();
        // browser.pause(10000);                                             //no command  worked with me to add a delay 
        let listItems =$$('//*[@class="special-price"]/span[2]');           //find all elements (we have 4))
        
        //try{
        //const a=(await listItems).Length();   
        //}
        //catch (Exception)
        //{
        //   const a=listItems.array.Length();                            //didn't work
        //}
       // expect(listItems.length).to.be.equal(5);                        //didn't work


       await expect(listItems).toBeElementsArrayOfSize(4);//asserted that i have 4 but didn't use it


      //await expect(await listItems).toBeElementsArrayOfSize(5);                   
        // listItems[1].getText();                                       //showed in the console  as Promise { <pending> }
        // delay(10000);
        //const a=(await listItems[1]).getText();
        // console.log(a);


        listitemsarray=[];                                              //tried to push each element's text in an array and then parse, didn't work
       (await listItems).forEach(element => {//looping over the available products
        //  var a=element.getText();
        //a.slice(1);                                               //parsing the price to remove the $ then comparing didn't work, substring command as well was crashing
                                                                    //I wanted to check out of those 4 the count of items with price between 100 and 200
                                                                    //then compare this number with the number of items after filter (to make sure that no item was missed)
                                                                    //then loop over the displayed items after filter and check that their price is between 100 and 200
        //a.slice;
       
      const output = browser.call(                  //required to deal with Promises from 3rd-party libraries, I should use browser.call, but didn't work as well
            () => element.getText()
        )
      //  const  output = element.getText();                            //same results
        console.log(`price with dlr${output}`);
        const finalprice=  FilterPrice.extractPrice(output).then(str => console.log(str));       //showed in the console  as Promise { <pending> }
        console.log(`price after removing dlr ${finalprice}`);                                  //however at the end of the console it displayed the 4 prices with the $ 
        });
        const Filter=$('//*[@id="narrow-by-list"]/dd[12]/ol/li[1]/a/span[1]');//execute the filter             
        await (await Filter).click();
        browser.debug();                                                                     //didn't work to keep the browser opened, tried other commands as well
     
    });

});


