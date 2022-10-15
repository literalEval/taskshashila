import "./App.css";
import AppCtxProvider from "./context/AppCtxProvider";
import HomePage from "./pages/home_page/HomePage";

function App() {
    return (
        <div className="App">
            <AppCtxProvider>
                <HomePage />
            </AppCtxProvider>
        </div>
    );
}

export default App;
