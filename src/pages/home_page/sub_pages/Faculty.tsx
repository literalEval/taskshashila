import { useContext } from "react";

import sarita from "../../../assets/images/sarita.jpg";
import preeti from "../../../assets/images/preeti.jpg";
import pintoo from "../../../assets/images/pintoo.jpg";

import "../../../styles/misc.css";
import AppContext from "../../../context/app_context";
import MCarousel from "../../../components/MCarousel";

const Faculty = (): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <section
            style={{
                height: isPhone ? "auto" : "100vh",
                width: "100%",
                padding: `4% ${isPhone ? "10%" : "20%"} ${
                    isPhone ? "20%" : "4%"
                } ${isPhone ? "10%" : "20%"}`,

                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <div style={{ height: "14vh" }}></div>
            <MCarousel
                style={{ whiteSpace: "pre-line" }}
                longText={true}
                items={[
                    {
                        color: "#a5352b",
                        authName: "Smt. Sarita Vaishya",
                        authDesignation: "Head Master",
                        authImg: sarita,
                        authQuote:
                            "Intermediate - Shri Gandhi Smarak Inter College, Hata\n" +
                            "Grad/Post Grad - DDU, Gorakhpur\n" +
                            "B. Ed. - DDU, Gorakhpur",
                    },
                    {
                        color: "#917e1f",
                        authName: "Mr Pintoo Dubey",
                        authDesignation: "Assistant Teacher",
                        authImg: pintoo,
                        authQuote:
                            "Intermediate - Shri Gandhi Smarak Inter College, Hata\n" +
                            "Grad/Post Grad - Buddha P.G. College, Kushinagar\n" +
                            "B. Ed. - DDU, Gorakhpur",
                    },
                    {
                        color: "#3e76ac",
                        authName: "Smt. Preeti",
                        authDesignation: "Assistant Teacher",
                        authImg: preeti,
                        authQuote:
                            "Intermediate - KPC, Kashipur\n" +
                            "Grad. - Radhe Hari P.G. Gov. College\n" +
                            "Post Grad. - Kumayun University\n" +
                            "B. Ed. - Subharati University, Merath",
                    },
                ]}
            ></MCarousel>
        </section>
    );
};

export default Faculty;
