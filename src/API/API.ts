import axios from 'axios';
import {
    CommonAuthStateType,
    CommonDataProfileType,
    CommonDataUsersType,
    CommonSibscribeDataType,
    UserType
} from "../redux/redux-store";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '959808d3-8efe-42bd-88eb-3693675e6c98'
    }
})

type UserAPIProps = {
    setUsers: (currentPage: number, pageSize: number) => Promise<CommonDataUsersType<UserType[]>>
    unfollow: (userId: number) => Promise<CommonSibscribeDataType>
    follow: (userId: number) => Promise<CommonSibscribeDataType>
}
type AuthAPIProps = {
    setAuth: () => Promise<CommonAuthStateType>
}
type ProfileAPIProps = {
    setUserProfile: (userId: string) => Promise<CommonDataProfileType>
}

export const userAPI: UserAPIProps = {

    setUsers(currentPage: number, pageSize: number) {
        return instance.get<CommonDataUsersType<UserType[]>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    unfollow(userId){
        return instance.delete<CommonSibscribeDataType>(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    },
    follow(userId){
        return instance.post<CommonSibscribeDataType>(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    }
}

export const authAPI: AuthAPIProps = {

    setAuth(){
        return instance.get<CommonAuthStateType>('auth/me')
            .then(res => {
                return res.data
            })
    }

}

export const profileAPI: ProfileAPIProps = {

    setUserProfile(userId){
        return instance.get<CommonDataProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                return res.data
            })
    }

}