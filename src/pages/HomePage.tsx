import React, { useEffect, useRef, useState } from "react";
import dep_logo from "../assets/images/dep_logo_new.svg";
import background_img from "../assets/images/tac-top-shapes.svg";
import Appreciations from "../components/Appreciations";
import Drawer from "../components/Drawer";
import ActivitiesSection from "../components/ActivitiesSection";
import "../styles/anchor_style.css";
import HomePageBanner from "../containers/HomePageBanner";

const headerStyle: React.CSSProperties = {
    position: "relative",
    height: "100vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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

const footerStyle: React.CSSProperties = {
    height: "35vh",
    backgroundColor: "black",
    color: "white",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundAttachment: "fixed",
};

const logoStyle: React.CSSProperties = {
    backgroundImage: `url(${dep_logo})`,
    backgroundSize: "100% 100%",
    width: "25vh",
    height: "25vh",
};

const madeByStyle: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const addressBlockStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",

    color: "white",
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
                        = MENU
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
                {/* fc|kk nnkfr fcuea */}
                {/* <h1 style={shlokaStyle}>विद्यां ददाति विनयं</h1> */}
                {/* Shusha */}
                {/* <h1 style={shlokaStyle}>ivaVa ddait ivanayaM</h1> */}

                {/* Pankaj */}
                {/* <p style={shlokaStyle}>fc|kk nnkfr fcuea</p> */}

                {/* Samarkan */}
                <p style={shlokaStyle}>vidya dadati vinayam</p>
                <a className="app-link app-link--filled medium-link">
                    ENROLL NOW
                </a>
                <div style={{ height: "10%" }}></div>
            </header>
            <Drawer
                visible={isDrawerVisible}
                onClose={() => setIsDrawerVisible(false)}
            ></Drawer>
            <ActivitiesSection m_ref={activitiesSectionRef}></ActivitiesSection>
            <Appreciations></Appreciations>
            <footer style={footerStyle}>
                <div style={logoStyle}></div>
                <div className="address-block" style={addressBlockStyle}>
                    <p>
                        Addr: &nbsp;
                        <a
                            className="address-link"
                            href="https://goo.gl/maps/MCRHtueWwg5PidBs5"
                        >
                            Ward No - 20, Gopal Nagar (Gopalpur)<br></br> Hata,
                            Kushinagar<br></br> Uttar Pradesh, 274203
                        </a>
                    </p>
                    <p>
                        Email:&nbsp;
                        <a
                            className="address-link"
                            href="mailto://ppgopalpurhata@gmail.com"
                            target="_blank"
                        >
                            ppgopalpurhata@gmail.com
                        </a>
                    </p>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <span>Pintoo Dubey: +91 9839525231</span>
                    <br></br>
                    <span>Sarita Vaishya: +91 7398290820</span>
                    <br></br>
                    <span>Preeti Tiwari: +91 9454264015</span>
                </div>
            </footer>
            <div style={madeByStyle}>
                Made with ❤ by &nbsp;<a>Ravidev Pandey</a>
            </div>
            <HomePageBanner />
        </React.Fragment>
    );
};

export default HomePage;
