import React from "react";
import {CircularProgress} from "@material-ui/core";


export function withSuspenseHOC(Component: any) {
    return <React.Suspense fallback={<CircularProgress/>}>
        < Component/>
    </React.Suspense>
}