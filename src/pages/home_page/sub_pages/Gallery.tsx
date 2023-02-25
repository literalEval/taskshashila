import "../../../styles/gallery_style.css";
import { useContext } from "react";
import AppContext from "../../../context/app_context";

import one from "../../../assets/images/gallery/1.jpg";
import two from "../../../assets/images/gallery/2.jpg";
import three from "../../../assets/images/gallery/3.jpg";
import four from "../../../assets/images/gallery/4.jpg";
import five from "../../../assets/images/gallery/5.jpg";
import six from "../../../assets/images/gallery/6.jpg";
import seven from "../../../assets/images/gallery/7.jpg";
import eight from "../../../assets/images/gallery/8.jpg";
import nine from "../../../assets/images/gallery/9.jpg";
import ten from "../../../assets/images/gallery/10.jpg";
import eleven from "../../../assets/images/gallery/11.jpg";
import twelve from "../../../assets/images/gallery/12.jpg";

const ImageColumn = (
    props: any
    // img_one: string,
    // img_two: string,
    // reverse: boolean = false
): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <div
            style={{
                display: "flex",
                gap: "2rem",
                flexDirection: `column${props.reverse ? "-reverse" : ""}`,
                justifyContent: "space-around",
            }}
        >
            <div
                className="gallery--img__container"
                style={{
                    height: isPhone ? "10vh" : "30vh",
                    overflow: "hidden",
                }}
            >
                <img
                    className="gallery--img"
                    alt="img_boi"
                    width="100%"
                    src={props.img_one}
                />
            </div>
            <div
                className="gallery--img__container"
                style={{
                    height: isPhone ? "20vh" : "60vh",
                    overflow: "hidden",
                }}
            >
                <img
                    className="gallery--img"
                    alt="img_boi"
                    width="100%"
                    src={props.img_two}
                />
            </div>
        </div>
    );
};

const ImageGrid = (
    props: any
    // img_one: string,
    // img_two: string,
    // img_three: string,
    // img_four: string,
    // img_five: string,
    // img_six: string
): JSX.Element => {
    return (
        <div
            style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2rem",
                marginBottom: "2rem",
                justifyContent: "space-around",
            }}
        >
            <ImageColumn img_one={props.img_one} img_two={props.img_two} />
            <ImageColumn
                img_one={props.img_three}
                img_two={props.img_four}
                reverse={true}
            />
            <ImageColumn img_one={props.img_five} img_two={props.img_six} />
        </div>
    );
};

const Gallery = (): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;

    return (
        <section
            style={{
                minHeight: "100vh",
                padding: `${isPhone ? "25%" : "10%"} 10% 10% 10%`,

                backgroundColor: "#f1eee8",
                zIndex: 2,
            }}
        >
            <ImageGrid
                img_one={one}
                img_two={two}
                img_three={three}
                img_four={four}
                img_five={five}
                img_six={six}
            />
            <ImageGrid
                img_one={seven}
                img_two={eight}
                img_three={nine}
                img_four={ten}
                img_five={eleven}
                img_six={twelve}
            />
        </section>
    );
};

export default Gallery;
