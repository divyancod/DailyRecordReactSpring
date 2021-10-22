class MyAuth
{
    isAuthorized = false;
    constructor() {
        const info = JSON.parse(localStorage.getItem("userdata"));
        console.log(info)
        if (info != null) {
            this.isAuthorized = true;
        }
    }
    isAuthenticate(){
        return this.isAuthorized;
    }
    setAuthenticated(value)
    {
        this.isAuthorized=value
    }
}
export default new MyAuth()