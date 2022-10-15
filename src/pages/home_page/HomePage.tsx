import React, { useContext, useEffect, useRef, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import AppContext from "../../context/app_context";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import Header from "../../components/home_page/Header";
import HomePageBanner from "../../components/home_page/HomePageBanner";
import Drawer from "../../components/drawer/Drawer";
import Activities from "../../components/home_page/Activities";
import Appreciations from "../../components/home_page/Appreciations";
import Footer from "../../components/Footer";
import GoToTopButton from "../../components/GoToTopButton";
import NavBar from "../../components/NavBar";
import PageSwitch, { getColor } from "../../components/PageSwitch";
import Faculty from "./sub_pages/Faculty";
import AboutUs from "./sub_pages/AboutUs";
import DrawerBack from "../../components/drawer/DrawerBack";
import EnrollNow from "./sub_pages/EnrollNow";
import Login from "./sub_pages/Login";
import Gallery from "./sub_pages/Gallery";


const HomePage = (props: any): JSX.Element => {
    const appCtx = useContext(AppContext);
    let isPhone = useMediaQuery("(max-width: 1080px)");

    let [isPageSwitching, setIsPageSwitching] = useState(false);
    let [switchColor, setSwitchColor] = useState("#EC483D");
    let [isDrawerVisible, setIsDrawerVisible] = useState(false);
    let [showUpButt, setShowUpButt] = useState(false);
    let [footerZ, setFooterZ] = useState(1);
    let [isHeaderSticky, setIsHeaderSticky] = useState(false);

    let activitiesSectionRef = useRef<HTMLElement>();
    let headerSectionRef =
        useRef<HTMLElement>() as React.RefObject<HTMLElement>;
    let scrollPos = useScrollPosition();

    const scrollToTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    };

    const switchPage = (num: number) => {
        if (isPageSwitching || appCtx.pageNumber === num) {
            return;
        }

        setSwitchColor(getColor());
        setIsPageSwitching(true);
        setTimeout(() => {
            appCtx.setPageNumber(num);
            window.scrollTo(0, 0);
        }, 600);
        setTimeout(() => {
            setIsPageSwitching(false);
        }, 1200);
    };

    useEffect(() => {
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
    }, [scrollPos, showUpButt, footerZ, isHeaderSticky]);

    useEffect(() => {
        appCtx.setScreenType({
            phone: isPhone,
            tablet: !isPhone,
            laptop: !isPhone,
        });
    }, [isPhone]);

    // useEffect(() => {
    //     appAuth.onAuthStateChanged((user) => {
    //         if (user) {
    //             // console.log("home", appCtx.pageNumber);
    //             switchPage(2);
    //             console.log(user);
    //         } else {
    //             console.log("No beeches");
    //         }
    //     });
    // }, []);

    return (
        <React.Fragment>
            {isPageSwitching && <PageSwitch backgroundColor={switchColor} />}

            <NavBar
                isHeaderSticky={isHeaderSticky}
                onClickMenu={() => setIsDrawerVisible(!isDrawerVisible)}
                onEnrollNow={() => switchPage(7)}
            />

            {isDrawerVisible && (
                <DrawerBack onClick={() => setIsDrawerVisible(false)} />
            )}
            <Drawer
                visible={isDrawerVisible}
                onClose={() => setIsDrawerVisible(false)}
                switchPage={switchPage}
            />

            {appCtx.pageNumber === 0 && (
                <React.Fragment>
                    <Header
                        m_ref={headerSectionRef}
                        onClickActivities={() =>
                            activitiesSectionRef.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    />
                    <Activities m_ref={activitiesSectionRef} />
                    <Appreciations />
                    <HomePageBanner />
                </React.Fragment>
            )}

            {appCtx.pageNumber === 1 && <Gallery />}
            {appCtx.pageNumber === 2 && <Faculty />}
            {appCtx.pageNumber === 5 && <AboutUs />}
            {appCtx.pageNumber === 6 && <Login />}
            {appCtx.pageNumber === 7 && <EnrollNow />}

            <GoToTopButton show={showUpButt} onClick={scrollToTop} />
            <Footer zIndex={footerZ} />
        </React.Fragment>
    );
};

export default HomePage;
