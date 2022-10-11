import backgroundImg from "../../assets/images/parties-events.svg";
import "../../styles/input_style.css";

const LoginPage = (): JSX.Element => {
    return (
        <section
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#F1EEE8",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${backgroundImg})`,
                backgroundPositionX: "center",
                backgroundPositionY: "center",
                backgroundSize: "70% auto",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1 style={{ fontSize: "76px" }}>Admin Login</h1>
                <div style={{ height: "5vh" }}></div>
                <input
                    className="app-input-line"
                    type="string"
                    inputMode="email"
                    placeholder="Email"
                />
                <input
                    className="app-input-line"
                    type="password"
                    placeholder="Password"
                />
                <div style={{ height: "5vh" }}></div>
                <button className="app-link">Login</button>
            </div>
        </section>
    );
};

export default LoginPage;
