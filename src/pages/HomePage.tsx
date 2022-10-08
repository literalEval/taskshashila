import React, { useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

import Header from "../components/home_page/Header";
import HomePageBanner from "../components/home_page/HomePageBanner";
import Drawer from "../components/home_page/Drawer";
import Activities from "../components/home_page/Activities";
import Appreciations from "../components/home_page/Appreciations";
import Footer from "../components/home_page/Footer";
import GoToTopButton from "../components/home_page/GoToTopButton";
import NavBar from "../components/NavBar";

const HomePage = (props: any): JSX.Element => {
    let [isDrawerVisible, setIsDrawerVisible] = useState(false);
    let [showUpButt, setShowUpButt] = useState(false);
    let [footerZ, setFooterZ] = useState(1);
    let [isHeaderSticky, setIsHeaderSticky] = useState(false);

    let activitiesSectionRef = useRef<HTMLElement>();
    let headerSectionRef =
        useRef<HTMLElement>() as React.RefObject<HTMLElement>;
    let scrollPos = useScrollPosition();

    useEffect(() => {
        // console.log(scrollPos);

        if ((!showUpButt && scrollPos > 10) || (showUpButt && scrollPos < 10)) {
            setShowUpButt(!showUpButt);
        }

        if (
            (!isHeaderSticky && scrollPos > 30) ||
            (isHeaderSticky && scrollPos < 5)
        ) {
            setIsHeaderSticky(!isHeaderSticky);
        }

        if (
            (footerZ === -1 &&
                window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - 10) ||
            (footerZ === 1 &&
                window.innerHeight + window.scrollY <
                    document.body.offsetHeight - 10)
        ) {
            setFooterZ(footerZ * -1);
        }
    }, [scrollPos]);

    const scrollToTop = () => {
        // headerSectionRef.current?.scrollTo(0, 0);
        window.scrollTo(0, 0);
    };

    return (
        <React.Fragment>
            <Header m_ref={headerSectionRef} />
            <NavBar
                isHeaderSticky={isHeaderSticky}
                onClickMenu={() => setIsDrawerVisible(!isDrawerVisible)}
                onClickActivity={() => {
                    activitiesSectionRef.current?.scrollIntoView();
                }}
            />
            <Drawer
                visible={isDrawerVisible}
                onClose={() => setIsDrawerVisible(false)}
            />
            <Activities m_ref={activitiesSectionRef} />
            <GoToTopButton show={showUpButt} onClick={scrollToTop} />
            <Appreciations />
            <HomePageBanner />
            <Footer zIndex={footerZ} />
        </React.Fragment>
    );
};

export default HomePage;
