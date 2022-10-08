import React, { useEffect, useRef, useState } from "react";
import background_img from "../assets/images/tac-top-shapes.svg";
import Appreciations from "../components/Appreciations";
import Drawer from "../components/Drawer";
import Activities from "../components/Activities";
import HomePageBanner from "../containers/HomePageBanner";
import Footer from "../components/Footer";
import "../styles/anchor_style.css";

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
    fontSize: "96px",
    wordSpacing: "-14px",
};

const HomePage = (props: any): JSX.Element => {
    let [isDrawerVisible, setIsDrawerVisible] = useState(false);
    let activitiesSectionRef = useRef<HTMLElement>();

    return (
        <React.Fragment>
            <header style={headerStyle}>
                <img src={background_img} style={headerImgStyle}></img>
                <div style={headerHeadStyle}>
                    <a
                        className="app-link medium-link"
                        onClick={() => setIsDrawerVisible(!isDrawerVisible)}
                    >
                        ☰ MENU
                    </a>
                    <h1 className="main-header">PS Gopalpur</h1>
                    <a
                        className="app-link medium-link"
                        onClick={() => {
                            console.log(activitiesSectionRef.current);
                            activitiesSectionRef.current?.scrollIntoView();
                        }}
                    >
                        ACTIVITIES
                    </a>
                </div>

                <p style={shlokaStyle}>vidya dadati vinayam</p>
                <a className="app-link app-link--filled medium-link">
                    ENROLL NOW
                </a>
                <div style={{ height: "10%" }}></div>
            </header>
            <Drawer
                visible={isDrawerVisible}
                onClose={() => setIsDrawerVisible(false)}
            />
            <Activities m_ref={activitiesSectionRef} />
            <Appreciations />
            <HomePageBanner />
            <Footer />
        </React.Fragment>
    );
};

export default HomePage;
