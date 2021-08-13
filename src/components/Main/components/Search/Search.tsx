import React from "react";
import classes from "./Search.module.scss";
import SVGSearch from "./icons/search.svg";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

const Search: React.FC = () => {
    const { queriedAddress, receivedAddresses, error } = useTypedSelector(
        (state) => state.search
    );
    const { FetchQueriedAddress, SetQueriedAddress, SetQueriedAddressFailed } =
        useActions();
    function changeHandler(e: any) {
        SetQueriedAddress(e.target.value);
    }
    function submitHandler(e: any) {
        e.preventDefault();
        if (queriedAddress.length < 3) {
            SetQueriedAddressFailed();
        } else {
            FetchQueriedAddress(queriedAddress);
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Поиск адресов</h1>
            </div>
            <form className={classes.form} onSubmit={submitHandler}>
                {error?.message.length ? (
                    <label className={classes.labelError}>{error.message}</label>
                ) : (
                    <label className={classes.label}>Введите интересующий вас адрес</label>
                )}
                <div className={classes.input}>
                    <input
                        type="text"
                        onChange={changeHandler}
                        value={queriedAddress}
                    />
                    <button>
                        <img src={SVGSearch} alt="search" />
                        <span>Поиск</span>
                    </button>
                </div>
            </form>
            {!receivedAddresses.length ? null : (
                <div className={classes.content}>
                    <div className={classes.title}>
                        <h1>Адреса</h1>
                    </div>
                    <div className={classes.addresses}>
                        {receivedAddresses.map((address) => {
                            return (
                                <div className={classes.item} key={address.id}>
                                    {address.value}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
