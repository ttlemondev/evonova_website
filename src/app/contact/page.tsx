import ColorBlock from '@/components/ui/ColorBlock';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-lg mb-6">
            开始您的 AI 原生组织之旅
          </h1>
          <p className="text-subhead">
            预约免费咨询,了解如何提升组织效能
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-12">
        <ColorBlock variant="lime">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline mb-8 text-center">联系我们</h2>
            <ContactForm />
          </div>
        </ColorBlock>
      </section>

      {/* Contact Information Section */}
      <section className="container mx-auto px-6 py-24 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-headline mb-12 text-center">其他联系方式</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-card-title mb-4">邮箱</h3>
              <p className="text-body mb-2">
                <a href="mailto:contact@entroder.com" className="text-primary hover:underline">
                  contact@entroder.com
                </a>
              </p>
              <p className="text-body-sm text-gray-600">
                工作日 24 小时内回复
              </p>
            </div>

            <div>
              <h3 className="text-card-title mb-4">企业微信</h3>
              <p className="text-body mb-2">
                扫码添加企业微信
              </p>
              <p className="text-body-sm text-gray-600">
                获取更多信息和即时咨询
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
