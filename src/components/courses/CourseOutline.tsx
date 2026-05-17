import React from 'react';
import Card from '@/components/ui/Card';

export interface OutlineSection {
  title: string;
  topics: string[];
}

export interface CourseOutlineProps {
  sections: OutlineSection[];
}

export default function CourseOutline({ sections }: CourseOutlineProps) {
  return (
    <section className="w-full py-section">
      <div className="mx-auto max-w-[1280px] px-lg md:px-xl">
        {/* Section title */}
        <h2 className="text-display-lg mb-xxl">课程大纲</h2>

        {/* Outline sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {sections.map((section, index) => (
            <Card key={index} variant="default">
              {/* Section title */}
              <h3 className="text-card-title mb-lg">{section.title}</h3>

              {/* Topics list */}
              <ul className="space-y-sm">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-body-sm flex items-start">
                    <span className="mr-xs mt-1 flex-shrink-0">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
