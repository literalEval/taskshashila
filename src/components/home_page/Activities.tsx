import React from "react";

import greenBack from "../../assets/images/after-school-art.svg";
import pinkBack from "../../assets/images/all-day-art.svg";
import yellowBack from "../../assets/images/summer-camp.svg";

const Activity = (props: any): JSX.Element => {
    return (
        <div
            style={{
                width: "25%",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",

                position: "relative",
            }}
        >
            <img
                src={props.src}
                style={{
                    position: "absolute",
                    zIndex: 0,
                    width: "65%",
                    height: "auto",
                }}
            ></img>

            <h1 style={{ zIndex: 1 }}>{props.heading}</h1>
            <a className="app-link medium-link" style={{ zIndex: 1 }}>
                Learn More
            </a>
        </div>
    );
};

const Activities = (props: any): JSX.Element => {
    return (
        <section
            ref={props.m_ref}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                padding: "6% 0% 0% 4%",
                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <h1 style={{ fontSize: "76px" }}>Activities</h1>
            <h2 style={{ width: "40%" }}>
                We offer classes for all ages throughout the year. If you don't
                see the perfect class, we'll start one!
            </h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",

                    padding: "12% 0% 1% 0%",
                }}
            >
                <Activity heading="Summer Camp" src={yellowBack}></Activity>
                <Activity heading="Bal Sabha" src={pinkBack}></Activity>
                <Activity heading="Plantation" src={greenBack}></Activity>
            </div>
        </section>
    );
};

export default Activities;
