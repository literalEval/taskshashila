import React from "react";
import "../styles/drawer.css";

const DrawerItem = (props: any): JSX.Element => {
    return (
        <div
            className={`drawer__link ${
                props.size === "small" ? "" : "drawer__link-cut"
            }`}
            style={{
                width: "90%",
                fontSize: props.size === "small" ? "20px" : "24px",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
            }}
            onClick={() => props.onClick & props.onClick()}
        >
            <i
                className={`fa-solid ${props.iconName}`}
                style={{
                    fontSize: props.size === "small" ? "14px" : "18px",
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
    return (
        <div
            style={{
                width: "20vw",
                height: "100vh",
                padding: "2% 2%",

                color: "white",
                backgroundColor: "black",

                position: "absolute",
                left: props.visible ? 0 : "-20vw",
                top: 0,
                zIndex: 2,

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
                    onClick={() => props.onClose()}
                >
                    MENU
                </DrawerItem>
                <div style={{ height: "10%", width: "4%" }}></div>
                <DrawerItem iconName="fa-images" size="small">
                    Gallery
                </DrawerItem>
                <DrawerItem iconName="fa-user" size="small">
                    Faculty
                </DrawerItem>
                <DrawerItem iconName="fa-sharp fa-medal" size="small">
                    Achiements
                </DrawerItem>
                <DrawerItem iconName="fa-sharp fa-ranking-star" size="small">
                    Results
                </DrawerItem>
                <DrawerItem iconName="fa-circle-info" size="small">
                    About Us
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
