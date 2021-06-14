const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () { return $('//*[@id="email"]') }
    get inputPassword () { return $('//*[@id="pass"]') }
    get btnSubmit () { return $('//*[@id="send2"]') }

    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }


  
    open () {
        return super.open('login');
    }
  
}

module.exports = new LoginPage();
