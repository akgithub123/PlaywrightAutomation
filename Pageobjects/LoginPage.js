class LoginPage{

    constructor(page){
        this.page = page
        this.userName = page.locator("input#username")
        this.password = page.locator('[type="password"]')
        this.signInBtn = page.locator('#signInBtn')
        this.cardTitle = page.locator('h4.card-title a') 
    }

    async validLogin(Username, Password){
        await userName.fill(Username)
        await password.fill(Password)
        await signInBtn.click()
        console.log('test commit')

    }
     

}
module.exports = {LoginPage}