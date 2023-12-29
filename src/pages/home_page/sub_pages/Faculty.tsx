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
                padding: `4% ${isPhone ? "10%" : "20%"} ${
                    isPhone ? "20%" : "4%"
                } ${isPhone ? "10%" : "20%"}`,

                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <div style={{ height: "14vh" }}></div>
            <MCarousel
                items={[
                    {
                        color: "#a5352b",
                        authName: "Smt. Sarita Vaishya",
                        authDesignation: "Head Master",
                        authImg: sarita,
                        authQuote:
                            "यह विद्यालय हाटा ब्लॉक के श्रेष्ठ विद्यालयों में से एक " +
                            "है। यहां अध्यापकों द्वारा बच्चों के सर्वांगीण विकास हेतु " +
                            "कई प्रकार के नवाचार किए जाते है। मैं समस्त विद्यालय " +
                            "परिवार को बच्चों के उन्नयन हेतु उच्च स्तरीय प्रयास के " +
                            "लिए हार्दिक शुभकामनाएं देती हूं।",
                    },
                    {
                        color: "#917e1f",
                        authName: "Mr Pintoo Dubey",
                        authDesignation: "Assistant Teacher",
                        authImg: pintoo,
                        authQuote:
                            "यह विद्यालय हाटा ब्लॉक के श्रेष्ठ विद्यालयों में से एक " +
                            "है। यहां अध्यापकों द्वारा बच्चों के सर्वांगीण विकास हेतु " +
                            "कई प्रकार के नवाचार किए जाते है। मैं समस्त विद्यालय " +
                            "परिवार को बच्चों के उन्नयन हेतु उच्च स्तरीय प्रयास के " +
                            "लिए हार्दिक शुभकामनाएं देती हूं।",
                    },
                    {
                        color: "#3e76ac",
                        authName: "Smt. Preeti",
                        authDesignation: "Assistant Teacher",
                        authImg: preeti,
                        authQuote:
                            "यह विद्यालय हाटा ब्लॉक के श्रेष्ठ विद्यालयों में से एक " +
                            "है। यहां अध्यापकों द्वारा बच्चों के सर्वांगीण विकास हेतु " +
                            "कई प्रकार के नवाचार किए जाते है। मैं समस्त विद्यालय " +
                            "परिवार को बच्चों के उन्नयन हेतु उच्च स्तरीय प्रयास के " +
                            "लिए हार्दिक शुभकामनाएं देती हूं।",
                    },
                ]}
            ></MCarousel>
        </section>
    );
};

export default Faculty;
