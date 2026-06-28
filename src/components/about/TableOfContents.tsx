"use client";

import React from "react";
import { Column, Flex, Text } from "@/once-ui/components";
import styles from "./about.module.scss";

interface TableOfContentsProps {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, tableOfContent }) => {
  const scrollTo = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!tableOfContent.display) return null;

  const visibleSections = structure.filter((section) => section.display);

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      hide="m"
    >
      {visibleSections.map((section) => (
        <Column key={section.title} gap="12">
          <Flex
            cursor="interactive"
            className={styles.hover}
            gap="8"
            vertical="center"
            onClick={() => scrollTo(section.title, 80)}
          >
            <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
            <Text>{section.title}</Text>
          </Flex>
          {tableOfContent.subItems && section.items.length > 0 && (
            <Flex direction="column" gap="12" paddingLeft="24">
              {section.items.map((item) => (
                <Flex
                  hide="l"
                  key={item}
                  style={{ cursor: "pointer" }}
                  className={styles.hover}
                  gap="12"
                  vertical="center"
                  onClick={() => scrollTo(item, 80)}
                >
                  <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                  <Text>{item}</Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Column>
      ))}
    </Column>
  );
};

export default TableOfContents;
