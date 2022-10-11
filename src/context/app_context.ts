import { createContext } from "react";

const AppContext = createContext({
    pageNumber: 0,
    setPageNumber: function (newPage: number): void {}
});

export default AppContext;