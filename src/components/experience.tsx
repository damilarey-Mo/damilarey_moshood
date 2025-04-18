'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Experience"
        content="My Journey of Proven Excellence in IT & Web Solutions"
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {experiencesData.map(
          ({ title, description, location, date, keyContributions }) => (
            <VerticalTimelineElement
              key={title}
              visible={inView}
              contentStyle={{
                background: 'hsl(var(--secondary))',
                boxShadow: 'none',
                padding: '20px',
              }}
              contentArrowStyle={{ display: 'none' }}
              date={date}
              dateClassName="!font-medium text-muted-foreground"
              icon={<Icons.briefcase />}
              iconStyle={{
                boxShadow: 'none',
                border: '2px solid hsl(var(--foreground)',
              }}
            >
              <h3 ref={ref} className="font-medium">
                {title}
              </h3>
              <p className="!mt-0 !font-normal">{location}</p>
              <p className="text-muted-foreground !mt-1 !font-normal">
                {description}
              </p>

              {keyContributions && keyContributions.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold">Key Contributions:</h4>
                  <ul className="text-muted-foreground mt-1 list-inside list-disc text-sm">
                    {keyContributions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
    </section>
  );
};
