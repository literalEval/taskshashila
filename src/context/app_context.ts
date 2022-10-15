import { createContext } from "react";

const ScreenType = {
    phone: false,
    tablet: false,
    laptop: false,
};

const AppContext = createContext({
    pageNumber: 0,
    setPageNumber: function (newPage: number): void {},
    screenType: ScreenType,
    setScreenType: function (screenType: {
        phone: boolean;
        tablet: boolean;
        laptop: boolean;
    }): void {},
});

export { ScreenType };
export default AppContext;
