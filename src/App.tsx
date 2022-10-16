import React, { Suspense } from "react";
import "./App.css";
import AppCtxProvider from "./context/AppCtxProvider";
import LoadingPage from "./pages/loaders/LoadingPage";
const HomePage = React.lazy(() => import("./pages/home_page/HomePage"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<LoadingPage />}>
                <AppCtxProvider>
                    <HomePage />
                </AppCtxProvider>
            </Suspense>
        </div>
    );
}

export default App;
