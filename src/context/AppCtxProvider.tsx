import { useState } from "react";
import AppContext from "./app_context";

const AppCtxProvider = (props: any): JSX.Element => {
    let [pageNumber, setPageNumber] = useState(0);

    return (
        <AppContext.Provider
            value={{ pageNumber: pageNumber, setPageNumber: setPageNumber }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppCtxProvider;
