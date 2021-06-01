import {APIResponseType, getItemsType, instance} from "./api";

const usersAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(u: number){
        return instance.post<APIResponseType>(`follow/${u}`)
            .then(res => res.data)
    },
    unfollow(u: number){
        return instance.delete<APIResponseType>(`follow/${u}`)
            .then(response => {
                return response.data
            })
    }
}

export default usersAPI