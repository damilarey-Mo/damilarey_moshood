'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m a passionate Full Stack Web Developer and IT Manager based in
          Nigeria. With over 5 years of experience, I specialize in building
          robust, scalable web applications and managing IT systems that support
          business growth. I’ve led successful web platform upgrades,
          implemented advanced analytics, and overseen cybersecurity
          improvements for organizations.
        </p>
        <p>
          My core stack includes React, Next.js, Node.js, MongoDB, and Tailwind
          CSS. I’m also experienced in WordPress, Elementor, and modern DevOps
          tools. Whether it’s optimizing digital operations or crafting seamless
          user experiences, I bring a problem-solving mindset and
          business-oriented approach to every project. I’m open to opportunities
          where I can deliver value, lead innovations, and grow with
          forward-thinking teams.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
