import React from 'react';
import style from './profile.module.css'
import {Profile} from "./Profile";
import axios from 'axios';
import {connect} from "react-redux";
import {stateType, CommonDataProfileType, profilePageType} from "../../redux/redux-store";
import {setIsFetching, setUserProfile} from "../../redux/TypesForRedux";
import { withRouter, RouteComponentProps } from 'react-router-dom';



type MstpType = {
    profilePage: profilePageType
}

type MdtpType = {
    setUserProfile:(userProfile:CommonDataProfileType) => void
    setIsFetching:(isFetching:boolean) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> &  MstpType & MdtpType

export class ProfileContainer extends React.Component<PropsType>{

    componentDidMount(): void {

        let userId = this.props.match.params.userId

        if(!userId){
            userId = '2'
        }

        this.props.setIsFetching(true)
        axios.get<CommonDataProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
                this.props.setIsFetching(false)
            })
    }


    render(): React.ReactNode {
        return (
                <Profile profilePage={this.props.profilePage} />
        )
    }
}

const mstp = (state: stateType): MstpType => {
    return {
        profilePage: state.profilePage
    }
}

export const ProfileContainerWithURL = withRouter(connect(mstp, {setUserProfile, setIsFetching})(ProfileContainer))

