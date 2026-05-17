'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { PROBLEMS } from '@/lib/constants';

/**
 * ProblemsSection - Displays common challenges faced by organizations
 *
 * Design system:
 * - Background: bg-surface-soft
 * - Padding: py-section
 * - Grid layout: 1 column mobile, 2 columns tablet, 3 columns desktop
 * - Cards: white background with icon, title, and description
 */
const ProblemsSection: React.FC = () => {
  return (
    <section
      id="problems"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="text-display-lg text-center mb-xxl max-md:text-[36px] max-md:leading-[1.15]">
          您的组织是否面临这些挑战?
        </h2>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {PROBLEMS.map((problem) => (
            <Card
              key={problem.id}
              variant="default"
              className="flex flex-col"
            >
              {/* Icon */}
              <div className="text-5xl mb-sm" role="img" aria-label={problem.title}>
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-card-title mb-sm">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-body text-ink/80">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
