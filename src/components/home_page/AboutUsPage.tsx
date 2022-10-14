import school_logo from "../../assets/images/IIT_BHU.jpg";

const AboutUsPage = (): JSX.Element => {
    return (
        <section
            style={{
                height: "100vh",
                // overflow: "scroll",

                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",

                backgroundColor: "#F1EEE8",
            }}
        >
            <img
                alt="school_image"
                src={school_logo}
                style={{ width: "40%", height: "auto" }}
            />
            <p style={{ width: "40%", fontSize: "larger" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium vel enim similique laborum? Aliquid doloribus amet
                architecto debitis beatae quae accusamus, corporis sed vero,
                laboriosam vitae laudantium quidem esse? Aspernatur. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Consequatur soluta
                repudiandae in expedita ipsum alias quaerat sit repellat ratione
                enim culpa atque tempora autem, vel veritatis repellendus? Nisi,
                iste at. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi ipsum reiciendis doloremque incidunt, pariatur
                ratione veniam consequuntur ad recusandae beatae, esse at harum
                quibusdam in sapiente est quam consequatur totam.
            </p>
        </section>
    );
};

export default AboutUsPage;
