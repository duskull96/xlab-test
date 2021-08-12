import React from "react";
import classes from "./Search.module.scss";
import SVGSearch from "./icons/search.svg";

const Search: React.FC = () => {
    function submitHandler(e: any) {
        e.preventDefault();
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Поиск адресов</h1>
            </div>
            <form className={classes.form} onSubmit={submitHandler}>
                <label>Введите интересующий вас адрес</label>
                <div className={classes.input}>
                    <input type="text" placeholder="Ленина" />
                    <button>
                        <img src={SVGSearch} alt="search" />
                        <span>Поиск</span>
                    </button>
                </div>
            </form>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h1>Адреса</h1>
                </div>
                <div className={classes.addresses}>
                    <div className={classes.item}>
                        город Москва, улица Ленина 13, дом 32
                    </div>
                    <div className={classes.item}>
                        город Санкт-Петербург, улица Ленина 13, дом 32
                    </div>
                    <div className={classes.item}>
                        город Краснодар, улица Ленина 13, дом 32
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
