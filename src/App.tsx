import React from "react";
import { BrowserRouter } from "react-router-dom";
import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={classes.container}>
                <Header />
                <SideBar />
                <Main />
            </div>
        </BrowserRouter>
    );
};

export default App;
