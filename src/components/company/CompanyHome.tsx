import Image from 'next/image';
import CompanyNav from './CompanyNav';
import Approach from './Approach';
import PageMotion from './PageMotion';
import { AppleStore, Arrow, BrandMark, PlayStore } from './Icons';
import { company, products } from './company-data';
import styles from './company.module.css';

export default function CompanyHome() {
  return <div className={styles.site} id="top">
    <a className={styles.skipLink} href="#main">Skip to content</a>
    <CompanyNav />
    <main id="main">
      <section id="hero" className={`${styles.container} ${styles.hero}`} aria-labelledby="hero-heading">
        <div className={styles.heroIntro}>
          <div><h1 id="hero-heading">Intelligence,<br /><span>made everyday.</span></h1></div>
          <div className={styles.heroDescription}><p>We turn the possibilities of AI into apps that feel natural. Built to spark creativity, support wellbeing, and make more of everyday life.</p><a className={styles.primaryButton} href="#products">Explore our products<Arrow /></a></div>
        </div>
        <div className={styles.heroCanvas}>
          <div className={styles.canvasTop}><span>THE SPACE BETWEEN IDEAS &amp; EVERYDAY LIFE</span></div>
          <picture>
            <source media="(max-width: 600px)" srcSet="/images/intelligence-form-mobile.svg" />
            {/* Art-directed SVGs use picture so only the matching composition is downloaded. */}
            <img src="/images/intelligence-form.svg" alt="" width="1280" height="550" fetchPriority="high" className={styles.sculpture} />
          </picture>
          <div className={styles.canvasCopy}><p>A little more<br />possibility.</p><span className={styles.canvasSub}>Powerful underneath. Effortless in your hands.</span></div>
          <div className={styles.canvasProducts}>
            <a href="#pokevid"><Image src={products.pokevid.icon} alt="" width={40} height={40} /><span>PokeVid<small>Imagine. Create.</small></span><Arrow diagonal /></a>
            <a href="#ipulse"><Image src={products.ipulse.icon} alt="" width={40} height={40} /><span>iPulse<small>Pause. Tune in.</small></span><Arrow diagonal /></a>
          </div>
          <div className={styles.canvasIndex} aria-hidden="true">EVONOVA / APPLIED INTELLIGENCE</div>
        </div>
        <div className={styles.heroFoot}><span>From emerging technology to everyday experiences.</span><div><span>APPLIED AI</span><i /><span>PRODUCT DESIGN</span><i /><span>MOBILE ENGINEERING</span></div></div>
      </section>

      <section id="products" className={`${styles.container} ${styles.products}`} aria-labelledby="products-heading">
        <div className={styles.sectionHeading} data-reveal><div><h2 id="products-heading">Different possibilities.<br />The same thoughtful craft.</h2></div><p>Purpose-built apps.<br />Ready for the way you live.</p></div>
        <div className={styles.productGrid}>
          <article className={styles.productCard} id="pokevid" data-reveal>
            <div className={`${styles.productVisual} ${styles.pokeVisual}`}>
              <div className={styles.productVisualLabel}><span><span className={styles.tinyDot} />CREATIVITY, IN MOTION</span></div>
              <div className={styles.pokeWord} aria-hidden="true">What if?</div>
              <div className={`${styles.phone} ${styles.phoneBack}`}><Image src="/images/products/pokevid-preview.webp" alt="PokeVid photo animation template preview" width={526} height={1052} sizes="220px" /></div>
              <div className={`${styles.phone} ${styles.phoneFront}`}><Image src="/images/products/pokevid-preview-2.webp" alt="PokeVid app showing a skiing video template" width={526} height={1052} sizes="240px" /></div>
              <div className={styles.visualTag}><span aria-hidden="true">✳</span> One idea. New possibilities.</div>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productIdentity}><Image src={products.pokevid.icon} alt="PokeVid app icon" width={52} height={52} /><div><h3>PokeVid</h3><span>AI VIDEO &amp; IMAGE CREATION</span></div><span className={styles.platform}>Android</span></div>
              <h4>Give your imagination a little motion.</h4><p>Turn a prompt into a video, bring a photo to life, or explore a new visual style. PokeVid makes AI-powered creation feel approachable.</p>
              <ul className={styles.featureTags}><li>Text to video</li><li>Photo animation</li><li>Creative templates</li></ul>
              <a className={styles.storeLink} href={products.pokevid.store} target="_blank" rel="noopener noreferrer"><PlayStore />Explore on Google Play<Arrow diagonal /><span className={styles.srOnly}> (opens in a new tab)</span></a>
            </div>
          </article>
          <article className={styles.productCard} id="ipulse" data-reveal="later">
            <div className={`${styles.productVisual} ${styles.pulseVisual}`}>
              <div className={styles.productVisualLabel}><span><span className={styles.tinyDot} />A MOMENT FOR YOURSELF</span></div>
              <div className={styles.pulseOrbit} aria-hidden="true"><i /><i /><i /></div>
              <div className={styles.pulseWords} aria-hidden="true">Find your<br /><em>rhythm.</em></div>
              <div className={styles.pulseScreenshot}><Image src="/images/products/ipulse-preview-2.webp" alt="iPulse App Store preview: fingertip heart rate measurement using the iPhone camera" width={600} height={1300} sizes="(max-width: 700px) 200px, 250px" /></div>
              <div className={styles.pulseNote}><Image src={products.ipulse.icon} alt="" width={38} height={38} /><span>Small habits.<br /><strong>More mindful days.</strong></span></div>
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productIdentity}><Image src={products.ipulse.icon} alt="iPulse app icon" width={52} height={52} /><div><h3>iPulse</h3><span>EVERYDAY WELLBEING</span></div><span className={styles.platform}>iPhone</span></div>
              <h4>A closer connection to your everyday.</h4><p>Check your heart rate with your iPhone camera, keep up with healthy habits, and make space for a more mindful daily routine.</p>
              <ul className={styles.featureTags}><li>Heart rate</li><li>Habit tracking</li><li>Emotional wellbeing</li></ul>
              <a className={styles.storeLink} href={products.ipulse.store} target="_blank" rel="noopener noreferrer"><AppleStore />Explore on the App Store<Arrow diagonal /><span className={styles.srOnly}> (opens in a new tab)</span></a>
              <p className={styles.healthNote}>For personal wellness and informational use. Not a substitute for professional medical advice.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="approach" className={styles.approach} aria-labelledby="approach-heading">
        {/* Retain published bookmarks without adding visible training-site navigation. */}
        <span id="solutions" className={styles.legacyAnchor} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.sectionHeading} data-reveal><div><h2 id="approach-heading">Serious engineering.<br /><span>Simple experiences.</span></h2></div><p>We bring AI, mobile engineering and product design together around a clear purpose.</p></div>
          <Approach />
          <div className={styles.approachBottom}><span><BrandMark />Built with intent. Refined with care.</span><span>FROM FIRST PRINCIPLE TO FINAL PIXEL</span></div>
        </div>
      </section>

      <section id="company" className={`${styles.container} ${styles.company}`} aria-labelledby="company-heading">
        <div className={styles.companyIntro}><span className={styles.companyLocation}><span className={styles.statusDot} />BASED IN HONG KONG.<br />BUILDING FOR EVERYDAY LIFE.</span></div>
        <div className={styles.companyStory} data-reveal><h2 id="company-heading">Technology moves fast.<br />We make it <span>mean something.</span></h2><div className={styles.companyColumns}><p>We are {company.legalName}, a Hong Kong AI company building apps around real human needs. We bring product thinking, design and engineering together to make new technology useful beyond the demo.</p><p>From creative expression to personal wellbeing, our products explore a shared idea: powerful technology should feel like a natural part of your day.</p></div><a href="#contact" className={styles.textLink}>Get to know us<Arrow diagonal /></a></div>
      </section>

      <section id="contact" className={`${styles.container} ${styles.contact}`} aria-labelledby="contact-heading">
        <div className={styles.contactTop}><span>HONG KONG ROOTS. EVERYDAY POSSIBILITIES.</span></div>
        <div className={styles.contactMain} data-reveal><h2 id="contact-heading">Built in Hong Kong.<br /><span>Made for everyday.</span></h2>{company.email && <a className={styles.contactArrow} href={`mailto:${company.email}`} aria-label={`Email ${company.name} at ${company.email}`}><Arrow diagonal /></a>}</div>
        <div className={styles.contactDetails} data-reveal><p>{company.legalName}<br />{company.location}</p><div>{company.email && <a href={`mailto:${company.email}`}>{company.email}<Arrow diagonal /></a>}{company.phone && <a href={company.phoneHref}>{company.phone}<Arrow diagonal /></a>}</div></div>
      </section>
    </main>
    <footer className={`${styles.container} ${styles.footer}`}><div className={styles.footerTop}><a className={styles.brand} href="#top" aria-label="EVONOVA home"><BrandMark />EVONOVA</a><span>Intelligence, made everyday.</span></div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} {company.legalName} All rights reserved.</span><a className={styles.backToTop} href="#top">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    <PageMotion />
  </div>;
}
