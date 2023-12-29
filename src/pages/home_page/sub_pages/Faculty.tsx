import React from "react";
import Carousel from "react-bootstrap/Carousel";

import varsh from "../../../assets/images/varsh.jpg";
import upsc from "../../../assets/images/img.jpg";
import eskimo from "../../../assets/images/eskimo.jpg";
import "../../../styles/misc.css";

const Quote = (props: any): JSX.Element => {
    return (
        <div
            style={{
                width: "40%",
                height: "100%",
                padding: "3% 5% 3% 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end",

                color: "white",
                fontSize: "22px",
            }}
        >
            <blockquote style={{ fontSize: "larger" }}>
                &ldquo; Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Iste, delectus ut aliquid officia, minus iure porro ex
                esse consequatur magni, autem nihil error quibusdam atque maxime
                tenetur tempora doloremque consequuntur.&rdquo;
            </blockquote>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                }}
            >
                <p style={{ padding: "0px", margin: "0px" }}>
                    {props.authName}
                </p>
                <p style={{ fontSize: "smaller" }}>{props.authDesignation}</p>
            </div>
        </div>
    );
};

const Highlight = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
                height: "48vh",
                width: "100%",
                margin: "auto",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",

                borderRadius: "12px",
            }}
        >
            <img
                alt="Faculty"
                src={props.authImg}
                style={{
                    width: "35%",
                    height: "auto",
                    overflow: "visible",
                    borderRadius: "12px",
                }}
            ></img>
            <Quote
                authName={props.authName}
                authDesignation={props.authDesignation}
            ></Quote>
        </div>
    );
};

const Faculty = (): JSX.Element => {
    return (
        <section
            style={{
                height: "100vh",
                padding: "10% 10% 0% 10%",

                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            {/* <h1 style={{ fontSize: "96px", textDecoration: "underline" }}>
                Our Faculty
            </h1> */}
            <div style={{ height: "5vh" }}></div>
            {/* <div
                style={{
                    backgroundColor: "black",
                    width: "100%",
                    height: "4px",
                }}
            ></div> */}
            <div style={{ height: "5vh" }}></div>
            <Carousel style={{ width: "86%", translate: "7% 0" }}>
                <Carousel.Item>
                    <Highlight
                        className=""
                        color="#a5352b"
                        authName="Pranshu Varshney"
                        authDesignation="Chemical Engineer"
                        authImg={varsh}
                    >
                        We love Trendyol orange
                    </Highlight>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight
                        className=""
                        color="#917e1f"
                        authName="Prakhar Dubey"
                        authDesignation="Former Eskimo"
                        authImg={eskimo}
                    >
                        This is our github
                    </Highlight>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight
                        className=""
                        color="#3e76ac"
                        authName="Ravishankar Pandey"
                        authDesignation="UPSC Aspirant"
                        authImg={upsc}
                    >
                        We love Trendyol green
                    </Highlight>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Faculty;
