import React from "react";
import Carousel from "react-bootstrap/Carousel";

import authImg from "../assets/images/img.jpg";
import "../styles/misc.css";

const Quote = (): JSX.Element => {
    return (
        <div
            style={{
                width: "35%",
                height: "100%",
                padding: "3% 5% 3% 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end",

                color: "white",
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
                    Ravishankar Pandey
                </p>
                <p style={{ fontSize: "small" }}>UPSC Aspirant</p>
            </div>
        </div>
    );
};

const Highlight = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
                height: "50vh",
                width: "100%",
                margin: "auto",
                overflow: "visible !important",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",

                borderRadius: "12px",
            }}
        >
            <img
                src={authImg}
                style={{
                    width: "40%",
                    height: "auto",
                    overflow: "visible",
                }}
            ></img>
            <Quote></Quote>
        </div>
    );
};

const sectionStyle: React.CSSProperties = {
    height: "auto",
    padding: "10% 20%",

    backgroundColor: "#f1eee8",
    // backgroundColor: "red",
    zIndex: 2,
};

const Appreciations = (): JSX.Element => {
    return (
        <section style={sectionStyle}>
            <h1 style={{ fontSize: "76px" }}>Expert's Views</h1>
            <div style={{ height: "8vh" }}></div>
            <Carousel style={{ width: "120%", translate: "-10% 0" }}>
                <Carousel.Item>
                    <Highlight className="" color="#a5352b">
                        We love Trendyol orange
                    </Highlight>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight className="" color="#917e1f">
                        This is our github
                    </Highlight>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight className="" color="#3e76ac">
                        We love Trendyol green
                    </Highlight>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Appreciations;
