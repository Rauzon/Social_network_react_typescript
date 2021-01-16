import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {
    setUserProfileThunk,
    setUserStatusThunk,
    updateProfilePhotoThunk,
    updateUserStatusThunk
} from "../../thunks/profileThunk";
import {authRedirectHOC} from '../../hoc/authRedirectHOC';
import {compose} from 'redux';
import {ProfilePageType} from '../../redux/reducers/profilePage-reducer';
import {getProfilePageSelector, getUserIdSelector} from '../../redux/selectors/ProfileSelectors';

type MstpType = {
    profilePage: ProfilePageType
    authUserId: number | null
}

type MdtpType = {
    setUserProfile: (userId: string) => void
    setStatusProfile: (userId: string) => void
    updateStatus: (title: string) => void
    updatePhoto: (photo: any) => void
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MdtpType & MstpType

export class ProfileContainer extends React.PureComponent<PropsType> {

    rerenderProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            if (this.props.authUserId !== null) {
                userId = this.props.authUserId.toString();
            } else {
                this.props.history.push('/login')
            }
        }

        this.props.setUserProfile(userId)
        this.props.setStatusProfile(userId)
    }

    componentDidMount(): void {
        this.rerenderProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.rerenderProfile()
        }
    }

    render(): React.ReactNode {
        return (
            <Profile paramsUserId={!!this.props.match.params.userId}
                     profilePage={this.props.profilePage}
                     updateStatus={this.props.updateStatus}
                     userId={this.props.match.params.userId}
                     updatePhoto={this.props.updatePhoto}/>
        )
    }
}

const mapStateToProps = (state: StateType): MstpType => {
    return {
        profilePage: getProfilePageSelector(state),
        authUserId: getUserIdSelector(state),
    }
}

export const ProfileContainerWithURL = compose<ComponentType<{}>>(
    authRedirectHOC,
    withRouter,
    connect<MstpType, MdtpType, {}, StateType>(mapStateToProps, {
        setUserProfile: setUserProfileThunk,
        setStatusProfile: setUserStatusThunk,
        updateStatus: updateUserStatusThunk,
        updatePhoto: updateProfilePhotoThunk,
    }))(ProfileContainer)

