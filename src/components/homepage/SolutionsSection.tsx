'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';
import { scrollToSection } from '@/lib/utils';

/**
 * SolutionsSection - Displays two product lines with value propositions
 *
 * Design system:
 * - White background
 * - Padding: py-section
 * - Two product cards in vertical stack
 * - Card 1: AI 原生组织 (lilac background)
 * - Card 2: AI 编程培训 (mint background)
 */
const SolutionsSection: React.FC = () => {
  return (
    <section
      id="solutions"
      className="w-full bg-canvas py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="text-display-lg text-center mb-xxl max-md:text-[36px] max-md:leading-[1.15]">
          双轮驱动,全面提升组织效能
        </h2>

        {/* Product Cards Stack */}
        <div className="space-y-xl">
          {/* Card 1: AI 原生组织 */}
          <ColorBlock variant="lilac" className="rounded-lg p-xxl">
            {/* Tag */}
            <div className="text-eyebrow mb-md">
              PRODUCT LINE 01
            </div>

            {/* Title */}
            <h3 className="text-display-lg mb-sm max-md:text-[36px] max-md:leading-[1.15]">
              AI 原生组织
            </h3>

            {/* Subtitle */}
            <p className="text-headline mb-lg max-md:text-[20px] max-md:leading-[1.4]">
              企业级 AI 转型解决方案
            </p>

            {/* Value List */}
            <ul className="text-body-lg space-y-sm mb-xl list-none">
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

          {/* Card 2: AI 编程培训 */}
          <ColorBlock variant="mint" className="rounded-lg p-xxl">
            {/* Tag */}
            <div className="text-eyebrow mb-md">
              PRODUCT LINE 02
            </div>

            {/* Title */}
            <h3 className="text-display-lg mb-sm max-md:text-[36px] max-md:leading-[1.15]">
              AI 编程培训
            </h3>

            {/* Subtitle */}
            <p className="text-headline mb-lg max-md:text-[20px] max-md:leading-[1.4]">
              从零基础到高级应用的完整课程体系
            </p>

            {/* Value List */}
            <ul className="text-body-lg space-y-sm mb-xl list-none">
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
