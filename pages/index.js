import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "/components/Navbar/Navbar";
import Head from "next/head";
import IntroMessage from "../components/IntroMessage";

import LinkListItem from "../components/LinkList/LinkListItem";
import LinkList from "../components/LinkList/LinkList";
import Button from "../components/Button/Button";

const SectionLabel = ({ children }) => (
  <h2 className="font-mono text-small leading-none pb-4 uppercase tracking-widest opacity-50">
    {children}
  </h2>
);

const Section = ({ children }) => (
  <section className="my-[4em]">{children}</section>
);

const BigText = ({ children }) => (
  <p className="font-serif text-big tracking-big-text">{children}</p>
);

const Logo = ({ src }) => <img className="" src={src} alt="" />;
const LogoContainer = ({ children }) => (
  <div className="grid grid-cols-3 gap-3 px-12 pt-[1em]">{children}</div>
);

export default function Home() {
  const boxRef = React.createRef();
  const wrapperRef = React.createRef();
  const heroRef = React.createRef();
  const titleRef = React.createRef();

  useEffect(() => {
    //CURTAIN
    gsap.to(wrapperRef.current, 0.5, {
      top: '-100%',
      ease: 'sine.out',
      delay: 6.6,
    });

    //LOADER from
    gsap.from(boxRef.current, 1.6, {
      scaleY: 0,
      y: 80,
      ease: 'Power1.easeOut',
      transformOrigin: '50% 100%',
    });

    //LOADER to
    gsap.to(boxRef.current, 1.6, {
      delay: 1.6,
      height: '20vh',
      scaleY: 0,
      ease: 'Power1.easeOut',
      transformOrigin: '0% -100%',
    });

    //HERO to
    gsap.to(heroRef.current, 1.6, {
      opacity: 1,
      delay: 7,
      ease: 'slow(0.2, 0.7, false)',
      x: '-=10vw',
    });

    //MEMBER to
    gsap.to(titleRef.current, 1.6, {
      delay: 4,
      opacity: 1,
      ease: 'slow(0.2, 0.7, false)',
    });

    gsap.to(titleRef.current, 1.6, {
      opacity: 0,
      delay: 6,
      ease: 'slow(0.2, 0.7, false)',
    });
  });

  return (
    <>
      <div className="wrapper" ref={wrapperRef}>
        <div className="loader" ref={boxRef}></div>
        <div className="loader--hero">
          <span className="hero--loader" ref={heroRef}>
            _COLLECTIVE
          </span>
        </div>
        <div className="loader--member-wrapper" ref={titleRef}>
          <IntroMessage />
        </div>
      </div>
      {/* <Navbar /> */}
      <main className="mx-4 sm:mx-8 2xl:max-w-[96rem] 2xl:mx-auto text-big">
        <section className="w-full h-screen">
          {/* <div className="wrapper" ref={wrapperRef}>
        <div className="loader" ref={boxRef}></div>
        <div className="loader--hero">
          <span className="hero--loader" ref={heroRef}>
            _COLLECTIVE
          </span>
        </div>
        <div className="loader--member-wrapper" ref={titleRef}>
          <IntroMessage />
        </div>
      </div>
      <Navbar />
      <div className="grid--container"></div> */}
      </section>
      <Section>
        <SectionLabel>About Us</SectionLabel>
        <BigText>
          We partner with clients in financial services, electronic commerce,
          travel and tourism services, entertainment & infotainment, retail
          industries, CPG, and more.
        </BigText>
      </Section>
      <Section>
        <div className="flex w-full flex-col items-center">
          <SectionLabel>Entrusted By</SectionLabel>
          <LogoContainer>
            <Logo src={"client-logos/bw/ap.png"} alt="" />
            <Logo src={"client-logos/bw/calvin-klein.png"} alt="" />
            <Logo src={"client-logos/bw/fairmont-dubai.png"} alt="" />
            <Logo src={"client-logos/bw/hublot.png"} alt="" />
            <Logo src={"client-logos/bw/hunt-fish-club.png"} alt="" />
            <Logo src={"client-logos/bw/millenium.png"} alt="" />
          </LogoContainer>
        </div>
      </Section>
      <Section>
        <SectionLabel>Expertises</SectionLabel>
        <BigText>
          Hand-picked team,
          <br /> award-winning results
        </BigText>
        <LinkList>
          <LinkListItem
            id="1"
            name="Creative Planning & Marketing"
            description="Turn your bold vision into bold margin."
          />
          <LinkListItem
            id="2"
            name="Web Design & Development"
            description="Turn your bold vision into bold margin."
          />
          <LinkListItem
            id="3"
            name="Consumer Packaged Goods(CPG)"
            description="Turn your bold vision into bold margin."
          />
          <LinkListItem
            id="4"
            name="Videography and Photography"
            description="Turn your bold vision into bold margin."
          />
        </LinkList>
        <Button>View More Services</Button>
      </Section>
      <footer className="my-[2em]">
        <div className="font-serif text-medium mb-5">Got a job for us?</div>
        <div className="flex flex-col">
          <a className="font-mono text-small" href="mailto:testing@005.com">
            testing@005.com
          </a>
          <a className="font-mono text-small" href="mailto:testing@005.com">
            +1 604 6030483
          </a>
        </div>
      </footer>
    </main>
  );
}
