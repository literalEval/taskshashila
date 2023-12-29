import { useState } from "react";
import AppContext, { ScreenType } from "./app_context";

const AppCtxProvider = (props: any): JSX.Element => {
    let [pageNumber, setPageNumber] = useState(0);
    let [screenType, setScreenType] = useState(ScreenType);
    let [showGallery, setShowGallery] = useState(false);
    let [currentGalleryImg, setCurrentGalleryImg] = useState("");

    return (
        <AppContext.Provider
            value={{
                pageNumber: pageNumber,
                setPageNumber: setPageNumber,
                screenType: screenType,
                setScreenType: setScreenType,
                showGallery: showGallery,
                setShowGallery: setShowGallery,
                currentGalleryImg: currentGalleryImg,
                setCurrentGalleryImg: setCurrentGalleryImg,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppCtxProvider;
