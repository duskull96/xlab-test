import React from "react";
import classes from "./Header.module.scss";
import SVGLogo from "./icons/logo.svg";
import SVGPerson from "./icons/person.svg";

const Header: React.FC = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img className={classes.icon} src={SVGLogo} alt="logo" />
                <h1 className={classes.title}>Wrench CRM</h1>
            </div>
            <div className={classes.person}>
                <img className={classes.icon} src={SVGPerson} alt="person" />
                <h1 className={classes.name}>Имя Фамилия</h1>
            </div>
        </div>
    );
};

export default Header;
