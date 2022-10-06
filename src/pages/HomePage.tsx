import React from "react";
import dep_logo from "../assets/images/dep_logo_new.svg";
import background_img from "../assets/images/tac-top-shapes.svg";
import Appreciations from "../components/Appreciations";
import "../styles/anchor_style.css";

const headerStyle: React.CSSProperties = {
    position: "relative",
    height: "120vh",

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
    height: "100%",

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
};

const shlokaStyle: React.CSSProperties = {
    fontSize: "400%",
    fontWeight: "lighter"
};

const aboutUsStyle: React.CSSProperties = {
    height: "100vh",
};

const footerStyle: React.CSSProperties = {
    height: "35vh",
    backgroundColor: "black",
    color: "white",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
    return (
        <React.Fragment>
            <header style={headerStyle}>
                <img src={background_img} style={headerImgStyle}></img>
                <div style={headerHeadStyle}>
                    <a className="app-link medium-link">Home</a>
                    <h2 className="main-header">PRIMARY SCHOOL GOPALPUR</h2>
                    <a className="app-link medium-link">Enroll Now</a>
                </div>
                <h1 style={shlokaStyle}>
                    विद्या प्रशस्यते लोकैः विद्या सर्वत्र गौरवा। <br></br>
                    विद्यया लभते सर्वं विद्वान सर्वत्र पूज्यते।।<br></br>
                </h1>
            </header>
            <section style={aboutUsStyle}></section>
            <Appreciations></Appreciations>
            <footer style={footerStyle}>
                <div style={logoStyle}></div>
                <div className="address-block" style={addressBlockStyle}>
                    <span>
                        Addr: &nbsp;
                        <a
                            className="address-link"
                            href="https://goo.gl/maps/MCRHtueWwg5PidBs5"
                        >
                            Ward No - 20, Gopal Nagar (Gopalpur)<br></br> Hata,
                            Kushinagar<br></br> Uttar Pradesh, 274203
                        </a>
                    </span>
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
                    <p>Pintoo Dubey: +91 9839525231</p>
                    <p>Sarita Vaishya: +91 7398290820</p>
                    <p>Preeti Tiwari: +91 9454264015</p>
                </div>
            </footer>
            <div style={madeByStyle}>
                Made with ❤ by &nbsp;<a>Ravidev Pandey</a>
            </div>
        </React.Fragment>
    );
};

export default HomePage;
