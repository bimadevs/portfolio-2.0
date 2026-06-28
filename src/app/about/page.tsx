import { JSX } from "react";
import {
  Button,
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  RevealFx,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiPostgresql, SiSupabase, SiPython,
  SiGit, SiVscodium,
} from "react-icons/si";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";
import ProfileCard from "@/components/about/ProfileCard";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://${baseURL}/about`,
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
      canonical: `https://${baseURL}/about`,
    },
  };
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: "What I Do", display: true, items: ["Web Development", "AI & Machine Learning", "UI/UX Design"] },
    { title: "Tech Stack", display: true, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map((e) => e.company) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map((i) => i.name) },
    { title: about.technical.title, display: about.technical.display, items: about.technical.skills.map((s) => s.title) },
  ];

  const heroSocials = social.filter((item) => item.link);

  return (
    <Column maxWidth="m" paddingX="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:"))
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0]?.company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} tableOfContent={about.tableOfContent} />
        </Column>
      )}

      {/* ═══ HERO SECTION ═══ */}
      <Flex fillWidth mobileDirection="column" className={styles.heroSection}>
        {about.avatar.display && (
          <RevealFx speed="slow" className={styles.heroLeft}>
            <Column horizontal="center">
              <ProfileCard avatarUrl="/images/bima4.jpeg" />
              {person.languages.length > 0 && (
                <Flex gap="8" wrap vertical="center" paddingTop="12">
                  {person.languages.map((language, index) => (
                    <Tag key={index} size="l">
                      {language}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Column>
          </RevealFx>
        )}
        <RevealFx speed="slow" delay={0.2}>
          <Column className={styles.heroRight}>
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text className={styles.textAlign} variant="display-default-xs" onBackground="neutral-weak">
              {person.role}
            </Text>
            <Flex gap="8" vertical="center" className={`${styles.locationRow} ${styles.blockAlign}`}>
              <Icon onBackground="accent-weak" name="globe" size="s" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location}
              </Text>
            </Flex>
            {heroSocials.length > 0 && (
              <Flex gap="8" wrap className={`${styles.socialRow} ${styles.blockAlign}`}>
                {heroSocials.map((item) => (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    size="l"
                    variant="secondary"
                    tooltip={item.name}
                  />
                ))}
              </Flex>
            )}
          </Column>
        </RevealFx>
      </Flex>

      {/* ═══ STATS BAR ═══ */}
      <RevealFx translateY="16" delay={0.1}>
        <Grid columns={4} mobileColumns={2} fillWidth gap="16" marginBottom="xl">
          <div className={styles.statCard}>
            <Heading variant="display-strong-xl" className={styles.statNumber}>2+</Heading>
            <Text variant="body-default-s" className={styles.statLabel}>Years Experience</Text>
          </div>
          <div className={styles.statCard}>
            <Heading variant="display-strong-xl" className={styles.statNumber}>10+</Heading>
            <Text variant="body-default-s" className={styles.statLabel}>Projects Built</Text>
          </div>
          <div className={styles.statCard}>
            <Heading variant="display-strong-xl" className={styles.statNumber}>5+</Heading>
            <Text variant="body-default-s" className={styles.statLabel}>Technologies</Text>
          </div>
          <div className={styles.statCard}>
            <Heading variant="display-strong-xl" className={styles.statNumber}>∞</Heading>
            <Text variant="body-default-s" className={styles.statLabel}>Cups of Coffee</Text>
          </div>
        </Grid>
      </RevealFx>

      {/* ═══ ABOUT INTRO ═══ */}
      {about.intro.display && (
        <RevealFx translateY="16" delay={0.1}>
          <Column fillWidth marginBottom="xl">
            <Heading as="h2" id={about.intro.title} variant="display-strong-s" marginBottom="m">
              {about.intro.title}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {about.intro.description}
            </Text>
          </Column>
        </RevealFx>
      )}

      {/* ═══ WHAT I DO ═══ */}
      <Column fillWidth marginBottom="xl">
        <Heading as="h2" id="What I Do" variant="display-strong-s" marginBottom="m">
          What I Do
        </Heading>
        <Grid columns={3} mobileColumns={1} fillWidth gap="16">
          <RevealFx translateY="16" delay={0.2}>
            <div className={styles.serviceCard}>
              <Icon name="code" size="l" className={styles.serviceIcon} />
              <Heading as="h3" variant="heading-strong-m" marginBottom="8" marginTop="12">
                Web Development
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Building modern web applications with cutting-edge technologies
              </Text>
            </div>
          </RevealFx>
          <RevealFx translateY="16" delay={0.25}>
            <div className={styles.serviceCard}>
              <Icon name="brain" size="l" className={styles.serviceIcon} />
              <Heading as="h3" variant="heading-strong-m" marginBottom="8" marginTop="12">
                AI &amp; Machine Learning
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Creating intelligent solutions powered by artificial intelligence
              </Text>
            </div>
          </RevealFx>
          <RevealFx translateY="16" delay={0.3}>
            <div className={styles.serviceCard}>
              <Icon name="pen" size="l" className={styles.serviceIcon} />
              <Heading as="h3" variant="heading-strong-m" marginBottom="8" marginTop="12">
                UI/UX Design
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Designing intuitive and beautiful user experiences
              </Text>
            </div>
          </RevealFx>
        </Grid>
      </Column>

      {/* ═══ TECH STACK ═══ */}
      <Column fillWidth marginBottom="xl">
        <Heading as="h2" id="Tech Stack" variant="display-strong-s" marginBottom="8">
          Tech Stack
        </Heading>
        <Text variant="body-default-m" className={styles.techStackSubtitle}>
          Technologies I work with daily
        </Text>
        <RevealFx translateY="16" delay={0.3}>
          <Flex gap="12" wrap>
            {[
              { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
              { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
              { name: "Python", icon: SiPython, color: "#3776AB" },
              { name: "Git", icon: SiGit, color: "#F05032" },
              { name: "VS Code", icon: SiVscodium, color: "#007ACC" },
            ].map((tech) => (
              <div key={tech.name} className={styles.techBadge}>
                <Flex gap="8" vertical="center" style={{ display: "inline-flex" }}>
                  <tech.icon size={18} color={tech.color} />
                  <Text variant="body-default-s">{tech.name}</Text>
                </Flex>
              </div>
            ))}
          </Flex>
        </RevealFx>
      </Column>

      {/* ═══ EXPERIENCE ═══ */}
      {about.work.display && (
        <Column fillWidth marginBottom="xl">
          <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
            {about.work.title}
          </Heading>
          <RevealFx translateY="16" delay={0.2}>
            <Column className={styles.timeline} fillWidth gap="l">
              <div className={styles.timelineLine} />
              {about.work.experiences.map((experience, index) => (
                <div
                  key={`${experience.company}-${experience.role}-${index}`}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineDot} />
                  <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Flex>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map((achievement: JSX.Element, i: number) => (
                      <Text as="li" variant="body-default-m" key={`${experience.company}-${i}`}>
                        {achievement}
                      </Text>
                    ))}
                  </Column>
                  {experience.images.length > 0 && (
                    <Flex fillWidth paddingTop="m" paddingLeft="40" wrap gap="12">
                      {experience.images.map((image: { src: string; alt: string; width: number; height: number }, i: number) => (
                        <Flex key={`${image.src}-${i}`} border="neutral-medium" radius="m" minWidth={image.width} height={image.height}>
                          <SmartImage enlarge radius="m" sizes={image.width.toString()} alt={image.alt} src={image.src} />
                        </Flex>
                      ))}
                    </Flex>
                  )}
                </div>
              ))}
            </Column>
          </RevealFx>
        </Column>
      )}

      {/* ═══ STUDIES ═══ */}
      {about.studies.display && (
        <Column fillWidth marginBottom="xl">
          <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
            {about.studies.title}
          </Heading>
          <RevealFx translateY="16" delay={0.3}>
            <Column fillWidth gap="l">
              {about.studies.institutions.map((institution, index) => (
                <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </RevealFx>
        </Column>
      )}

      {/* ═══ SKILLS ═══ */}
      {about.technical.display && (
        <Column fillWidth marginBottom="xl">
          <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="m">
            {about.technical.title}
          </Heading>
          <Grid columns={2} mobileColumns={1} fillWidth gap="16">
            {about.technical.skills.map((skill) => (
              <RevealFx key={skill.title} translateY="16" fillWidth>
                <div className={styles.skillCard}>
                  <Heading as="h3" variant="heading-strong-m" marginBottom="8">
                    {skill.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.images && skill.images.length > 0 && (
                    <div className={styles.skillImages}>
                      {skill.images.map((image: { src: string; alt: string; width: number; height: number }, i: number) => (
                        <Flex key={`${image.alt}-${i}`} border="neutral-medium" radius="m" fillWidth minWidth={image.width} height={image.height}>
                          <SmartImage enlarge radius="m" sizes={image.width.toString()} alt={image.alt} src={image.src} />
                        </Flex>
                      ))}
                    </div>
                  )}
                </div>
              </RevealFx>
            ))}
          </Grid>
        </Column>
      )}

      {/* ═══ QUOTE ═══ */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth marginBottom="xl" className={styles.quoteCard}>
          <Text variant="heading-strong-m" className={styles.quoteText}>
            &ldquo;Code is not just about syntax. It&apos;s about solving problems and building things that matter.&rdquo;
          </Text>
          <Text variant="body-default-s" className={styles.quoteAttribution} marginTop="m">
            — Bima Dev, FullStack Developer
          </Text>
        </Column>
      </RevealFx>

      {/* ═══ CTA SECTION ═══ */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth marginBottom="xl" className={styles.ctaSection}>
          <Heading variant="display-strong-s" marginBottom="8">
            Let&apos;s Connect
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I&apos;m always open to new opportunities and collaborations.
          </Text>
          <div className={styles.ctaSocials}>
            {heroSocials.map((item) => (
              <IconButton
                key={item.name}
                href={item.link}
                icon={item.icon}
                size="l"
                variant="secondary"
                tooltip={item.name}
              />
            ))}
          </div>
        </Column>
      </RevealFx>
    </Column>
  );
}
