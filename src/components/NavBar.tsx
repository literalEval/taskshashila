import "../styles/anchor_style.css";
import "../styles/navbar.css";

const NavBar = (props: any): JSX.Element => {
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

                marginTop: props.isHeaderSticky ? "0.2%" : "3.2%",
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
                PS Gopalpur
            </h1>
            <a className="app-link medium-link" onClick={props.onClickActivity}>
                ACTIVITIES
            </a>
        </nav>
    );
};

export default NavBar;
