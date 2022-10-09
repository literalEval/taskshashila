import "../styles/page_switch.css";

const PageSwitch = (): JSX.Element => {
    return (
        <div
            className="page-switch"
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "#ED4E41",

                position: "absolute",
                left: "-100vw",
                top: "0",

                zIndex: 4,
            }}
        ></div>
    );
};

export default PageSwitch;
