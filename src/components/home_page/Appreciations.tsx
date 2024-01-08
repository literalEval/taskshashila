import { useContext } from "react";

import AppContext from "../../context/app_context";
import srg from "../../assets/images/srg.jpg";
import nps from "../../assets/images/nps.jpeg";
import rap from "../../assets/images/rap.jpeg";
import vks from "../../assets/images/vks.jpeg";
import MCarousel from "../MCarousel";

const Appreciations = (): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <section
            style={{
                height: isPhone ? "auto" : "100vh",
                padding: `4% ${isPhone ? "10%" : "20%"} ${
                    isPhone ? "20%" : "4%"
                } ${isPhone ? "10%" : "20%"}`,

                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <h1 style={{ fontSize: "9.6rem" }}>Expert's Views</h1>
            <div style={{ height: "14vh" }}></div>$
            <MCarousel
                style={{
                    width: isPhone ? "110%" : "120%",
                    translate: isPhone ? "-5% 0" : "-10% 0",
                }}
                items={[
                    {
                        color: "#a5352b",
                        authName: "Smt. Reeta Gupta",
                        authDesignation: "Block Education Officer",
                        authImg: srg,
                        authQuote:
                            "यह विद्यालय हाटा ब्लॉक के श्रेष्ठ विद्यालयों में से एक " +
                            "है। यहां अध्यापकों द्वारा बच्चों के सर्वांगीण विकास हेतु " +
                            "कई प्रकार के नवाचार किए जाते है। मैं समस्त विद्यालय " +
                            "परिवार को बच्चों के उन्नयन हेतु उच्च स्तरीय प्रयास के " +
                            "लिए हार्दिक शुभकामनाएं देती हूं।",
                    },
                    {
                        color: "#917e1f",
                        authName: "Mr. Nipendra Kumar Singh",
                        authDesignation: "ARP (Hindi), Hata",
                        authImg: nps,
                        authQuote:
                            "जब भी सुपरविजन में विद्यालय जाता हूँ, बच्चों की शैक्षणिक " +
                            "गुणवत्ता देखकर मन प्रसन्न हो जाता है। पिंटू दुबे जी का " +
                            "बच्चों के प्रति लगाव व उन्हें कुछ नया देने का प्रयास काबिलेतारीफ है। ",
                    },
                    {
                        color: "#3e76ac",
                        authName: "Mr. Ram Aasheesh Prajapati",
                        authDesignation: "ARP (S. St.), Hata",
                        authImg: rap,
                        authQuote:
                            "वर्ष २०१५-१६ से नियुक्त पिंटू दुबे व प्रीती तिवारी की कड़ी " +
                            "मेहनत के बदौलत विद्यालय में बच्चों का नामांकन अप्रत्याशित " +
                            "रूप से बढ़ा है। बच्चों का अनुशाशन इस विद्यालय की पहचान है।",
                    },
                    {
                        color: "#3e76ac",
                        authName: "Mr. Vinod Kumar Sharma",
                        authDesignation: "ARP (Science), Hata",
                        authImg: vks,
                        authQuote:
                            "हाटा ब्लॉक के श्रेष्ठ विद्यालयों में शामिल यह विद्यालय अपने " +
                            "स्थापना वर्ष से नए नए कीर्तिमान स्थापित करता आ रहा है। " +
                            "विद्यालय के अध्यापक पिंटू दुबे जी का बच्चों के लगाव प्रशंशनीय है। ",
                    },
                ]}
            ></MCarousel>
        </section>
    );
};

export default Appreciations;
