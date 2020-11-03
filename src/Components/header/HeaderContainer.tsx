import React from 'react';
import {Header} from "./Header";
import {connect} from 'react-redux';
import {stateType} from '../../redux/redux-store';
import {logOutProfileThunk} from '../../thunks/authThunk';

type MstpType = {
    isAuth: boolean
    login: string | null
}

type MdtpType = {
    logOutProfile: () => void
}

type PropsType = MstpType & MdtpType

class HeaderContainer extends React.Component<PropsType> {

    render(): React.ReactNode {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logOutProfile={this.props.logOutProfile}/>
    }
}


const mapStateToProps = (state: stateType): MstpType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

//@ts-ignore
export default connect<PropsType, any>(mapStateToProps, {logOutProfile: logOutProfileThunk})(HeaderContainer)