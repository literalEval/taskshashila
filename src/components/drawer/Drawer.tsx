import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../styles/drawer.css";

const DrawerItem = (props: any): JSX.Element => {
    return (
        <div
            className={`drawer__link ${
                props.size === "small" ? "" : "drawer__link-cut"
            } ${props.pageNum === 6 ? "drawer__link-login" : ""}`}
            style={{
                width: "90%",
                fontSize: props.size === "small" ? "28px" : "36px",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
            }}
            onClick={() => {
                if (props.onClick) props.onClick(props.pageNum);
                props.onClose();
            }}
        >
            <i
                className={`fa-solid ${props.iconName}`}
                style={{
                    fontSize: props.size === "small" ? "18px" : "24px",
                    width: "10%",
                }}
            ></i>
            &nbsp;&nbsp;
            <span className="drawer__link--text" style={{ cursor: "pointer" }}>
                {props.children}
            </span>
        </div>
    );
};

const Drawer = (props: any): JSX.Element => {
    const isPhone = useMediaQuery("(max-width: 1080px)");

    return (
        <div
            style={{
                width: isPhone ? "50vw" : "20vw",
                height: "100vh",
                padding: "2% 2%",

                color: "white",
                fontSize: "20px",
                backgroundColor: "black",

                position: "fixed",
                left: props.visible ? 0 : isPhone ? "-50vw" : "-20vw",
                top: 0,
                zIndex: 5,

                transitionProperty: "left",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-out",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "start",
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-evenly",
                }}
            >
                <DrawerItem
                    iconName="fa-sharp fa-circle-xmark"
                    size="large"
                    onClose={props.onClose}
                >
                    MENU
                </DrawerItem>
                <div style={{ height: "10%", width: "4%" }}>&nbsp;</div>
                <DrawerItem
                    iconName="fa-house"
                    size="small"
                    pageNum={0}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Home
                </DrawerItem>
                <DrawerItem
                    iconName="fa-images"
                    size="small"
                    pageNum={1}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Gallery
                </DrawerItem>
                <DrawerItem
                    iconName="fa-user"
                    size="small"
                    pageNum={2}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Faculty
                </DrawerItem>
                <DrawerItem
                    iconName="fa-sharp fa-medal"
                    size="small"
                    pageNum={3}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Achievements
                </DrawerItem>
                <DrawerItem
                    iconName="fa-sharp fa-ranking-star"
                    size="small"
                    pageNum={4}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Results
                </DrawerItem>
                <DrawerItem
                    iconName="fa-circle-info"
                    size="small"
                    pageNum={5}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    About Us
                </DrawerItem>
                <DrawerItem
                    iconName="fa-lock"
                    size="small"
                    pageNum={6}
                    onClose={props.onClose}
                    onClick={props.switchPage}
                >
                    Login
                </DrawerItem>
            </div>

            <div
                className="drawer__school-info-bar"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",

                    fontSize: "80%",
                }}
            >
                <p>
                    E&nbsp;{" "}
                    <a
                        className="address-link"
                        href="mailto://ppgopalpurhata@gmail.com"
                        target="_blank"
                    >
                        ppgopalpurhata@gmail.com
                    </a>
                </p>
                <p>T&nbsp; +91 8400042939</p>
                <p style={{ textAlign: "start" }}>
                    A&nbsp;{" "}
                    <a
                        className="address-link"
                        href="https://goo.gl/maps/MCRHtueWwg5PidBs5"
                        target={"_blank"}
                    >
                        Ward No - 20, Gopal Nagar (Gopalpur)<br></br>
                        Hata, Kushinagar<br></br> Uttar Pradesh, 274203
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Drawer;
