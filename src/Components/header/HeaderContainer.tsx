import React from 'react';
import {Header} from "./Header";
import { connect } from 'react-redux';
import {AuthDataType, stateType} from '../../redux/redux-store';
import {setAuthData} from "../../redux/TypesForRedux";
import {authAPI} from "../../API/API";

type MstpType = {
    isAuth: boolean
    login: string | null
}

type MdtpType = {
    setAuthData: (authData: AuthDataType) => void
}

type PropsType = MstpType & MdtpType

class HeaderContainer extends React.Component<PropsType>  {


    componentDidMount(): void {
        authAPI.setAuth().then(res => {
                if(res.resultCode === 0){
                    this.props.setAuthData(res.data)
                }
            })
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


export default connect(mapStateToProps, {setAuthData})(HeaderContainer)