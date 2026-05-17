'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CourseCTA() {
  return (
    <section className="w-full py-section bg-block-lime">
      <div className="mx-auto max-w-[1280px] px-lg md:px-xl text-center">
        {/* Title */}
        <h2 className="text-display-lg mb-md">准备好开始学习了吗？</h2>

        {/* Description */}
        <p className="text-headline mb-xxl">
          联系我们了解课程详情，获取专属学习方案
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <Button variant="primary">立即咨询</Button>
        </Link>
      </div>
    </section>
  );
}
