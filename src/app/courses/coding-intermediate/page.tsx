import { Metadata } from 'next';
import CourseHero from '@/components/courses/CourseHero';
import CourseOutline from '@/components/courses/CourseOutline';
import CourseCTA from '@/components/courses/CourseCTA';

export const metadata: Metadata = {
  title: '完整生态与团队自动化协作 - 熵序之间',
  description: '从"个人单兵作战"升级为"团队协同规范"，认知并掌握完整的 Claude Code 扩展生态',
};

export default function CodingIntermediateCoursePage() {
  const outlineSections = [
    {
      title: '模块一：SOP 标准化规范 (Skill)',
      topics: [
        '解决团队成员"提示词质量参差不齐"的问题',
        '将优秀的操作流程固化为可重复调用的标准 SOP',
        '自定义 Skill 编写',
        '动态上下文注入',
      ],
    },
    {
      title: '模块二：AI 代理与自动化检查 (Agent & Hook)',
      topics: [
        '让 AI 分身处理安全审查',
        '在代码修改、执行高危命令前后触发自动化拦截与代码测试',
        'Sub Agent 专项审查代理搭建',
        '三种自动化钩子',
      ],
    },
    {
      title: '模块三：配置体系与插件分发 (Plugin)',
      topics: [
        '梳理个人、项目与全局的三层配置体系',
        '将定制好的团队工具链打包为插件，实现新员工"一键入职"',
        '三层 Settings 优先级覆盖',
        'Plugin 目录结构与 plugin.json',
      ],
    },
    {
      title: '模块四：规范驱动开发 (Spec-Kit)',
      topics: [
        '抛弃随意的口头提示词',
        '学习用结构化的 PRD 规范文档驱动 AI 生成高质量代码',
        'Spec-Kit 五步法',
        'BMAD-Method 多角色专家开发框架认知',
      ],
    },
    {
      title: '模块五：打破边界的外部集成 (MCP Server)',
      topics: [
        '为 AI 接入"USB 接口"',
        '让 AI 突破本地限制，直接读取 GitHub Issue、查询数据库并自动提交 PR',
        'MCP 原理与三种作用域',
        '集成 GitHub MCP、集成 SQLite MCP',
      ],
    },
    {
      title: '模块六：CI/CD 流水线与前沿探索',
      topics: [
        '彻底剥离人工点击，将 AI 代码审查接入 Git 流水线',
        '拓展学习多智能体并行协作的未来形态',
        'Headless 无头模式脚本化调用',
        'Agent Teams 并发协作',
      ],
    },
  ];

  return (
    <>
      <CourseHero
        tag="扩展实战"
        tagColor="#c8e6cd"
        title="完整生态与团队自动化协作"
        subtitle="从「个人单兵作战」升级为「团队协同规范」，认知并掌握完整的 Claude Code 扩展生态"
        duration="2 天 / 16 小时"
        target="有 2-8 周实际使用经验的开发者，希望将 AI 编程应用在实际项目中的团队"
        ctaText="预约咨询"
        ctaHref="/contact"
      />
      <CourseOutline sections={outlineSections} />
      <CourseCTA />
    </>
  );
}
