import "../styles/page_switch.css";

const colors = ["#EC483D", "#F0CE2E", "#4C93D7", "#43AA5A", "#E991A5"];
const getColor = (): string => {
    return colors[Math.floor(Math.random() * 4)];
};

const PageSwitch = (props: any): JSX.Element => {
    return (
        <div
            className="page-switch"
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: props.backgroundColor,

                position: "fixed",
                left: "-100vw",
                top: "0",

                zIndex: 4,
            }}
        ></div>
    );
};

export default PageSwitch;
export {getColor};