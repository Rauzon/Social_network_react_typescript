import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {stateType, profilePageType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {setUserProfileThunk} from "../../thunks/profileThunk";
import {authRedirectHOC} from '../../hoc/authRedirectHOC';
import {compose} from 'redux';


type MstpType = {
    profilePage: profilePageType
}

type MdtpType = {
    setUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MdtpType & MstpType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {

        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }

        this.props.setUserProfile(userId)
    }


    render(): React.ReactNode {
        return (
            <Profile profilePage={this.props.profilePage}/>
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
    connect(mstp, {setUserProfile: setUserProfileThunk}),)(ProfileContainer)

