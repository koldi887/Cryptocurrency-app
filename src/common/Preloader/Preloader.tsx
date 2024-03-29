import React from "react";
import classes from "./Preloader.module.css";
import preLoaderSvg from "../../images/Spin-1.4s-124px.svg";

export const PreLoader = () => {
    return (
        <div className={classes.loaderBlock}>
            <img alt="Loading" src={preLoaderSvg}/>
        </div>
    );
};
