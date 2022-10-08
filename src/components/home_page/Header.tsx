import background_img from "../../assets/images/tac-top-shapes.svg";
import "../../styles/anchor_style.css";

const headerStyle: React.CSSProperties = {
    position: "relative",
    height: "100vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1eee8",
    zIndex: "3",
};

const headerHeadStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    paddingTop: "2.5%",
    zIndex: 2,
};

const headerImgStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    objectFit: "cover",

    left: "auto",
    right: "auto",
    top: -330,
    bottom: 0,
    zIndex: -1,
};

const shlokaStyle: React.CSSProperties = {
    fontFamily: "Samarkan",
    fontSize: "112px",
    wordSpacing: "-8px",
};

const Header = (props: any): JSX.Element => {
    return (
        <header style={headerStyle} ref={props.m_ref}>
            <img src={background_img} style={headerImgStyle}></img>
            <div style={headerHeadStyle}>
                <a className="app-link medium-link" onClick={props.onClickMenu}>
                    ☰ MENU
                </a>
                <h1
                    style={{
                        padding: "0.1% 1%",
                        fontSize: "108px",
                        fontFamily: "Beattingvile",
                    }}
                >
                    PS Gopalpur
                </h1>
                <a
                    className="app-link medium-link"
                    onClick={props.onClickActivity}
                >
                    ACTIVITIES
                </a>
            </div>

            <p style={shlokaStyle}>vidya dadati vinayam</p>
            <a className="app-link app-link--filled medium-link">ENROLL NOW</a>
            <div style={{ height: "10%" }}></div>
        </header>
    );
};

export default Header;
