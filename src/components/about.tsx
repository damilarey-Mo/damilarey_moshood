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
          I&apos;m a result-driven Full Stack Web Developer and IT Specialist.
          With over 5 years of experience, I specialize in building scalable web
          Solutions and providing IT support Services that support business
          growth. I&apos;ve led successful web platform developments, upgrades
          and managements. I specialize in integrating advanced analytics, web
          performance tracking, and cybersecurity enhancements to help
          organizations stay ahead of the curve.
        </p>
        <p>
          My core stack includes React, Next.js, Node.js, MongoDB, and Tailwind
          CSS. with extensive experience in WordPress, Shopify, and modern
          e-commerce Solutions. Whether it’s optimizing digital operations or
          improving user experiences, I bring a problem-solving mindset and and
          business-oriented approach to every project. I’m open to opportunities
          where I can deliver value, lead innovations, and grow forward-thinking
          teams.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
