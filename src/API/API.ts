import axios from 'axios';
import {UserType} from "../redux/reducers/usersPage-reducer";
import {CommonDataProfileType} from "../redux/reducers/profilePage-reducer";
import {AuthDataType} from "../redux/reducers/auth-reducer";



//for getting users for UsersPage
export type CommonDataUsersType<D = {}> = {
    error: string | null
    totalCount: number
    items: D
}


export type CommonResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '959808d3-8efe-42bd-88eb-3693675e6c98'
    }
})


export const userAPI = {
    setUsers(currentPage: number, pageSize: number) {
        return instance.get<CommonDataUsersType<UserType[]>>(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId:number) {
        return instance.delete<CommonResponseType<{}>>(`follow/${userId}`)
    },
    follow(userId:number) {
        return instance.post<CommonResponseType<{}>>(`follow/${userId}`)
    }
}

export const authAPI = {
    setAuth() {
        return instance.get<CommonResponseType<AuthDataType>>('auth/me')
    },
    logIn(email:string, password: string, rememberMe:boolean, captcha?: string) {
        return instance.post<CommonResponseType<{userId: number}>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<CommonResponseType<{}>>('auth/login')
    },
    getCaptcha(){
        return instance.get<{url: string}>(`/security/get-captcha-url`)
    },

}

export const profileAPI = {

    setUserProfile(userId:string) {
        return instance.get<CommonDataProfileType>(`profile/${userId}`)
    },
    setStatusProfile(userId:string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatusProfile(status:string) {
        return instance.put<string>(`profile/status`, {status})
    },
}