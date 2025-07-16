import styles from './catalogue.module.css';

export default function Catalogue(){
  return(
    <section id="catalogue" className={`section ${styles.section}`}>
      <h2>Catalogue</h2>
      <p>Explore our range of products.</p>
    </section>
  );
}
