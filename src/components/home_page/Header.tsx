import background_img from "../../assets/images/tac-top-shapes.svg";
import background_img_smol from "../../assets/images/tac-top-shapes-mobile.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
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

const shlokaStyle: React.CSSProperties = {
    fontFamily: "Samarkan",
    fontSize: "112px",
    wordSpacing: "-8px",
};

const Header = (props: any): JSX.Element => {
    const isPhone = useMediaQuery("(max-width: 1080px)");
    const isTab = useMediaQuery("(max-width: 1560px)");

    return (
        <header style={headerStyle} ref={props.m_ref}>
            <img
                alt="Header Background"
                src={isPhone ? background_img_smol : background_img}
                style={{
                    position: "absolute",
                    width: "100%",
                    objectFit: "cover",

                    left: "auto",
                    right: "auto",
                    top: isPhone ? 0 : isTab ? 0 : -330,
                    bottom: 0,
                    zIndex: -1,
                }}
            ></img>
            <p style={shlokaStyle}>vidya dadati vinayam</p>
            <button
                className="app-link app-link--filled medium-link"
                onClick={props.onClickActivities}
            >
                Activities
            </button>
            <div style={{ height: "10%" }}></div>
        </header>
    );
};

export default Header;
