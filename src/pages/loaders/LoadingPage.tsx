import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
    return (
        <section
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#F1EEE8",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Spinner
                style={{ width: "8rem", height: "8rem" }}
                animation="border"
            />
        </section>
    );
};

export default LoadingPage;
