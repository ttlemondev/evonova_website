'use client';

import React from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

/**
 * PackagesSection - Displays two recommended package options
 *
 * Design system:
 * - Background: bg-surface-soft
 * - Padding: py-section
 * - Two package cards with colored borders
 */

const packages = [
  {
    id: 'full-team',
    label: '全员提效型',
    tagColor: 'bg-block-lilac',
    borderColor: 'border-block-lilac',
    suitableFor: '研发部门全员(产品、测试、运维、开发)',
    goal: '让每个员工都能用 AI 提效,提升整个组织运营效率',
    services: [
      '第 1 周: 全员参加初级课程',
      '第 3 周: 开发团队参加中级课程',
      '持续 8 周: AI 编程辅导服务',
    ],
  },
  {
    id: 'elite-dev',
    label: '研发尖刀型',
    tagColor: 'bg-block-navy text-white',
    borderColor: 'border-block-navy',
    suitableFor: '纯开发团队,已有基础 AI 编程经验',
    goal: '深度聚焦,大幅提高代码产出效率与工程质量',
    services: [
      '课前: 自学初级课程',
      '第 1 周: 全员参加中级课程',
      '第 5 周: 全员参加高级课程',
      '持续 8 周: AI 编程辅导服务',
    ],
  },
];

const PackagesSection: React.FC = () => {
  return (
    <section
      id="packages"
      className="w-full bg-surface-soft py-section px-6"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Title */}
        <h2 className="text-display-lg text-center mb-xxl max-md:text-[36px] max-md:leading-[1.15]">
          根据您的团队情况,选择合适的套餐
        </h2>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`bg-white rounded-lg p-xl border-2 ${pkg.borderColor}`}
            >
              {/* Tag Label */}
              <span
                className={`inline-block px-sm py-xxs rounded-pill text-eyebrow uppercase mb-sm ${pkg.tagColor}`}
              >
                {pkg.label}
              </span>

              {/* Suitable For */}
              <p className="text-body mb-sm">
                <strong>适合:</strong> {pkg.suitableFor}
              </p>

              {/* Goal */}
              <p className="text-body mb-lg">
                <strong>目标:</strong> {pkg.goal}
              </p>

              {/* Service Combination Title */}
              <h3 className="text-card-title mb-md">
                服务组合
              </h3>

              {/* Service List */}
              <ul className="text-body-sm space-y-xs mb-xl list-none">
                {pkg.services.map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/contact">
                <Button
                  variant="primary"
                  className="w-full"
                  aria-label={`咨询 ${pkg.label} 方案`}
                >
                  咨询方案
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
