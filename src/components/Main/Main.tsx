import React from "react";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Search from "./components/Search/Search";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
    return (
        <div className={classes.container}>
            <Route path="/" exact>
                <News />
            </Route>
            <Route path="/address">
                <Search />
            </Route>
        </div>
    );
};

export default Main;
