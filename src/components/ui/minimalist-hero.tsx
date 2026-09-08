"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import classNames from "classnames";
import {
  Flex,
  Heading,
  Text,
  SmartLink,
  IconButton,
  Icon,
  RevealFx,
} from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./minimalist-hero.module.scss";

export interface SocialLinkItem {
  name?: string;
  icon: string;
  href?: string;
  link?: string;
  label?: string;
}

export interface MinimalistHeroProps {
  mainText?: string | React.ReactNode;
  readMoreLink?: string;
  readMoreText?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  socialLinks?: SocialLinkItem[];
  locationText?: string;
  className?: string;
}

const LOCAL_FALLBACK_IMAGE = "/images/avatar.jpg";

const normalizeIconName = (name: string): string => {
  const clean = (name || "").toLowerCase().trim();
  const map: Record<string, string> = {
    camera: "instagram",
    messagecircle: "whatsapp",
    message_circle: "whatsapp",
    mail: "email",
    envelope: "email",
    twitter: "x",
  };
  return map[clean] || clean;
};

const getSocialAriaLabel = (name: string | undefined, iconName: string): string => {
  const displayTitle = name || (iconName.charAt(0).toUpperCase() + iconName.slice(1));
  if (iconName === "email") return `Send email to ${person.name || "BimaDev"}`;
  if (iconName === "whatsapp") return `Contact ${person.name || "BimaDev"} on WhatsApp`;
  return `Visit ${person.name || "BimaDev"}'s ${displayTitle} profile`;
};

export const MinimalistHero: React.FC<MinimalistHeroProps> = ({
  mainText = "I'm Bima, a FullStack Developer from Indonesia — I craft modern websites and build my own projects.",
  readMoreLink = "/about",
  readMoreText = "About me",
  imageSrc = "/images/bima3.png",
  imageAlt = `${person.name || "BimaDev"} - ${person.role || "FullStack Developer"}`,
  overlayText = { part1: "FullStack", part2: "Developer" },
  socialLinks,
  locationText,
  className,
}) => {
  const rawSrc = imageSrc || "/images/bima3.png";
  const initialNormalizedSrc = rawSrc.startsWith("./") ? rawSrc.replace(/^\./, "") : rawSrc;

  const [currentImageSrc, setCurrentImageSrc] = useState<string>(initialNormalizedSrc);

  useEffect(() => {
    const normalized = rawSrc.startsWith("./") ? rawSrc.replace(/^\./, "") : rawSrc;
    setCurrentImageSrc(normalized);
  }, [rawSrc]);

  // Determine active social links: fallback to content.jsx social if prop is undefined
  const resolvedSocialLinks: SocialLinkItem[] =
    socialLinks !== undefined
      ? socialLinks
      : (social || []).map((item) => ({
          name: item.name,
          icon: item.icon,
          href: item.link,
        }));

  // Determine active location: fallback to formatted location or person.location if undefined
  const resolvedLocation: string | undefined =
    locationText !== undefined
      ? locationText
      : person.location === "Asia/Pontianak"
        ? "Pontianak, Indonesia"
        : person.location;

  return (
    <Flex
      as="section"
      role="region"
      aria-label="Hero section"
      fillWidth
      horizontal="center"
      vertical="center"
      position="relative"
      className={classNames(styles.heroContainer, className)}
    >
      <div className={styles.heroInner}>
        {/* Left Column: Intro Copy, CTA & Social Meta */}
        <RevealFx speed="fast" delay={0.2} className={styles.leftColumn}>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            className={styles.mainText}
          >
            {mainText}
          </Text>

          {readMoreLink && (
            <SmartLink
              href={readMoreLink}
              suffixIcon="arrowRight"
              className={styles.readMoreLink}
              aria-label={`Read more about ${person.name || "me"}`}
            >
              <Text variant="body-strong-s">{readMoreText}</Text>
            </SmartLink>
          )}

          {(resolvedLocation || (resolvedSocialLinks && resolvedSocialLinks.length > 0)) && (
            <div className={styles.metaRow}>
              {resolvedLocation && (
                <div
                  className={styles.location}
                  aria-label={`Location: ${resolvedLocation}`}
                  role="status"
                >
                  <Icon
                    name="globe"
                    size="xs"
                    onBackground="brand-medium"
                    decorative
                  />
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {resolvedLocation}
                  </Text>
                </div>
              )}

              {resolvedSocialLinks && resolvedSocialLinks.length > 0 && (
                <nav className={styles.socialRow} aria-label="Social media links">
                  {resolvedSocialLinks.map((item, index) => {
                    const iconName = normalizeIconName(item.icon);
                    const targetHref = item.href || item.link;
                    if (!targetHref) return null;
                    const tooltipLabel = item.name || iconName;
                    const ariaLabel = item.label || getSocialAriaLabel(item.name, iconName);

                    return (
                      <IconButton
                        key={`${item.icon}-${index}`}
                        href={targetHref}
                        icon={iconName}
                        size="s"
                        variant="secondary"
                        tooltip={tooltipLabel}
                        aria-label={ariaLabel}
                      />
                    );
                  })}
                </nav>
              )}
            </div>
          )}
        </RevealFx>

        {/* Center Column: Prominent Portrait Image & Ambient Brand Glow */}
        <div className={styles.centerColumn}>
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className={styles.imageWrapper}
          >
            <div className={styles.auraGlow} aria-hidden="true" />
            <Image
              src={currentImageSrc}
              alt={imageAlt}
              width={408}
              height={612}
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
              priority
              className={styles.heroImage}
              onError={() => {
                if (currentImageSrc !== LOCAL_FALLBACK_IMAGE) {
                  setCurrentImageSrc(LOCAL_FALLBACK_IMAGE);
                }
              }}
            />
          </motion.div>
        </div>

        {/* Right Column: Statement Heading — "FullStack" & "Developer" stacked on separate lines */}
        <RevealFx speed="fast" delay={0.3} className={styles.rightColumn}>
          <Heading
            as="h1"
            className={styles.headline}
          >
            <span className={styles.headlineLine}>{overlayText.part1}</span>
            <Text
              as="span"
              onBackground="brand-weak"
              className={classNames(styles.headlineLine, styles.headlineAccent)}
            >
              {overlayText.part2}
            </Text>
          </Heading>
        </RevealFx>
      </div>
    </Flex>
  );
};

export default MinimalistHero;