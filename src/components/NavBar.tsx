import { useContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import AppContext from "../context/app_context";
import "../styles/anchor_style.css";
import "../styles/navbar.css";

const pageNames: Array<String> = [
    "PS Gopalpur",
    "Gallery",
    "Faculty",
    "Achievements",
    "Results",
    "About Us",
    "Admin Login",
    "Enroll Now",
];

const NavBar = (props: any): JSX.Element => {
    const isPhone = useMediaQuery("(max-width: 1080px)");
    let appCtx = useContext(AppContext);

    return (
        <nav
            className={`navbar ${props.isHeaderSticky ? "sticky" : ""}`}
            style={{
                width: "100%",
                float: "initial",
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",

                marginTop: props.isHeaderSticky ? "0.0%" : "3.2%",
                zIndex: 4,

                backgroundColor: props.isHeaderSticky
                    ? "#F1EEE8"
                    : "transparent",
                borderBottom: props.isHeaderSticky ? "2px solid black" : "none",
            }}
        >
            <button
                className="app-link medium-link"
                onClick={props.onClickMenu}
            >
                {isPhone ? "☰" : "☰ MENU"}
            </button>
            <h1
                className="school-name"
                style={{
                    fontSize: "7.2rem",
                    fontFamily: "Beattingvile",
                }}
            >
                {pageNames[appCtx.pageNumber]}
            </h1>
            <button
                style={{ display: isPhone ? "none" : "block" }}
                className="app-link medium-link"
                onClick={props.onEnrollNow}
            >
                ENROLL NOW
            </button>

            {/* Helps in keeping the title in center :) */}
            {isPhone && (
                <button
                    className="app-link medium-link"
                    style={{ opacity: 0 }}
                >
                    {isPhone ? "☰" : "☰ MENU"}
                </button>
            )}
        </nav>
    );
};

export default NavBar;
