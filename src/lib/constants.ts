// Site configuration and constants

export const SITE_CONFIG = {
  name: '熵序之间',
  englishName: 'Entroder',
  slogan: '让每个人都能驾驭 AI',
  description: '专注于 AI 原生组织转型与个人 AI 能力提升的专业培训机构',
  contact: {
    email: 'contact@entroder.com',
    phone: '+86 138-0000-0000',
    wechat: 'entroder-ai',
  },
  social: {
    github: 'https://github.com/entroder',
    twitter: 'https://twitter.com/entroder',
    linkedin: 'https://linkedin.com/company/entroder',
  },
} as const;

export const NAV_LINKS = [
  { label: '首页', href: '#hero' },
  { label: '课程体系', href: '#courses' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
] as const;

export const COURSES = [
  {
    id: 'ai-native-org',
    title: 'AI 原生组织转型',
    subtitle: '企业级 AI 转型解决方案',
    description: '帮助企业构建 AI 原生的组织架构、工作流程和文化体系',
    duration: '3-6 个月',
    level: '企业定制',
    features: [
      'AI 战略规划与落地路径设计',
      '组织架构与流程重构',
      'AI 工具链选型与部署',
      '全员 AI 能力培训',
      '持续优化与效果评估',
    ],
    price: '面议',
  },
  {
    id: 'basic',
    title: 'AI 基础应用课程',
    subtitle: '零基础入门 AI 工具',
    description: '掌握主流 AI 工具的使用方法，提升日常工作效率',
    duration: '4 周',
    level: '入门级',
    features: [
      'ChatGPT、Claude 等对话式 AI 工具',
      'Midjourney、Stable Diffusion 图像生成',
      'AI 辅助写作与内容创作',
      '提示词工程基础',
      '实战项目：AI 辅助工作流搭建',
    ],
    price: '¥2,999',
  },
  {
    id: 'intermediate',
    title: 'AI 进阶实战课程',
    subtitle: '深度应用与流程优化',
    description: '学习 AI 与专业工具的深度集成，构建自动化工作流',
    duration: '8 周',
    level: '进阶级',
    features: [
      'AI 编程助手（Cursor、GitHub Copilot）',
      'AI Agent 开发与应用',
      '自动化工作流设计',
      'RAG 检索增强生成技术',
      '实战项目：智能助手开发',
    ],
    price: '¥5,999',
  },
  {
    id: 'advanced',
    title: 'AI 高级架构课程',
    subtitle: '企业级 AI 解决方案',
    description: '掌握 AI 系统架构设计，构建企业级 AI 应用',
    duration: '12 周',
    level: '高级',
    features: [
      'LLM 微调与部署',
      '企业级 AI 架构设计',
      '多模态 AI 应用开发',
      'AI 安全与隐私保护',
      '实战项目：企业 AI 平台搭建',
    ],
    price: '¥12,999',
  },
] as const;

export const PROBLEMS = [
  {
    id: 'efficiency',
    title: '效率焦虑',
    description: '看着别人用 AI 提升 10 倍效率，自己却不知从何下手？',
    icon: '⚡',
  },
  {
    id: 'learning',
    title: '学习困境',
    description: 'AI 工具层出不穷，碎片化学习难以形成系统能力？',
    icon: '📚',
  },
  {
    id: 'transformation',
    title: '转型迷茫',
    description: '企业想要 AI 转型，但不知道如何规划和落地？',
    icon: '🎯',
  },
] as const;
