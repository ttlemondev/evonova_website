import Link from 'next/link';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';
import PackagesSection from '@/components/homepage/PackagesSection';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg mb-6">
            体系化赋能与实战陪跑
          </h1>
          <p className="text-subhead">
            一手保住下限,一手拔高上限
          </p>
        </div>
      </section>

      {/* Training Service Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="lilac">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline mb-6">系统化培训</h2>
            <p className="text-body-lg mb-8">
              抬高组织下限,建立可复制的标准化赋能体系
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-card-title mb-3">核心特点</h3>
                <ul className="space-y-2 text-body">
                  <li>• 阶梯式递进,聚焦主干知识</li>
                  <li>• 小循环设计,完整闭环</li>
                  <li>• 理论与实践结合</li>
                </ul>
              </div>

              <div>
                <h3 className="text-card-title mb-3">交付形态</h3>
                <p className="text-body">
                  2-3 天集中培训,建议单场不超过 15 人
                </p>
              </div>

              <div>
                <h3 className="text-card-title mb-3">核心价值</h3>
                <p className="text-body">
                  可复制的标准化赋能,确保团队成员掌握核心方法论
                </p>
              </div>
            </div>
          </div>
        </ColorBlock>
      </section>

      {/* Consulting Service Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="mint">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline mb-6">AI 编程辅导</h2>
            <p className="text-body-lg mb-8">
              拔高团队上限,解决不确定性难题
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-card-title mb-3">核心特点</h3>
                <ul className="space-y-2 text-body">
                  <li>• 每天专属群响应</li>
                  <li>• 每周 2 次视频会诊</li>
                  <li>• 举一反三,深入业务</li>
                </ul>
              </div>

              <div>
                <h3 className="text-card-title mb-3">交付形态</h3>
                <p className="text-body">
                  持续陪跑服务,通常 8 周起
                </p>
              </div>

              <div>
                <h3 className="text-card-title mb-3">核心价值</h3>
                <p className="text-body">
                  解决不确定性难题,沉淀独家经验
                </p>
              </div>
            </div>
          </div>
        </ColorBlock>
      </section>

      {/* Why Both Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-headline mb-8 text-center">为什么两者都需要</h2>

          <div className="space-y-6 text-body-lg">
            <p>
              • 缺少培训,辅导会沦为"低效客服"
            </p>
            <p>
              • 缺少辅导,培训容易"落地受阻"
            </p>
            <p>
              • 真正的组织级闭环需要两者结合
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <PackagesSection />

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline mb-6">开始您的 AI 原生组织之旅</h2>
          <p className="text-body-lg mb-8">
            联系我们,了解如何选择合适的服务组合
          </p>
          <Link href="/contact">
            <Button variant="primary">联系我们</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
