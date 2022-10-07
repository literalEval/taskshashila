import React from "react";

import greenBack from "../assets/images/after-school-art.svg";
import pinkBack from "../assets/images/all-day-art.svg";
import yellowBack from "../assets/images/summer-camp.svg";

const Program = (props: any): JSX.Element => {
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
                    zIndex: -1,
                    width: "65%",
                    height: "auto",
                }}
            ></img>

            <h1>{props.heading}</h1>
            <a className="app-link medium-link">Learn More</a>
        </div>
    );
};

const ProgramsSection = (): JSX.Element => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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

                    padding: "8% 0% 1% 0%",
                }}
            >
                <Program heading="Summer Camp" src={yellowBack}></Program>
                <Program heading="Bal Sabha" src={pinkBack}></Program>
                <Program heading="Plantation" src={greenBack}></Program>
            </div>
        </section>
    );
};

export default ProgramsSection;
