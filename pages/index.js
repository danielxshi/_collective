import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";

export default function Home() {
  const boxRef = React.createRef();
  const wrapperRef = React.createRef();

  useEffect(() => {
    gsap.to(wrapperRef.current, .5, {
      top: "-100%",
      ease: "sine.out",
      delay: 3.6
    });

    gsap.from(boxRef.current, 1.6,
      {
        scaleY: 0,
        y: 80,
        ease: "slow(0.2, 0.7, false)",
        transformOrigin:"50% 100%"
      });

      gsap.to(boxRef.current, 1.2,
        {
          delay: 1.6,
          height: "20vh",
          scaleY: 0,
          ease: "slow(0.2, 0.7, false)",
          transformOrigin:"0% -100%"
        });

  });

  return (
    <div>
      <div className="wrapper" ref={wrapperRef}>
        <div className="loader" ref={boxRef}>
        </div>
      </div>
      <div className="grid-container">
        <h1 className="heading-01">test</h1>
      </div>
    </div>
  )
}
