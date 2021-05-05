import React from "react";
import s from "./withSuspense.module.css";

const withSuspense = Component => {
    return (props) => {
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