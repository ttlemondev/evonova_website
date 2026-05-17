import { Metadata } from 'next';
import CourseHero from '@/components/courses/CourseHero';
import CourseOutline from '@/components/courses/CourseOutline';
import CourseCTA from '@/components/courses/CourseCTA';

export const metadata: Metadata = {
  title: 'Claude Code 基础课程 - 熵序之间',
  description: '零基础入门，1 天时间用 Claude Code 从零构建完整的外卖点餐系统',
};

export default function CodingBasicCoursePage() {
  const outlineSections = [
    {
      title: 'Ch1 开场与激励',
      topics: [
        '了解学员背景与技术栈情况',
        '通过演示让学员直观体验 AI 编程的真实生产力',
        '编程生成动画和 PPT 展示',
        'Agentic 编程理念认知',
      ],
    },
    {
      title: 'Ch2 安装与环境',
      topics: [
        '完成 Claude Code 工具的安装与认证配置',
        '由 AI 自主选择技术栈并初始化全栈外卖项目框架',
        '原生安装器使用',
        'Anthropic 账号或 API Key 认证配置',
      ],
    },
    {
      title: 'Ch3 基础操作',
      topics: [
        '学习工具的基础命令与交互方式',
        '通过实战完成包含前端与后端的"菜单浏览页面"构建',
        '快捷键与常用斜杠命令速查',
        '基础提示技巧三原则',
      ],
    },
    {
      title: 'Ch4 项目配置',
      topics: [
        '学习利用规范约束 AI 行为，统一团队的业务规则与代码风格',
        '在规则指导下完成购物车功能',
        'CLAUDE.md 配置文件与 /init 命令',
        '五层配置体系',
      ],
    },
    {
      title: 'Ch5 上下文与模型',
      topics: [
        '学习 AI 工具的"内存"管理机制以及模型经济学',
        '利用高阶模式规划并实现复杂的下单及订单管理系统',
        '200K 上下文窗口管理与 /compact 清理',
        'Plan 模式使用技巧',
      ],
    },
    {
      title: 'Ch6 日常工作流初体验',
      topics: [
        '在完整的全栈应用上体验真实开发中的调试、重构与测试工作流',
        '实现订单状态流转与折扣计算功能',
        '自然语言 Debug 定位与修复问题',
        'Checkpointing 一键回滚',
      ],
    },
  ];

  return (
    <>
      <CourseHero
        tag="零基础"
        tagColor="#dceeb1"
        title="Claude Code 基础：从 0 到 1 构建完整应用"
        subtitle="让初级学员了解 Claude Code 的强大，用 Claude Code 开发一个简单的 MVP 级别应用"
        duration="1 天 / 8 小时"
        target="所有人，无需任何基础，对 AI 编程感兴趣的初学者"
        ctaText="立即报名"
        ctaHref="/contact"
      />
      <CourseOutline sections={outlineSections} />
      <CourseCTA />
    </>
  );
}
