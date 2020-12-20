import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {setUserProfileThunk, setUserStatusThunk, updateUserStatusThunk} from "../../thunks/profileThunk";
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
}

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MdtpType & MstpType

export class ProfileContainer extends React.PureComponent<PropsType> {

    componentDidMount(): void {

        let userId = this.props.match.params.userId;

        if (!userId) {
            if(this.props.authUserId !== null){
                userId = this.props.authUserId.toString();
            } else {
                this.props.history.push('/login')
            }
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

const mapStateToProps = (state: stateType): MstpType => {
    return {
        profilePage: getProfilePageSelector(state),
        authUserId: getUserIdSelector(state),
    }
}

export const ProfileContainerWithURL = compose<ComponentType<{}>>(
    authRedirectHOC,
    withRouter,
    connect<MstpType, MdtpType, {}, stateType>(mapStateToProps, {
        setUserProfile: setUserProfileThunk,
        setStatusProfile: setUserStatusThunk,
        updateStatus: updateUserStatusThunk,
    }))(ProfileContainer)

