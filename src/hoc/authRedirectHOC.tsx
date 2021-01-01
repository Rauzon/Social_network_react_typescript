import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateForRedirectType = {
    isAuth: boolean
}
type MapDispatchForRedirectType = {
    isAuth: boolean
}

const mapStateForRedirect = (state: StateType): MapStateForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function authRedirectHOC<HOCPropsType>(Component: ComponentType<HOCPropsType>) {

    function authRedirectComponent(props: MapDispatchForRedirectType & MapStateForRedirectType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }

        return <Component {...restProps as HOCPropsType} />

    }

    return connect<MapStateForRedirectType, MapDispatchForRedirectType, HOCPropsType, StateType>(mapStateForRedirect)
    (authRedirectComponent)

}