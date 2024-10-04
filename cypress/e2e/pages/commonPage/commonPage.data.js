export class CommonPageData{
    static get url(){
        return 'https://www.demoblaze.com/'
    }

    static get testSuites(){
        return{
            register: "Auth and Register",
            login: "Login",
            catalogeAndBuy: "Cataloge and Buy"
        }
    }
}