import React from "react";
import { Heading, Flex, RevealFx, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

import { baseURL, routes } from "@/app/resources";
import { home, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@biimaa_jo",
    },
    alternates: {
      canonical: `https://${baseURL}`,
    },
  };
}

const heroSocialLinks = [
  { icon: "camera", href: "https://www.instagram.com/biimaa_jo" },
  { icon: "messageCircle", href: "https://wa.me/6282254044783" },
  { icon: "mail", href: "mailto:contact@bimadev.online" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BimaDev Portfolio",
              url: `https://${baseURL}`,
              description: home.description,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `https://${baseURL}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              name: person.name,
              url: `https://${baseURL}`,
              image: `https://${baseURL}${person.avatar}`,
              jobTitle: person.role,
              description: home.description,
              sameAs: [
                "https://www.instagram.com/biimaa_jo",
                "https://github.com/bimadevs",
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Full Stack Development",
                "Web Development",
                "AI Integration",
                "Node.js",
                "Supabase",
              ],
              email: "bimadev06@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressRegion: "West Kalimantan",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@id": `https://${baseURL}/#person`,
              },
              dateCreated: "2024-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            },
          ]),
        }}
      />

      <MinimalistHero
        mainText="I'm Bima, a FullStack Developer from Indonesia — I craft modern websites and build my own projects."
        readMoreLink="/about"
        imageSrc="./images/bima3.png"
        imageAlt="BimaDev"
        overlayText={{ part1: "FullStack", part2: "Developer" }}
        socialLinks={heroSocialLinks}
        locationText="Pontianak, Indonesia"
      />

      <Column maxWidth="m" gap="xl" horizontal="center">
        <RevealFx translateY="16" delay={0.6}>
          <Projects range={[1, 1]} />
        </RevealFx>
        {routes["/blog"] && (
          <Flex fillWidth gap="24" mobileDirection="column">
            <Flex flex={1} paddingLeft="l">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Flex>
            <Flex flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        )}
        <Projects range={[2]} />
        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </Column>
    </>
  );
}
