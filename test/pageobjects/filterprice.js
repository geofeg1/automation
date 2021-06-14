const Page = require('./page');


class FilterPrice extends Page{
   
    extractPrice = async (string) => {
        //  for (let i = 0; i <= string.length; i++) {
          //  if (string.charAt(i) === '$') {
           return string.toString().substring(1,5)     //didn't work
           // }
         // }
       }

}

module.exports = new FilterPrice();
