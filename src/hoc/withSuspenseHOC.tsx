import React from "react";
import {CircularProgress} from "@material-ui/core";
import s from "../app.module.css";


export function withSuspenseHOC(Component: any) {
    return <React.Suspense fallback={<CircularProgress className={s.circleProgress}/>}>
        < Component/>
    </React.Suspense>
}