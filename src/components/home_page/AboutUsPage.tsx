import school_logo from "../../assets/images/IIT_BHU.jpg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const AboutUsPage = (): JSX.Element => {
    const isPhone = useMediaQuery("(max-width: 1080px)");

    return (
        <section
            style={{
                height: isPhone ? "auto" : "100vh",

                display: "flex",
                flexDirection: isPhone ? "column" : "row",
                justifyContent: "space-around",
                alignItems: "center",
                margin: isPhone ? "12vh 0 0vh 0" : "6vh 0",

                backgroundColor: "#F1EEE8",
            }}
        >
            <img
                alt="school_image"
                src={school_logo}
                style={{ width: isPhone ? "80%" : "40%", height: "auto" }}
            />
            <div style={{ height: "5vh" }} />
            <p style={{ width: isPhone ? "90%" : "40%", fontSize: "2.4rem" }}>
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
            <div style={{ height: "6vh" }} />
        </section>
    );
};

export default AboutUsPage;
