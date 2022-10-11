import React, { useContext, useEffect, useRef, useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";

import Header from "../components/home_page/Header";
import HomePageBanner from "../components/home_page/HomePageBanner";
import Drawer from "../components/drawer/Drawer";
import Activities from "../components/home_page/Activities";
import Appreciations from "../components/home_page/Appreciations";
import Footer from "../components/Footer";
import GoToTopButton from "../components/home_page/GoToTopButton";
import NavBar from "../components/NavBar";
import PageSwitch, { getColor } from "../components/PageSwitch";
import FacultyPage from "../components/home_page/FacultyPage";
import AboutUsPage from "../components/home_page/AboutUsPage";
import AppContext from "../context/app_context";
import DrawerBack from "../components/drawer/DrawerBack";
import AppModal from "../components/Modal";
import EnrollNowPage from "../components/home_page/EnrollNowPage";
import LoginPage from "../components/home_page/LoginPage";

const HomePage = (props: any): JSX.Element => {
    let appCtx = useContext(AppContext);
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
    }, [scrollPos]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const switchPage = (num: number) => {
        if (appCtx.pageNumber === num) {
            return;
        }

        setSwitchColor(getColor());
        setIsPageSwitching(true);
        window.scrollTo(0, 0);
        setTimeout(() => {
            appCtx.setPageNumber(num);
        }, 600);
        setTimeout(() => {
            setIsPageSwitching(false);
        }, 1200);
    };

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
                            activitiesSectionRef.current?.scrollIntoView()
                        }
                    />
                    <Activities m_ref={activitiesSectionRef} />
                    <Appreciations />
                    <HomePageBanner />
                </React.Fragment>
            )}

            {appCtx.pageNumber === 2 && <FacultyPage />}
            {appCtx.pageNumber === 5 && <AboutUsPage />}
            {appCtx.pageNumber === 6 && <LoginPage />}
            {appCtx.pageNumber === 7 && <EnrollNowPage />}

            <GoToTopButton show={showUpButt} onClick={scrollToTop} />
            <Footer zIndex={footerZ} />
        </React.Fragment>
    );
};

export default HomePage;
