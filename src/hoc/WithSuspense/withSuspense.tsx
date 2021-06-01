import React from "react";
import s from "./withSuspense.module.css";


const withSuspense = (Component: any) => {
    return (props: any) => {
        return <React.Suspense fallback={
            <div className={s.fullLoading}>
                <span>
                    Loading...
                </span>
            </div>
        }>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspense;