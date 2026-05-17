'use client';

import React from 'react';
import Card from '@/components/ui/Card';

/**
 * ServicesSection - Displays two service models with positioning
 *
 * Design system:
 * - Background: bg-surface-soft
 * - Padding: py-section
 * - Two service cards in horizontal layout
 * - Card 1: 系统化培训 (保住下限)
 * - Card 2: AI 编程辅导 (拔高上限)
 */
const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="text-display-lg text-center mb-md max-md:text-[36px] max-md:leading-[1.15]">
          体系化赋能与实战陪跑
        </h2>

        {/* Subtitle */}
        <p className="text-headline text-center mt-md mb-xxl max-md:text-[20px] max-md:leading-[1.4]">
          一手保住下限,一手拔高上限
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {/* Card 1: 系统化培训 */}
          <Card className="bg-white border-hairline rounded-lg p-lg">
            {/* Icon */}
            <div className="text-5xl mb-sm" role="img" aria-label="Shield icon">
              🛡️
            </div>

            {/* Label */}
            <div className="text-eyebrow uppercase mb-xs">
              SERVICE 01
            </div>

            {/* Positioning Title */}
            <h3 className="text-card-title mb-sm">
              抬高组织下限
            </h3>

            {/* Features List */}
            <ul className="text-body space-y-xs mb-md list-none">
              <li>• 阶梯式递进,聚焦主干知识</li>
              <li>• 小循环设计,完整闭环</li>
              <li>• 可复制的标准化赋能</li>
            </ul>

            {/* Delivery Format */}
            <div className="text-body-sm bg-surface-soft rounded-md p-sm mb-md">
              <strong>交付形态:</strong> 2-3 天集中培训,建议单场不超过 15 人
            </div>

            {/* Value Statement */}
            <p className="text-body">
              系统化培训确保团队掌握核心方法论,建立统一的 AI 能力基线
            </p>
          </Card>

          {/* Card 2: AI 编程辅导 */}
          <Card className="bg-white border-hairline rounded-lg p-lg">
            {/* Icon */}
            <div className="text-5xl mb-sm" role="img" aria-label="Rocket icon">
              🚀
            </div>

            {/* Label */}
            <div className="text-eyebrow uppercase mb-xs">
              SERVICE 02
            </div>

            {/* Positioning Title */}
            <h3 className="text-card-title mb-sm">
              拔高团队上限
            </h3>

            {/* Features List */}
            <ul className="text-body space-y-xs mb-md list-none">
              <li>• 每天专属群响应</li>
              <li>• 每周 2 次视频会诊</li>
              <li>• 举一反三,深入业务</li>
            </ul>

            {/* Delivery Format */}
            <div className="text-body-sm bg-surface-soft rounded-md p-sm mb-md">
              <strong>交付形态:</strong> 持续陪跑服务,通常 8 周起
            </div>

            {/* Value Statement */}
            <p className="text-body">
              AI 编程辅导解决实战中的不确定性难题,沉淀团队独家经验
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
