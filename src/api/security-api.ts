import {instance} from "./api";

const securityAPI = {
    getCaptchaURL(){
        return instance.get('/security/get-captcha-url')
    }
}

export default securityAPI