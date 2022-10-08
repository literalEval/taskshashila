import "../../styles/anchor_style.css";

const GoToTopButton = (props: any): JSX.Element => {
    return (
        <div
            className="top-button"
            onClick={props.onClick}
            style={{
                position: "fixed",
                right: "3vw",
                bottom: "3vw",

                zIndex: "4",
                opacity: props.show ? "100%" : "0%",
                fontSize: "42px",
                color: "black !important",
            }}
        >
            <i
                className="fa-solid fa-circle-up"
                style={{ cursor: "pointer" }}
            ></i>
        </div>
    );
};

export default GoToTopButton;
