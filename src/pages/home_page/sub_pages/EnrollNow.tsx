import "../../../styles/anchor_style.css";

const EnrollNow = (): JSX.Element => {
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
            }}
        >
            <h4>Please contact any of the given numbers for enrollment</h4>
            <div>
                <span>Pintoo Dubey: +91 9839525231</span>
                <br></br>
                <span>Sarita Vaishya: +91 7398290820</span>
                <br></br>
                <span>Preeti Tiwari: +91 9454264015</span>
            </div>
        </section>
    );
};

export default EnrollNow;
