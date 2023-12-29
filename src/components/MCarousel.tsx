import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/misc.css";
import AppContext from "../context/app_context";

const Quote = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <div
            style={{
                width: isPhone ? "90%" : "40%",
                height: "100%",
                padding: "3% 5% 3% 5%",
                translate: isPhone ? "0 -5%" : "0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end",

                color: "white",
                fontSize: "1.8rem",
            }}
        >
            <blockquote style={{ fontSize: "larger" }}>
                &ldquo; {props.authQuote} &rdquo;
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
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <div
            style={{
                backgroundColor: props.color,
                height: isPhone ? "auto" : "50vh",
                width: "100%",
                margin: "auto",

                display: "flex",
                flexDirection: isPhone ? "column" : "row",
                alignItems: "center",
                justifyContent: "space-around",

                borderRadius: "12px",
                padding: isPhone ? "2rem 0" : "auto",
            }}
        >
            <img
                alt="Expert"
                src={props.authImg}
                style={{
                    width: isPhone ? "70%" : "35%",
                    transform: isPhone ? "translate(0%, -10%)" : "",
                    height: "auto",
                    overflow: "visible",
                    borderRadius: "12px",
                }}
            ></img>
            <Quote
                authName={props.authName}
                authDesignation={props.authDesignation}
                authQuote={props.authQuote}
            ></Quote>
        </div>
    );
};

const MCarousel = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <Carousel
            style={{
                width: isPhone ? "110%" : "120%",
                translate: isPhone ? "-5% 0" : "-10% 0",
            }}
        >
            {props.items.map((item: any) => {
                return (
                    <Carousel.Item>
                        <Highlight
                            className=""
                            color={item.color}
                            authName={item.authName}
                            authDesignation={item.authDesignation}
                            authImg={item.authImg}
                            authQuote={item.authQuote}
                        />
                    </Carousel.Item>
                );
            })}
            {/* <Carousel.Item>
                    <Highlight
                        className=""
                        color="#a5352b"
                        authName="Smt. Reeta Gupta"
                        authDesignation="Block Education Officer"
                        authImg={varsh}
                        authQuote={
                            "यह विद्यालय हाटा ब्लॉक के श्रेष्ठ विद्यालयों में से एक " +
                            "है। यहां अध्यापकों द्वारा बच्चों के सर्वांगीण विकास हेतु " +
                            "कई प्रकार के नवाचार किए जाते है। मैं समस्त विद्यालय " +
                            "परिवार को बच्चों के उन्नयन हेतु उच्च स्तरीय प्रयास के " +
                            "लिए हार्दिक शुभकामनाएं देती हूं।"
                        }
                    />
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
                </Carousel.Item> */}
        </Carousel>
    );
};

export default MCarousel;
