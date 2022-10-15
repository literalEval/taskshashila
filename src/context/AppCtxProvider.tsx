import { useState } from "react";
import AppContext, { ScreenType } from "./app_context";

const AppCtxProvider = (props: any): JSX.Element => {
    let [pageNumber, setPageNumber] = useState(0);
    let [screenType, setScreenType] = useState(ScreenType);

    return (
        <AppContext.Provider
            value={{
                pageNumber: pageNumber,
                setPageNumber: setPageNumber,
                screenType: screenType,
                setScreenType: setScreenType,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppCtxProvider;
