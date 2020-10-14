import React from 'react';
import {Header} from "./Header";
import { connect } from 'react-redux';
import {stateType} from '../../redux/redux-store';
import { authProfileThunk } from '../../thunks/authThunk';

type MstpType = {
    isAuth: boolean
    login: string | null
}

type MdtpType = {
    setAuthData: () => void
}

type PropsType = MstpType & MdtpType

class HeaderContainer extends React.Component<PropsType>  {


    componentDidMount(): void {
       this.props.setAuthData()
    }



    render(): React.ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}


const mapStateToProps = (state: stateType):MstpType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setAuthData: authProfileThunk})(HeaderContainer)