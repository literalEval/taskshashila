import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/misc.css";
import AppContext from "../context/app_context";

const Quote = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <div
            style={{
                width: isPhone ? "90%" : props.longText ? "50%" : "40%",
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
                longText={props.longText}
            ></Quote>
        </div>
    );
};

const MCarousel = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <Carousel style={{ ...props.style }}>
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
                            longText={props.longText ?? false}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default MCarousel;
