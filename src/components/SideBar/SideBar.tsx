import React from "react";
import classes from "./SideBar.module.scss";
import SVGMain from "./icons/main.svg";
import SVGSearch from "./icons/search.svg";
import SVGTables from "./icons/tables.svg";
import SVGCalendar from "./icons/calendar.svg";
import SVGMaps from "./icons/maps.svg";
import SVGWidgets from "./icons/widgets.svg";
import SVGSettings from "./icons/settings.svg";
import SVGTriangle from "./icons/triangle.svg";
import SVGSettingsPerson from "./icons/settings-person.svg";
import SVGManage from "./icons/manage.svg";
import SVGExit from "./icons/exit.svg";
import SVGHamburger from "./icons/hamburger.svg";
import SVGHamburgerClose from "./icons/hamburgerClose.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SideBar: React.FC = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [smallMenuOpen, setSmallMenuOpen] = useState(false);
    useEffect(() => {
        if (window.screen.width <= 768) {
            setSmallMenuOpen(true);
        }
    }, []);
    return (
        <>
            {smallMenuOpen ? (
                <div className={classes.containerSM}>
                    <img
                        src={SVGHamburger}
                        alt="hamburger"
                        onClick={() => setSmallMenuOpen(false)}
                    />
                </div>
            ) : (
                <div className={classes.container}>
                    <div className={classes.title}>
                        <span>Меню</span>
                        {window.screen.width > 768 ? null : (
                            <img
                                src={SVGHamburgerClose}
                                alt="hamburgerClose"
                                onClick={() => setSmallMenuOpen(true)}
                            />
                        )}
                    </div>
                    <div className={classes.list}>
                        <div className={classes.item}>
                            <NavLink
                                to="/"
                                className={classes.link}
                                activeClassName={classes.activeLink}
                                exact
                            >
                                <img
                                    className={classes.icon}
                                    src={SVGMain}
                                    alt="main"
                                />
                                <span className={classes.title}>Главная</span>
                            </NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink
                                to="/address"
                                className={classes.link}
                                activeClassName={classes.activeLink}
                                exact
                            >
                                <img
                                    className={classes.icon}
                                    src={SVGSearch}
                                    alt="search"
                                />
                                <span className={classes.title}>
                                    Поиск адресов
                                </span>
                            </NavLink>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.link}>
                                <img
                                    className={classes.icon}
                                    src={SVGTables}
                                    alt="tables"
                                />
                                <span className={classes.title}>Таблицы</span>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.link}>
                                <img
                                    className={classes.icon}
                                    src={SVGCalendar}
                                    alt="calendar"
                                />
                                <span className={classes.title}>Календарь</span>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.link}>
                                <img
                                    className={classes.icon}
                                    src={SVGMaps}
                                    alt="maps"
                                />
                                <span className={classes.title}>Карты</span>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.link}>
                                <img
                                    className={classes.icon}
                                    src={SVGWidgets}
                                    alt="widgets"
                                />
                                <span className={classes.title}>Виджеты</span>
                            </div>
                        </div>
                        <div
                            className={classes.extendedItem}
                            onClick={() => setSettingsOpen(!settingsOpen)}
                        >
                            <div className={classes.link}>
                                <div className={classes.head}>
                                    <img
                                        className={classes.icon}
                                        src={SVGSettings}
                                        alt="settings"
                                    />
                                    <span className={classes.title}>
                                        Настройки
                                    </span>
                                </div>
                                {settingsOpen ? (
                                    <img
                                        className={classes.trianlge}
                                        src={SVGTriangle}
                                        alt="trianlge"
                                    />
                                ) : (
                                    <img
                                        className={classes.trianlge}
                                        src={SVGTriangle}
                                        alt="trianlge"
                                        style={{ transform: "rotate(180deg)" }}
                                    />
                                )}
                            </div>
                            {settingsOpen ? (
                                <div>
                                    <div
                                        className={classes.subItem}
                                        onClick={(event) => {
                                            event?.stopPropagation();
                                        }}
                                    >
                                        <div className={classes.link}>
                                            <img
                                                className={classes.icon}
                                                src={SVGSettingsPerson}
                                                alt="settingsPerson"
                                            />
                                            <span className={classes.title}>
                                                Настройки профиля
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={classes.subItem}
                                        onClick={(event) => {
                                            event?.stopPropagation();
                                        }}
                                    >
                                        <div className={classes.link}>
                                            <img
                                                className={classes.icon}
                                                src={SVGManage}
                                                alt="manage"
                                            />
                                            <span className={classes.title}>
                                                Управление финансами
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <div className={classes.item}>
                            <div className={classes.link}>
                                <img
                                    className={classes.icon}
                                    src={SVGExit}
                                    alt="exit"
                                />
                                <span className={classes.title}>Выход</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBar;
