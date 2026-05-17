import Link from 'next/link';
import Button from '@/components/ui/Button';
import ColorBlock from '@/components/ui/ColorBlock';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg mb-6">
            熵序之间 Entroder
          </h1>
          <p className="text-subhead mb-8">
            构建 AI 原生组织,释放百倍生产力
          </p>
          <p className="text-body-lg max-w-3xl mx-auto">
            熵序之间 (Entroder) 是一家专注于 AI 原生组织建设和 AI 编程培训的企业培训公司。我们致力于帮助组织和个人通过 AI 技术实现效率的质的飞跃,不仅提升开发效率,更重要的是提升整个组织的运营效率。
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="lilac">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-headline mb-8">使命与愿景</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-card-title mb-3">使命</h3>
                <p className="text-body-lg">
                  让 AI 能力从个人技巧转化为组织生产力
                </p>
              </div>

              <div>
                <h3 className="text-card-title mb-3">愿景</h3>
                <p className="text-body-lg">
                  成为 AI 原生组织建设的领导者
                </p>
              </div>
            </div>
          </div>
        </ColorBlock>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-headline mb-12 text-center">核心价值观</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-card-title mb-3">体系化</h3>
              <p className="text-body">
                提供完整的方法论,而非碎片化技巧
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-card-title mb-3">实战化</h3>
              <p className="text-body">
                不只是培训,更有持续陪跑
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-card-title mb-3">效果导向</h3>
              <p className="text-body">
                追求可衡量的效率提升
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline mb-6">开始您的 AI 原生组织之旅</h2>
          <p className="text-body-lg mb-8">
            联系我们,了解如何通过 AI 技术提升组织效能
          </p>
          <Link href="/contact">
            <Button variant="primary">联系我们</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
