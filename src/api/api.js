import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ca8538f6-9e12-41c6-adae-55fb6cdc2069"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(u){
        return instance.post(`follow/${u}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(u){
        return instance.delete(`follow/${u}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status : status})
    },
    savePhoto(photoFile){
        debugger
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me')
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOut(){
        return instance.post(`auth/logout`).then(
            response => {
                return response
            }
        )
    }
}
