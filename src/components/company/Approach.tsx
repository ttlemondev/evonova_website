import { Arrow } from './Icons';
import styles from './company.module.css';

export default function Approach() {
  return (
    <div className={styles.capabilities}>
      <article className={styles.capability} data-reveal>
        <p className={styles.capabilityLabel}>GENERATIVE MEDIA</p>
        <h3>From a prompt<br />to a moving image.</h3>
        <p className={styles.capabilityDescription}>
          PokeVid brings text-to-video, photo animation and visual styles into
          one creative workflow. We connect generative models with an interface
          that helps people get from an idea to something they can share.
        </p>
        <p className={styles.capabilityDetail}>Model integration · Image &amp; video generation · Creative tools</p>
        <a className={styles.capabilityProduct} href="#pokevid">Explore PokeVid <Arrow /></a>
      </article>
      <article className={styles.capability} data-reveal="later">
        <p className={styles.capabilityLabel}>MOBILE EXPERIENCES</p>
        <h3>A familiar device.<br />A more useful experience.</h3>
        <p className={styles.capabilityDescription}>
          iPulse uses the iPhone camera for heart-rate measurement and brings
          habit tracking into a daily routine. Its focus is the connection
          between device capabilities, clear information and everyday use.
        </p>
        <p className={styles.capabilityDetail}>Camera-based measurement · Habit tracking · Mobile design</p>
        <a className={styles.capabilityProduct} href="#ipulse">Explore iPulse <Arrow /></a>
      </article>
    </div>
  );
}
