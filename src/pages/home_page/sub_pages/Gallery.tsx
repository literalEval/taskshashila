import "../../../styles/gallery_style.css";
import { useContext, useState } from "react";
import AppContext from "../../../context/app_context";
import { fetchData, firebase } from "../../../firebase/firebase";

const ImageColumn = (props: any): JSX.Element => {
    let isPhone = useContext(AppContext).screenType.phone;
    const appCtx = useContext(AppContext);

    const onClickImg = (src: string) => {
        appCtx.setCurrentGalleryImg(src);
        appCtx.setShowGallery(true);

        console.log("clicked");
    };
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
                onClick={() => onClickImg(props.img_one)}
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
                onClick={() => onClickImg(props.img_two)}
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
    let [imgData, setImgData] = useState<
        firebase.firestore.DocumentData | undefined
    >(undefined);
    imgData = {};
    fetchData()
        .then((retrievedData) => {
            setImgData(retrievedData);
        })
        .catch((err) => {
            console.log(err);
        });
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
                img_one={imgData[0]}
                img_two={imgData[1]}
                img_three={imgData[2]}
                img_four={imgData[3]}
                img_five={imgData[4]}
                img_six={imgData[5]}
            />
            <ImageGrid
                img_one={imgData[6]}
                img_two={imgData[7]}
                img_three={imgData[8]}
                img_four={imgData[9]}
                img_five={imgData[10]}
                img_six={imgData[11]}
            />
        </section>
    );
};

export default Gallery;
