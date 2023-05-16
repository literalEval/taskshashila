import { useContext } from "react";
import AppContext from "../../context/app_context";

import "../../styles/gallery_style.css";

const SlideButton = (props: any) => {
    return (
        <div
            className="slide-button"
            style={{
                fontSize: "2.4rem",
                maxWidth: "6%",
                width: "4vw",
                height: "4vw",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderRadius: "696969px",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {props.children}
        </div>
    );
};

const GalleryModal = (props: any) => {
    const appCtx = useContext(AppContext);

    return (
        <div
            style={{
                position: "fixed",
                left: "0px",
                top: "0px",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.8)",

                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",

                zIndex: "696969",
            }}
        >
            <SlideButton>
                <i className="fa-solid fa-angle-left" />
            </SlideButton>
            <img
                height={"90%"}
                alt="school"
                src={appCtx.currentGalleryImg}
            ></img>
            <SlideButton>
                <i className="fa-solid fa-angle-right" />
            </SlideButton>
        </div>
    );
};

export default GalleryModal;
