const Page = require('./page');


class Account extends Page{
  
    get btnAccount () { return $('//div/div[2]/div/a/span[contains(text(),"Account")]') }
    get LoginTab () { return $('a[href="http://www.ctqatest.biz/ecom/customer/account/login/"]') }
    


    async reachLoginPage () {
   
        await (await this.btnAccount).click();
        await (await this.LoginTab).click();
    }



}

module.exports = new Account();
