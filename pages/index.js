import React, { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { gsap } from 'gsap';
import NextLink from 'next/link';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import Navbar from '/components/Navbar/Navbar';
import Head from 'next/head';
// import IntroMessage from "../components/IntroMessage";

import ServiceList from '../components/ServiceList';

const SectionLabel = ({ children }) => (
  <h2 className="font-mono text-small leading-none pb-4 uppercase tracking-widest opacity-50">
    {children}
  </h2>
);

const Section = ({ children, id }) => (
  <section className="my-[4em]" id={id}>
    {children}
  </section>
);

const BigText = ({ children }) => (
  <p className="font-serif text-big tracking-big-text">{children}</p>
);

// const SectionMargin = ({ children }) => {
//   <section className="mx-4 sm:mx-8 2xl:max-w-[96rem] 2xl:mx-auto text-big">
//     {children}
//   </section>;
// };

const Logo = ({ src }) => (
  <img className="transform px-[.5em] py-[.5em]" src={src} alt="" />
);
const LogoContainer = ({ children }) => (
  <div className="grid grid-cols-3 gap-3 px-12 pt-[1em]">{children}</div>
);

export default function Home() {
  const boxRef = React.createRef();
  const wrapperRef = React.createRef();
  const heroRef = React.createRef();
  const heroRef1 = React.createRef();
  const heroRef2 = React.createRef();
  const titleRef = React.createRef();
  const containerRef = React.createRef();
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  scrollYProgress.onChange((x) => {
    setFfLayer(x > 0.4 ? -1 : 0);
  });

  useEffect(() => {
    //CURTAIN
    gsap.to(wrapperRef.current, 0.5, {
      top: '-120%',
      ease: 'sine.out',
      delay: 0.3,
    });

    // //LOADER from
    // gsap.from(boxRef.current, 1.6, {
    //   display: "block",
    //   scaleY: 0,
    //   y: 80,
    //   ease: "Power1.easeOut",
    //   transformOrigin: "50% 100%",
    // });
    // //LOADER to
    // gsap.from(boxRef.current, 1.6, {
    //   display: "none",
    //   scaleY: 0,
    //   y: 80,
    //   ease: "Power1.easeOut",
    //   transformOrigin: "50% 100%",
    //   delay: 3.4,
    // });

    // //LOADER to
    // gsap.to(boxRef.current, 1.6, {
    //   delay: 1.4,
    //   height: "20vh",
    //   scaleY: 0,
    //   ease: "Power1.easeOut",
    //   transformOrigin: "0% -100%",
    // });

    //HERO to

    gsap.from(heroRef.current, 1.6, {
      opacity: 1,
      x: '0',
    });


    gsap.from(heroRef2.current, 1.6, {
      opacity: 0,
      delay: 1,
      ease: 'slow(0.2, 0.7, false)',
      x: '+5vw',
    });

    gsap.to(heroRef2.current, 1.6, {
      opacity: 1,
      delay: 1,
      ease: 'slow(0.2, 0.7, false)',
      x: '0',
    });

    // //MEMBER to
    // gsap.to(titleRef.current, 1.6, {
    //   delay: 4,
    //   opacity: 1,
    //   ease: 'slow(0.2, 0.7, false)',
    // });

    // gsap.to(titleRef.current, 1.6, {
    //   opacity: 0,
    //   delay: 6,
    //   ease: 'slow(0.2, 0.7, false)',
    // });
  });

  return (
    <>
      <Head>
        <title>005F — DIGITAL MEDIA AGENCY</title>
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        {' '}
        <div className="wrapper z-0" ref={wrapperRef}>
          <div className="loader--hero">
            {/* <span className="hero--loader" ref={heroRef}>
              005F
            </span>
            <span className="hero--loader" ref={heroRef1}>
              A DIGITAL MEDIA AGENCY
            </span>
            <span className="hero--loader" ref={heroRef2}>
              CONTACT US
            </span> */}
          </div>
        </div>
        <Navbar />
        <main
          data-scroll-container
          ref={containerRef}
          className="mx-4 sm:mx-8 2xl:max-w-[96rem] 2xl:mx-auto text-big"
        >
          <div className="loader--hero">
            <span className="hero--loader" ref={heroRef2}>
              005F
            </span>
            {/* <span className="hero--loader" ref={heroRef1}>
              A DIGITAL MEDIA AGENCY
            </span> */}
          </div>
          <Section data-scroll-section>
            <SectionLabel>About Us</SectionLabel>
            <BigText data-scroll-speed="1.2">
              We partner with clients in financial services, electronic
              commerce, travel and tourism services, entertainment &
              infotainment, retail industries, CPG, and more.
            </BigText>
          </Section>
          <Section data-scroll-section>
            <div className="flex w-full flex-col items-center">
              <SectionLabel>Entrusted By</SectionLabel>
              <LogoContainer>
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="0.5"
                >
                  <Logo src={'client-logos/bw/ap.png'} alt="" />
                </div>

                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="0.5"
                >
                  <Logo src={'client-logos/bw/calvin-klein.png'} alt="" />
                </div>

                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="0.5"
                >
                  <Logo src={'client-logos/bw/fairmont-dubai.png'} alt="" />
                </div>

                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-0.5"
                >
                  <Logo src={'client-logos/bw/hublot.png'} alt="" />
                </div>

                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-0.5"
                >
                  <Logo src={'client-logos/bw/hunt-fish-club.png'} alt="" />
                </div>

                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-0.5"
                >
                  <Logo src={'client-logos/bw/millenium.png'} alt="" />
                </div>
              </LogoContainer>
            </div>
          </Section>
          <Section data-scroll-section id="expertises">
            <SectionLabel>Expertises</SectionLabel>
            <BigText>
              Hand-picked team,
              <br /> award-winning results
            </BigText>
            <ServiceList />
          </Section>
          <footer
            style={{
              height: '305px',
            }}
            className="my-[2em]"
          >
            <div className="flex flex-col items-center md:items-start md:pl-[25%] w-full">
              <div
                data-scroll-speed=".5"
                className="font-serif text-medium mb-5"
              >
                Got a job for us?
              </div>
              <div className="flex flex-col items-center md:items-start mb-8">
                <a
                  className="font-mono text-medium mb-2"
                  href="mailto:wayne@liangholdings.com"
                >
                  wayne@liangholdings.com
                </a>
                <span
                  className="font-mono text-medium"
                  // href="mailto:testing@005.com"
                >
                  +1 (780) 6677189
                </span>
              </div>
            </div>
          </footer>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
