import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {setUserProfileThunk, setUserStatusThunk, updateUserStatusThunk} from "../../thunks/profileThunk";
import {authRedirectHOC} from '../../hoc/authRedirectHOC';
import {compose} from 'redux';
import {profilePageType} from '../../redux/reducers/profilePage-reducer';

type MstpType = {
    profilePage: profilePageType
}

type MdtpType = {
    setUserProfile: (userId: string) => void
    setStatusProfile: (userId: string) => void
    updateStatus: (title: string) => void
    updatePhoto: (photoURL: File) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MdtpType & MstpType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '7788';
        }

        this.props.setUserProfile(userId)
         this.props.setStatusProfile(userId)
    }


    render(): React.ReactNode {
        return (
            <Profile profilePage={this.props.profilePage}
                     updateStatus={this.props.updateStatus}
                     userId={this.props.match.params.userId}/>
        )
    }
}

const mstp = (state: stateType): MstpType => {
    return {
        profilePage: state.profilePage
    }
}

export const ProfileContainerWithURL = compose(
    authRedirectHOC,
    withRouter,
    //@ts-ignore
    connect<any>(mstp, {
        setUserProfile: setUserProfileThunk,
        setStatusProfile: setUserStatusThunk,
        updateStatus: updateUserStatusThunk,
    }))(ProfileContainer)

