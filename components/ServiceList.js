import React, { useState } from "react";

import LinkListItem from "../components/LinkList/LinkListItem";
import LinkList from "../components/LinkList/LinkList";
import Button from "../components/Button/Button";

import ProjectMessages from "../JSON/ProjectMessages";
import { AnimatePresence } from "framer-motion";
import { DelayMotion } from "./DelayMotion";

const ServiceList = () => {
  const MAX_INITIAL_LIST = 5;
  const STAGGER_DELAY = 200;
  const [isViewingFullList, setIsViewingFullList] = useState(false);

  return (
    <>
      <LinkList>
        <AnimatePresence>
          {ProjectMessages.ServiceMessages.map(
            ({ Title, Message, Link }, index) =>
              (index < MAX_INITIAL_LIST || isViewingFullList) && (
                <DelayMotion
                  delay={
                    isViewingFullList
                      ? (index - MAX_INITIAL_LIST) * STAGGER_DELAY
                      : index * STAGGER_DELAY
                  }
                >
                  <LinkListItem
                    id={index + 1}
                    key={index}
                    name={Title}
                    description={Message}
                    href={Link}
                  />
                </DelayMotion>
              )
          )}
        </AnimatePresence>
      </LinkList>
      {!isViewingFullList && (
        <div className="mt-[.5em] flex justify-center md:justify-start md:pl-[25%] w-full">
          <Button onClick={() => setIsViewingFullList(true)}>
            View More Services
          </Button>
        </div>
      )}
    </>
  );
};

export default ServiceList;
