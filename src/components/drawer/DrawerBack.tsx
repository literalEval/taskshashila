const DrawerBack = (props: any): JSX.Element => {
    return (
        <section
            style={{
                width: "100vw",
                height: "100vh",
                
                zIndex: 4,
                position: "absolute",
                left: 0,
                top: 0,
            }}
            onClick={props.onClick}
        ></section>
    );
};

export default DrawerBack;
