import { Metadata } from 'next';
import CourseHero from '@/components/courses/CourseHero';
import CourseOutline from '@/components/courses/CourseOutline';
import CourseCTA from '@/components/courses/CourseCTA';

export const metadata: Metadata = {
  title: '规模化生产与代码信任构建 - EVONOVA',
  description: '超越常规工具使用，重点解决 AI Coding 在规模化开发和代码信任度方面的深水区挑战',
};

export default function CodingAdvancedCoursePage() {
  const outlineSections = [
    {
      title: '专题一：遗留代码维护与破局',
      topics: [
        '如何让 AI 快速接手历史包袱沉重的真实项目',
        '针对没有文档、没有测试的老旧项目',
        '利用 AI 快速进行上下文摸底、依赖关系梳理',
        '安全地进行修改与扩展',
      ],
    },
    {
      title: '专题二：大型项目重构实战',
      topics: [
        '如何借助 AI "指挥千军万马"',
        '将错综复杂的"意大利面代码库"重构成清晰分层架构',
        '大规模代码重构的 AI 提示策略',
        '分步校验方法',
      ],
    },
    {
      title: '专题三：AI 友好架构设计',
      topics: [
        '怎样的架构设计最符合"AI 的脾气"',
        '设计出能让 AI 理解得更准、改得更稳的代码结构',
        '易于 AI 代理拆解与并行生成的模块化边界设计',
      ],
    },
    {
      title: '专题四：TDD 工作流进阶',
      topics: [
        '如何建立对 AI 产出代码的绝对信任',
        '超越初级的红绿重构，针对复杂业务逻辑制定测试策略',
        '通过严格的测试驱动开发 (TDD) 高阶循环',
        '用测试代码为 AI 挂上"安全网"',
      ],
    },
    {
      title: '专题五：安全审查与质量防御',
      topics: [
        '规模化生成代码后，如何保障系统级安全',
        '结合 OWASP Top 10 等行业安全标准',
        '定制深度的系统级安全审查提示词模板',
        '建立企业级的防线',
      ],
    },
    {
      title: '专题六：复杂团队协作与并发冲突治理',
      topics: [
        '当团队中每个人都使用 AI 批量生成代码时，如何避免"代码踩踏"',
        '利用规范驱动进行前置任务边界划分',
        'AI 时代的团队 Git 分支策略',
        '防冲突最佳实践',
      ],
    },
    {
      title: '专题七：数字员工体系与极致人效组织',
      topics: [
        '如何突破单人开发瓶颈，真正实现"10 个人干 100 个人的活"',
        'AI 时代的组织结构演进',
        '运用多智能体团队搭建全自动的"数字员工体系"',
        '将 AI 从"代码助手"升级为"独立产研单元"',
      ],
    },
    {
      title: '专题八：自动化部署与生产级安全护栏',
      topics: [
        '如何放心让 AI 参与甚至主导自动化部署',
        '构建人机协同的最终信任防线',
        '将 AI 深度集成到 CI/CD 部署流水线中',
        '设置自动化测试拦截、自动化合规审计等"硬护栏"',
      ],
    },
  ];

  return (
    <>
      <CourseHero
        tag="规模化生产"
        tagColor="#efd4d4"
        title="规模化生产与代码信任构建"
        subtitle="超越常规工具使用，重点解决 AI Coding 在规模化开发和代码信任度方面的深水区挑战"
        duration="2 天 / 16 小时"
        target="核心技术骨干，4-16 周实战经验，需要解决大型项目、遗留代码、团队协作等深水区问题的技术负责人"
        ctaText="申请报名"
        ctaHref="/contact"
      />
      <CourseOutline sections={outlineSections} />
      <CourseCTA />
    </>
  );
}
