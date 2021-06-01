import {APIResponseType, instance, loginResponseType, meResponseType} from "./api";

const authAPI = {
    me(){
        return instance.get<APIResponseType<meResponseType>>('auth/me').then(res => res.data)
    },
    login(email: string, password: any, rememberMe: boolean, captcha: null | string){
        return instance.post<APIResponseType<loginResponseType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logOut(){
        return instance.post<APIResponseType>(`auth/logout`).then(
            res => res.data
        )
    }
}

export default authAPI