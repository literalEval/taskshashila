const AppModal = (): JSX.Element => {
    return (
        <section
            onScroll={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(40, 40, 40, 0.8)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                zIndex: 100,
                position: "fixed",
                left: 0,
                top: 0,
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    width: "30vw",
                    height: "30vw",
                    borderRadius: "1vw",
                }}
            ></div>
        </section>
    );
};

export default AppModal;
