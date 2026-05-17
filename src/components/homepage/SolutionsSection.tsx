'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';
import { scrollToSection } from '@/lib/utils';

/**
 * SolutionsSection - Displays two product lines with value propositions
 *
 * Design system (DESIGN.md):
 * - White canvas background
 * - Padding: py-section (96px)
 * - Typography: text-display-lg for title, text-headline for subtitles, text-body-lg for lists
 * - Spacing: mb-xxl (48px) after title, space-y-xl (32px) between cards
 * - Color blocks: lilac and mint with rounded-lg (24px) and p-xxl (48px)
 * - Eyebrow labels: text-eyebrow (figmaMono uppercase)
 */
const SolutionsSection: React.FC = () => {
  return (
    <section
      id="solutions"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title - text-display-lg with mb-xxl */}
        <h2 className="text-display-lg text-ink text-center mb-xxl">
          双轮驱动,全面提升组织效能
        </h2>

        {/* Product Cards - stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* Card 1: AI 原生组织 - lilac color block */}
          <ColorBlock variant="lilac" className="rounded-lg p-xxl">
            {/* Eyebrow - text-eyebrow with mb-md */}
            <div className="text-eyebrow text-ink mb-md">
              PRODUCT LINE 01
            </div>

            {/* Title - text-display-lg with mb-sm */}
            <h3 className="text-display-lg text-ink mb-sm">
              AI 原生组织
            </h3>

            {/* Subtitle - text-headline with mb-lg */}
            <p className="text-headline text-ink mb-lg">
              企业级 AI 转型解决方案
            </p>

            {/* Value List - text-body-lg with space-y-sm and mb-xl */}
            <ul className="text-body-lg text-ink space-y-sm mb-xl list-none">
              <li>✓ 构建 AI 驱动的组织架构与工作流</li>
              <li>✓ 实现 100 倍组织效能提升</li>
              <li>✓ 全员 AI 能力培养与文化转型</li>
              <li>✓ 持续优化与效果评估体系</li>
            </ul>

            {/* CTA Button */}
            <Button
              variant="primary"
              onClick={() => window.location.href = '/courses/ai-native-org'}
              aria-label="了解 AI 原生组织详情"
            >
              了解详情
            </Button>
          </ColorBlock>

          {/* Card 2: AI 编程培训 - mint color block */}
          <ColorBlock variant="mint" className="rounded-lg p-xxl">
            {/* Eyebrow - text-eyebrow with mb-md */}
            <div className="text-eyebrow text-ink mb-md">
              PRODUCT LINE 02
            </div>

            {/* Title - text-display-lg with mb-sm */}
            <h3 className="text-display-lg text-ink mb-sm">
              AI 编程培训
            </h3>

            {/* Subtitle - text-headline with mb-lg */}
            <p className="text-headline text-ink mb-lg">
              从零基础到高级应用的完整课程体系
            </p>

            {/* Value List - text-body-lg with space-y-sm and mb-xl */}
            <ul className="text-body-lg text-ink space-y-sm mb-xl list-none">
              <li>✓ 零基础入门到高级进阶的完整路径</li>
              <li>✓ 实现 10 倍开发效率提升</li>
              <li>✓ 掌握 AI 辅助编程的核心技能</li>
              <li>✓ 真实项目实战与持续支持</li>
            </ul>

            {/* CTA Button */}
            <Button
              variant="primary"
              onClick={() => scrollToSection('courses')}
              aria-label="查看编程课程"
            >
              查看课程
            </Button>
          </ColorBlock>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
