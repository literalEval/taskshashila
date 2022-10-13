import { useContext, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import backgroundImg from "../../assets/images/parties-events.svg";
import AppContext from "../../context/app_context";
import "../../styles/input_style.css";
import tryFirebaseLogin from "./login_page";

const LoginPage = (): JSX.Element => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const appCtx = useContext(AppContext);

    let [isLoggingIn, setIsLogginIn] = useState(false);
    let [invalidCreds, setInvalidCreds] = useState(false);

    const tryLogin = (): void => {
        setIsLogginIn(true);
        console.log(emailRef.current?.value, passRef.current?.value);

        tryFirebaseLogin(emailRef.current?.value, passRef.current?.value)
            .then((result: boolean) => {
                console.log("Login", appCtx.pageNumber);
                setInvalidCreds(!result);
                setIsLogginIn(false);
            })
            .catch((e) => {
                console.log(e);
                setInvalidCreds(true);
                setIsLogginIn(false);
            });
    };

    const inputOnFocus = (): void => {
        setInvalidCreds(false);
    };

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
                    ref={emailRef}
                    onFocus={inputOnFocus}
                    className={`app-input-line ${
                        invalidCreds ? "invalidCreds" : ""
                    }`}
                    type="string"
                    inputMode="email"
                    placeholder="Email"
                />
                <input
                    ref={passRef}
                    onFocus={inputOnFocus}
                    className={`app-input-line ${
                        invalidCreds ? "invalidCreds" : ""
                    }`}
                    type="password"
                    placeholder="Password"
                />
                <div style={{ height: "5vh" }}>
                    <p
                        style={{
                            height: invalidCreds ? "100%" : "0%",
                            overflow: "clip",
                        }}
                    >
                        Invalid Email/Password
                    </p>
                </div>
                <button onClick={tryLogin} className="app-link app-link--login">
                    &nbsp;
                    {isLoggingIn ? <Spinner animation="border" /> : "Login"}
                    &nbsp;
                </button>
            </div>
        </section>
    );
};

export default LoginPage;
