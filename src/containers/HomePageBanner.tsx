import { useEffect, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

import "../styles/misc.css";

const HomePageBanner = (): JSX.Element => {
    let [shouldShow, setShouldShow] = useState(true);
    let scrollPos = useScrollPosition();

    useEffect(() => {
        if (!shouldShow && window.scrollY == 0) {
            setShouldShow(true);
        }

        if (shouldShow && window.scrollY != 0) {
            setShouldShow(false);
        }
    }, [scrollPos]);

    return (
        <section
            className={`home_page_banner home_page_banner--${shouldShow ? "show" : "hide"}`}
            style={{
                width: "100%",
                height: "6vh",
                backgroundColor: "black",
                color: "white",

                position: "absolute",
                top: "94vh",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            We are still enrolling for the Fall 2022 semester of After School
            Classes! Register today while we still have spots in all classes.
        </section>
    );
};

export default HomePageBanner;
