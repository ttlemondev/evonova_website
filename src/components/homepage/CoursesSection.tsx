'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COURSES } from '@/lib/constants';

/**
 * CoursesSection - Displays four course cards in 2x2 grid
 *
 * Design system:
 * - White background
 * - Padding: py-section
 * - Four course cards with details and CTA
 */

// Course data mapping with additional metadata
const courseData = [
  {
    ...COURSES[0],
    slug: 'ai-native-org',
    tag: '组织级',
    tagColor: 'bg-block-lilac',
    audience: '企业高管、业务负责人',
    target: '构建 AI 原生组织,实现 100 倍组织效能提升',
  },
  {
    ...COURSES[1],
    slug: 'coding-basic',
    tag: '初级',
    tagColor: 'bg-block-mint',
    audience: '零基础学员、产品经理、测试工程师',
    target: '0 到 1 生成 MVP 应用,掌握 AI 辅助开发基础',
  },
  {
    ...COURSES[2],
    slug: 'coding-intermediate',
    tag: '中级',
    tagColor: 'bg-block-cream',
    audience: '有基础的开发者、技术 Leader',
    target: '2X 提效,掌握完整 AI 编程生态',
  },
  {
    ...COURSES[3],
    slug: 'coding-advanced',
    tag: '高级',
    tagColor: 'bg-block-coral',
    audience: '资深开发者、架构师',
    target: '10X 提效,生产级项目实战',
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section
      id="courses"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="text-display-lg text-center mb-xxl max-md:text-[36px] max-md:leading-[1.15]">
          四门课程,覆盖组织到个人
        </h2>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {courseData.map((course) => (
            <Card key={course.id} className="bg-white border-hairline rounded-lg p-lg">
              {/* Tag */}
              <span
                className={`inline-block px-sm py-xxs rounded-pill text-eyebrow uppercase mb-sm ${course.tagColor}`}
              >
                {course.tag}
              </span>

              {/* Course Title */}
              <h3 className="text-card-title mb-xs">
                {course.title}
              </h3>

              {/* Duration */}
              <p className="text-body-sm text-gray-600 mb-sm">
                时长: {course.duration}
              </p>

              {/* Highlights List */}
              <ul className="text-body-sm space-y-xs mb-md list-none">
                {course.features.slice(0, 4).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              {/* Audience */}
              <p className="text-body-sm text-gray-600 mb-sm">
                <strong>适合:</strong> {course.audience}
              </p>

              {/* Target */}
              <div className="text-body bg-surface-soft rounded-md p-sm mb-md">
                <strong>目标:</strong> {course.target}
              </div>

              {/* CTA Button */}
              <Link href={`/courses/${course.slug}`}>
                <Button
                  variant="primary"
                  size="default"
                  className="w-full"
                  aria-label={`了解 ${course.title} 详情`}
                >
                  了解详情
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
