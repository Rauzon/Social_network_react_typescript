import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {stateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateForRedirectType = {
    isAuth : boolean
}

const mapStateForRedirect = (state: stateType):MapStateForRedirectType => {
    return {
        isAuth:state.auth.isAuth
    }
}

export const authRedirectHOC = (Component: ComponentType<any>) => {

    const authRedirectComponent:React.FC<MapStateForRedirectType> = (props) => {

        if (!props.isAuth) {
            return <Redirect to = {'/login'} />
        }

        return <Component {...props} />

    }

    return  connect(mapStateForRedirect, null)(authRedirectComponent)

}