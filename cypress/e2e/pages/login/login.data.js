export class LoginData{
    static get validCredentials(){
        return{
            username: 'arco',
            password: 'arco'
        };
    }

    static get invalidCredentials(){
        return{
            username: 'arca',
            password: 'arca'
        };
    }


}