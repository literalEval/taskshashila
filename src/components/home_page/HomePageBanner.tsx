import { useEffect, useRef, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

import "../../styles/misc.css";

const HomePageBanner = (): JSX.Element => {
    let selfRef = useRef<HTMLElement>(null);
    let [shouldShow, setShouldShow] = useState(true);
    let [selfHeight, setSelfHeight] = useState(0);
    let scrollPos = useScrollPosition();

    useEffect(() => {
        if (!shouldShow && window.scrollY === 0) {
            setShouldShow(true);
        }

        if (shouldShow && window.scrollY !== 0) {
            setShouldShow(false);
        }
    }, [scrollPos, shouldShow]);

    useEffect(() => {
        if (selfRef.current) {
            setSelfHeight(window.innerHeight - selfRef.current?.clientHeight);
        } else {
            setSelfHeight(window.innerHeight * 0.87);
        }
    }, [shouldShow]);

    return (
        <section
            ref={selfRef}
            className={`home_page_banner home_page_banner--${
                shouldShow ? "show" : "hide"
            }`}
            style={{
                width: "100%",
                height: "auto",

                fontSize: "1.8rem",
                backgroundColor: "black",
                color: "white",

                padding: "0.8rem 0%",
                position: "absolute",
                top: `${selfHeight}px`,
                zIndex: "4",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            We are still enrolling for the Fall 2022 semester of After School
            Classes! Register today while we still have spots in all classes.
        </section>
    );
};

export default HomePageBanner;
