import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Highlight = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: props.color,
                height: "50vh",
                width: "100%",
                margin: "auto",
            }}
        >
            {props.children}
        </div>
    );
};

const sectionStyle: React.CSSProperties = {
    // width: "100%",
    height: "auto",
    padding: "10% 20%",
};


const Appreciations = (): JSX.Element => {
    return (
        <section style={sectionStyle}>
            <Carousel variant="dark">
                <Carousel.Item>
                    <Highlight className="d-block w-100 h-100" color="#f27a1a">
                        We love Trendyol orange
                    </Highlight>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight className="d-block w-100 h-100" color="#d53f8c">
                        This is our github
                    </Highlight>

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Highlight className="d-block w-100 h-100" color="#16be48">
                        We love Trendyol green
                    </Highlight>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Appreciations;
