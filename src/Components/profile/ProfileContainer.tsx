import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {stateType, CommonDataProfileType, profilePageType} from "../../redux/redux-store";
import {setIsFetching, setUserProfile} from "../../redux/TypesForRedux";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {profileAPI} from "../../API/API";



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
        profileAPI.setUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
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

