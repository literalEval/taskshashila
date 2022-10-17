import { useContext } from "react";
import "../../styles/activities.css";

import greenBack from "../../assets/images/after-school-art.svg";
import pinkBack from "../../assets/images/all-day-art.svg";
import yellowBack from "../../assets/images/summer-camp.svg";
import AppContext from "../../context/app_context";

const Activity = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <div
            style={{
                width: isPhone ? "70%" : "25%",
                height: "12rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",

                position: "relative",
            }}
        >
            <img
                alt="activity"
                className="activity-img"
                src={props.src}
                style={{
                    position: "absolute",
                    zIndex: 0,
                    width: "65%",
                    height: "auto",
                }}
            ></img>

            <h1
                style={{
                    fontSize: "6.4rem",
                    textAlign: "center",
                    maxWidth: isPhone ? "100%" : "80%",
                    padding: "5% 0%",
                    zIndex: 1,
                }}
            >
                {props.heading}
            </h1>
            <button className="app-link medium-link" style={{ zIndex: 1 }}>
                Learn More
            </button>
        </div>
    );
};

const Activities = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <section
            ref={props.m_ref}
            style={{
                height: isPhone ? "auto" : "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                padding: "10% 0% 0% 4%",
                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <h1 style={{ fontSize: "9.6rem" }}>Activities</h1>
            <h2 style={{ width: isPhone ? "80%" : "40%", fontSize: "2.8rem" }}>
                We offer classes for all ages throughout the year. If you don't
                see the perfect class, we'll start one!
            </h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: isPhone ? "column" : "row",
                    justifyContent: "space-around",
                    alignItems: "center",

                    padding: "12% 0% 1% 0%",
                }}
            >
                {isPhone && <div style={{ height: "4vh" }} />}
                <Activity heading="Summer Camp" src={yellowBack}></Activity>
                {isPhone && <div style={{ height: "16vh" }} />}
                <Activity heading="Bal Sabha" src={pinkBack}></Activity>
                {isPhone && <div style={{ height: "16vh" }} />}
                <Activity heading="Plantation" src={greenBack}></Activity>
                {isPhone && <div style={{ height: "14vh" }} />}
            </div>
        </section>
    );
};

export default Activities;
