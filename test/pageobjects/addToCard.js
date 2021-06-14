const Page = require('./page');


class AddToCard extends Page{
   
    get searchbar () { return $('//*[@id="search"]') }
    get search () { return $('button[title="Search"]') }
    get item () { return $('a[title="Slim fit Dobby Oxford Shirt"]') }
    get color () { return $('//option[contains(text(),"Blue")]') }
    get size () { return $('//option[contains(text(),"XS")]') }
    get addcardbtn () { return $('(//span[contains(text(),"Add to Cart")])[2]') }


    async additemtocard () {
        await (await this.searchbar).setValue('shirt');
        await (await this.search).click();
        await (await this.item).click();
        await (await this.color).click();
        await (await this.size).click();
        await (await this.addcardbtn).click();
      
     
    }



}

module.exports = new AddToCard();
