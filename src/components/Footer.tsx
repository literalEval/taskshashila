import dep_logo from "../assets/images/dep_logo.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
import "../styles/anchor_style.css";

const footerStyle: React.CSSProperties = {
    height: "35vh",
    backgroundColor: "black",
    color: "white",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
};

const madeByStyle: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const AddressBlock = (props: any): JSX.Element => {
    return (
        <div
            className="address-block"
            style={{
                display: props.isPhone ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: props.isPhone ? "40%" : "20%",

                color: "white",
            }}
        >
            <p>
                Addr: &nbsp;
                <a
                    rel="noreferrer"
                    className="address-link"
                    href="https://goo.gl/maps/MCRHtueWwg5PidBs5"
                    target={"_blank"}
                >
                    Ward No - 20, Gopal Nagar (Gopalpur)<br></br> Hata,
                    Kushinagar<br></br> Uttar Pradesh, 274203
                </a>
            </p>
            <p>
                Email:&nbsp;
                <a
                    rel="noreferrer"
                    className="address-link"
                    href="mailto://ppgopalpurhata@gmail.com"
                    target={"_blank"}
                >
                    ppgopalpurhata@gmail.com
                </a>
            </p>
        </div>
    );
};

const Footer = (props: any): JSX.Element => {
    const isPhone = useMediaQuery("(max-width: 1080px)");

    return (
        <footer
            style={{
                fontSize: "22px",
                backgroundAttachment: "fixed",
                position: "sticky",
                zIndex: props.zIndex,

                left: "0",
                right: "0",
                bottom: "0",
            }}
        >
            <div style={footerStyle}>
                <div
                    style={{
                        backgroundImage: `url(${dep_logo})`,
                        backgroundSize: "100% 100%",
                        width: "25vh",
                        height: "25vh",
                    }}
                ></div>
                <AddressBlock isPhone={isPhone} />
                <div>
                    <h2>Contact Us</h2>
                    <span>Pintoo Dubey: +91 9839525231</span>
                    <br></br>
                    <span>Sarita Vaishya: +91 7398290820</span>
                    <br></br>
                    <span>Preeti Tiwari: +91 9454264015</span>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <AddressBlock isPhone={!isPhone} />
            </div>
            <div style={madeByStyle}>
                Made with ❤ by &nbsp;
                <a
                    rel="noreferrer"
                    className="chad"
                    href="https://github.com/literalEval"
                    target={"_blank"}
                >
                    Ravidev Pandey
                </a>
            </div>
        </footer>
    );
};

export default Footer;
