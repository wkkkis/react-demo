import axios from "axios";
import {photosType} from "../redux/profile-reducer";
import {usersType} from "../redux/users-reducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8d7af72b-9770-4ccd-b365-d69de01f6239"
    }
})

export type getItemsType = {
    items: Array<usersType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = resultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export type savePhotoResponseDataType = {
    photos: photosType
}

export enum resultCodeEnum {
    Success = 0,
    Error = 1,
    captchaIsRequired = 10
}

export type meResponseType = {
    id: number
    email: string
    login: string
}

export type loginResponseType = {
    userId: number
}