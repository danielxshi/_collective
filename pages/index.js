import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "/components/Navbar/Navbar";
import Head from "next/head";
import IntroMessage from "../components/IntroMessage";

export default function Home() {
  const boxRef = React.createRef();
  const wrapperRef = React.createRef();
  const heroRef = React.createRef();
  const titleRef = React.createRef();

  useEffect(() => {
    //CURTAIN
    gsap.to(wrapperRef.current, 0.5, {
      top: "-100%",
      ease: "sine.out",
      delay: 6.6,
    });

    //LOADER from
    gsap.from(boxRef.current, 1.6, {
      scaleY: 0,
      y: 80,
      ease: "Power1.easeOut",
      transformOrigin: "50% 100%",
    });

    //LOADER to
    gsap.to(boxRef.current, 1.6, {
      delay: 1.6,
      height: "20vh",
      scaleY: 0,
      ease: "Power1.easeOut",
      transformOrigin: "0% -100%",
    });

    //HERO to
    gsap.to(heroRef.current, 1.6, {
      opacity: 1,
      delay: 7,
      ease: "slow(0.2, 0.7, false)",
      x: "-=10vw",
    });

    //MEMBER to
    gsap.to(titleRef.current, 1.6, {
      delay: 4,
      opacity: 1,
      ease: "slow(0.2, 0.7, false)",
    });

    gsap.to(titleRef.current, 1.6, {
      opacity: 0,
      delay: 6,
      ease: "slow(0.2, 0.7, false)",
    });
  });

  return (
    <div>
      <div className="text-white">Test</div>
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
    </div>
  );
}
