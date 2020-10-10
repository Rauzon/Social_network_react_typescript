import React from 'react';
import {Header} from "./Header";
import axios from 'axios';
import { connect } from 'react-redux';
import {AuthDataType, stateType, CommonAuthStateType} from '../../redux/redux-store';
import {setAuthData} from "../../redux/TypesForRedux";

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
        axios.get<CommonAuthStateType>('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true
        })
            .then(res => {
                if(res.data.resultCode === 0){
                    this.props.setAuthData(res.data.data)
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