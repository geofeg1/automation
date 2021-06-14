const Page = require('./page');


class Elements extends Page {

    get flashAlert () { return $('//span[contains(text(),"Invalid login or password")]') }//message inside the xpath
    get emptyuser () { return $('(//div[contains(text(),"This is a required field.")])[1]') }//message inside the xpath
    get emptypass () { return $('(//div[contains(text(),"This is a required field.")])[2]') }//message inside the xpath
    get cardaddedmsg () { return $('//*[@id="top"]/body//div[2]/ul//li/span') }

}

module.exports = new Elements();
