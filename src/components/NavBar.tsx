import { useContext } from "react";
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
];

const NavBar = (props: any): JSX.Element => {
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
            <a className="app-link medium-link" onClick={props.onClickMenu}>
                ☰ MENU
            </a>
            <h1
                className="school-name"
                style={{
                    fontSize: "72px",
                    fontFamily: "Beattingvile",
                }}
            >
                {pageNames[appCtx.pageNumber]}
            </h1>
            <a className="app-link medium-link" onClick={props.onEnrollNow}>
                ENROLL NOW
            </a>
        </nav>
    );
};

export default NavBar;
