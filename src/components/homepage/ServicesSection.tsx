'use client';

import React from 'react';
import Card from '@/components/ui/Card';

/**
 * ServicesSection - Displays two service models with positioning
 *
 * Design system (DESIGN.md):
 * - Background: bg-surface-soft (off-white)
 * - Padding: py-section (96px)
 * - Typography: text-display-lg for title, text-headline for subtitle, text-card-title for card titles
 * - Spacing: mb-md (16px), mb-xxl (48px), gap-xl (32px)
 * - Cards: white background with rounded-lg (24px) and p-lg (24px)
 * - Eyebrow labels: text-eyebrow (figmaMono uppercase)
 * - No emojis as icons (violates DESIGN.md)
 */
const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title - text-display-lg with mb-md */}
        <h2 className="text-display-lg text-ink text-center mb-md">
          体系化赋能与实战陪跑
        </h2>

        {/* Subtitle - text-headline with mt-md and mb-xxl */}
        <p className="text-headline text-ink text-center mt-md mb-xxl">
          一手保住下限,一手拔高上限
        </p>

        {/* Service Cards Grid - gap-xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Card 1: 系统化培训 */}
          <Card className="bg-canvas border border-hairline rounded-lg p-lg">
            {/* Eyebrow - text-eyebrow with mb-xs */}
            <div className="text-eyebrow text-ink mb-xs">
              SERVICE 01
            </div>

            {/* Positioning Title - text-card-title with mb-sm */}
            <h3 className="text-card-title text-ink mb-sm">
              抬高组织下限
            </h3>

            {/* Features List - text-body with space-y-xs and mb-md */}
            <ul className="text-body text-ink space-y-xs mb-md list-none">
              <li>• 阶梯式递进,聚焦主干知识</li>
              <li>• 小循环设计,完整闭环</li>
              <li>• 可复制的标准化赋能</li>
            </ul>

            {/* Delivery Format - text-body-sm with mb-md */}
            <div className="text-body-sm text-ink bg-surface-soft rounded-md p-sm mb-md">
              <strong>交付形态:</strong> 2-3 天集中培训,建议单场不超过 15 人
            </div>

            {/* Value Statement - text-body */}
            <p className="text-body text-ink">
              系统化培训确保团队掌握核心方法论,建立统一的 AI 能力基线
            </p>
          </Card>

          {/* Card 2: AI 编程辅导 */}
          <Card className="bg-canvas border border-hairline rounded-lg p-lg">
            {/* Eyebrow - text-eyebrow with mb-xs */}
            <div className="text-eyebrow text-ink mb-xs">
              SERVICE 02
            </div>

            {/* Positioning Title - text-card-title with mb-sm */}
            <h3 className="text-card-title text-ink mb-sm">
              拔高团队上限
            </h3>

            {/* Features List - text-body with space-y-xs and mb-md */}
            <ul className="text-body text-ink space-y-xs mb-md list-none">
              <li>• 每天专属群响应</li>
              <li>• 每周 2 次视频会诊</li>
              <li>• 举一反三,深入业务</li>
            </ul>

            {/* Delivery Format - text-body-sm with mb-md */}
            <div className="text-body-sm text-ink bg-surface-soft rounded-md p-sm mb-md">
              <strong>交付形态:</strong> 持续陪跑服务,通常 8 周起
            </div>

            {/* Value Statement - text-body */}
            <p className="text-body text-ink">
              AI 编程辅导解决实战中的不确定性难题,沉淀团队独家经验
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
