export class LoginPage{

    constructor(page){
        this.page=page
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        this.lgnBtn=page.getByRole('button',{name:'Login'})
    }

    async login(){
        await this.username.fill("standard_user")
        await this.password.fill("secret_sauce")
        await this.lgnBtn.click()

    }
}