import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {stateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateForRedirectType = {
    isAuth: boolean
}
type MapDispatchForRedirectType = {}

const mapStateForRedirect = (state: stateType): MapStateForRedirectType => {
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

    return connect<MapStateForRedirectType, MapDispatchForRedirectType, HOCPropsType, stateType>(mapStateForRedirect)
    (authRedirectComponent)

}