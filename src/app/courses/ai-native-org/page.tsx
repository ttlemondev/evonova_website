import { Metadata } from 'next';
import CourseHero from '@/components/courses/CourseHero';
import CourseOutline from '@/components/courses/CourseOutline';
import CourseCTA from '@/components/courses/CourseCTA';

export const metadata: Metadata = {
  title: 'AI 原生组织转型课程 - 熵序之间',
  description: '帮助企业完成"组织操作系统升级",从传统组织转向 AI 原生组织',
};

export default function AINavtiveOrgCoursePage() {
  const outlineSections = [
    {
      title: '模块一：重新理解运营 AI 化',
      topics: [
        '什么是运营 AI 化',
        '从应用使用者到工具创造者',
        '课堂练习：识别部门重复性任务',
      ],
    },
    {
      title: '模块二：AI 原生组织结构设计',
      topics: [
        '为什么 AI 化首先是组织问题',
        'AI 原生组织的五类核心角色',
        '组织结构从"职能型"走向"人机协同型"',
        '新型组织分工：人做判断，AI 做执行',
      ],
    },
    {
      title: '模块三：组织运营流程的 AI 化',
      topics: [
        '企业运营流程 AI 化的四个层级',
        '哪些流程最适合优先 AI 化',
        '组织运营 AI 化的核心场景',
      ],
    },
    {
      title: '模块四：从 SOP 到 Agent',
      topics: [
        '数字员工的本质',
        '从优秀员工经验到数字员工的五步法',
        'Agent 设计模板',
      ],
    },
    {
      title: '模块五：AI 化落地保障体系',
      topics: [
        '"资源 + 赋能 + 陪跑"三位一体',
        'AI 化落地的三类机制',
        'AI 化成功的关键指标',
      ],
    },
    {
      title: '模块六：企业 AI 原生组织路线图',
      topics: [
        '三阶段落地路径',
        '90 天行动计划',
      ],
    },
  ];

  return (
    <>
      <CourseHero
        tag="面向高管与业务负责人"
        tagColor="#c5b0f4"
        title="AI 原生组织：从组织结构到运营流程的 AI 化改造"
        subtitle="帮助企业完成「组织操作系统升级」，从传统组织转向 AI 原生组织"
        duration="2 天 / 16 小时"
        target="企业 CEO、创始人、总经理、业务部门负责人、数字化转型负责人"
        ctaText="预约咨询"
        ctaHref="/contact"
      />
      <CourseOutline sections={outlineSections} />
      <CourseCTA />
    </>
  );
}
